#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
슬라이드 강의안 플랫폼 실행 스크립트
Python 3.10 환경에서 실행하세요.
"""

import sys
import os
from app import create_app

def check_python_version():
    """Python 버전 확인"""
    if sys.version_info < (3, 10):
        print("❌ Python 3.10 이상이 필요합니다.")
        print(f"현재 버전: {sys.version}")
        print("Python 3.10을 설치하고 다시 시도해주세요.")
        sys.exit(1)
    else:
        print(f"✅ Python 버전 확인: {sys.version}")

def main():
    """메인 실행 함수"""
    print("=" * 50)
    print("🎯 슬라이드 강의안 플랫폼 시작")
    print("=" * 50)
    
    # Python 버전 확인
    check_python_version()
    
    # 환경 변수 설정
    os.environ.setdefault('FLASK_ENV', 'development')
    os.environ.setdefault('FLASK_APP', 'app.py')
    
    # Flask 애플리케이션 생성
    app = create_app('development')
    
    print("\n📚 강의안 플랫폼이 시작되었습니다!")
    print("🌐 브라우저에서 http://localhost:5001 으로 접속하세요")
    print("🔄 코드 변경 시 자동으로 서버가 재시작됩니다")
    print("⏹️  서버 중지: Ctrl+C")
    print("-" * 50)
    
    try:
        # 서버 실행
        app.run(
            host='0.0.0.0',
            port=5001,
            debug=True,
            use_reloader=True,
            use_debugger=True
        )
    except KeyboardInterrupt:
        print("\n\n🛑 서버가 중지되었습니다.")
        print("감사합니다! 👋")

if __name__ == '__main__':
    main() 