from flask import Flask, render_template, jsonify, request, send_from_directory
from flask_cors import CORS
import os
import yaml
import markdown
from config.config import config

def create_app(config_name='default'):
    """Flask 애플리케이션 팩토리"""
    app = Flask(__name__, 
                template_folder='app/templates',
                static_folder='app/static')
    
    # 설정 로드
    app.config.from_object(config[config_name])
    
    # CORS 설정
    CORS(app)
    
    # 업로드 폴더 생성
    os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
    os.makedirs(app.config['SLIDES_FOLDER'], exist_ok=True)
    
    # 마크다운 필터 등록
    @app.template_filter('markdown')
    def markdown_filter(text):
        """마크다운 텍스트를 HTML로 변환"""
        return markdown.markdown(text, extensions=['codehilite', 'fenced_code', 'tables'])
    
    # 라우트 등록
    register_routes(app)
    
    return app

def register_routes(app):
    """라우트 등록"""
    
    @app.route('/')
    def index():
        """메인 페이지"""
        return render_template('index.html')
    
    @app.route('/slides')
    def slides_list():
        """슬라이드 목록 페이지"""
        slides = get_slides_list()
        return render_template('slides_list.html', slides=slides)
    
    @app.route('/slides/<slide_id>')
    def view_slide(slide_id):
        """슬라이드 뷰어 페이지"""
        slide_data = get_slide_data(slide_id)
        if not slide_data:
            return "슬라이드를 찾을 수 없습니다", 404
        
        # AI 교육 슬라이드인 경우 전용 템플릿 사용
        if slide_id == 'ai-education-environmental-instructor':
            return render_template('ai_education_slide_viewer.html', slide_data=slide_data)
        
        return render_template('slide_viewer.html', slide=slide_data)
    
    @app.route('/api/slides')
    def api_slides():
        """슬라이드 목록 API"""
        slides = get_slides_list()
        return jsonify(slides)
    
    @app.route('/api/slides/<slide_id>')
    def api_slide(slide_id):
        """슬라이드 데이터 API"""
        slide_data = get_slide_data(slide_id)
        if not slide_data:
            return jsonify({'error': '슬라이드를 찾을 수 없습니다'}), 404
        return jsonify(slide_data)
    
    @app.route('/assets/<path:filename>')
    def serve_assets(filename):
        """정적 파일 서빙"""
        return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

def get_slides_list():
    """슬라이드 목록 가져오기"""
    slides = []
    slides_folder = 'content/slides'
    
    if os.path.exists(slides_folder):
        for file in os.listdir(slides_folder):
            if file.endswith('.yaml') or file.endswith('.yml'):
                slide_path = os.path.join(slides_folder, file)
                try:
                    with open(slide_path, 'r', encoding='utf-8') as f:
                        slide_data = yaml.safe_load(f)
                        slides.append({
                            'id': os.path.splitext(file)[0],
                            'title': slide_data.get('title', '제목 없음'),
                            'description': slide_data.get('description', ''),
                            'created_at': slide_data.get('created_at', ''),
                            'author': slide_data.get('author', ''),
                            'tags': slide_data.get('tags', [])
                        })
                except Exception as e:
                    print(f"Error loading slide {file}: {e}")
    
    return slides

def get_slide_data(slide_id):
    """슬라이드 데이터 가져오기"""
    slide_path = os.path.join('content/slides', f'{slide_id}.yaml')
    
    if not os.path.exists(slide_path):
        return None
    
    try:
        with open(slide_path, 'r', encoding='utf-8') as f:
            slide_data = yaml.safe_load(f)
            
        # 마크다운 컨텐츠 처리
        if 'slides' in slide_data:
            for slide in slide_data['slides']:
                if 'content' in slide:
                    slide['content_html'] = markdown.markdown(slide['content'])
                    
        return slide_data
    except Exception as e:
        print(f"Error loading slide {slide_id}: {e}")
        return None

if __name__ == '__main__':
    app = create_app('development')
    app.run(host='0.0.0.0', port=5000, debug=True) 