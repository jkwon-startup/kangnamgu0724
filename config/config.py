import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    """기본 설정 클래스"""
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'dev-secret-key-change-in-production'
    DEBUG = os.environ.get('DEBUG', 'False').lower() == 'true'
    
    # 파일 업로드 설정
    UPLOAD_FOLDER = os.environ.get('UPLOAD_FOLDER', 'content/assets')
    MAX_CONTENT_LENGTH = int(os.environ.get('MAX_CONTENT_LENGTH', 16 * 1024 * 1024))  # 16MB
    ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif', 'pdf', 'mp4', 'webm', 'md', 'txt'}
    
    # 슬라이드 설정
    SLIDES_FOLDER = 'content/slides'
    TEMPLATES_FOLDER = 'app/templates'
    STATIC_FOLDER = 'app/static'

class DevelopmentConfig(Config):
    """개발 환경 설정"""
    DEBUG = True
    
class ProductionConfig(Config):
    """운영 환경 설정"""
    DEBUG = False
    
config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
} 