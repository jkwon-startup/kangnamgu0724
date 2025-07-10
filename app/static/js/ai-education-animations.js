// AI 교육 슬라이드 P5.js 배경 애니메이션
// 다양한 배경 애니메이션 효과 구현

let currentAnimation = 'particles';
let animationInstance;

// 애니메이션 관리자
class AnimationManager {
    constructor() {
        this.animations = {
            particles: new ParticleAnimation(),
            wave: new WaveAnimation(),
            geometric: new GeometricAnimation(),
            nature: new NatureAnimation(),
            tech: new TechAnimation(),
            brainstorm: new BrainstormAnimation(),
            presentation: new PresentationAnimation(),
            creative: new CreativeAnimation(),
            media: new MediaAnimation(),
            success: new SuccessAnimation(),
            caution: new CautionAnimation(),
            question: new QuestionAnimation(),
            discussion: new DiscussionAnimation(),
            summary: new SummaryAnimation(),
            tools: new ToolsAnimation(),
            design: new DesignAnimation(),
            celebration: new CelebrationAnimation(),
            eco: new EcoAnimation()
        };
        this.currentAnimation = 'particles';
    }

    switchAnimation(type) {
        if (this.animations[type]) {
            this.currentAnimation = type;
            this.animations[type].reset();
        }
    }

    update() {
        if (this.animations[this.currentAnimation]) {
            this.animations[this.currentAnimation].update();
        }
    }

    draw() {
        if (this.animations[this.currentAnimation]) {
            this.animations[this.currentAnimation].draw();
        }
    }
}

// 기본 파티클 애니메이션
class ParticleAnimation {
    constructor() {
        this.particles = [];
        this.init();
    }

    init() {
        this.particles = [];
        for (let i = 0; i < 50; i++) {
            this.particles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                size: Math.random() * 3 + 1,
                color: `hsla(${Math.random() * 360}, 70%, 70%, 0.3)`
            });
        }
    }

    reset() {
        this.init();
    }

    update() {
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
            if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;
        });
    }

    draw() {
        const canvas = document.getElementById('p5-canvas');
        const ctx = canvas.getContext('2d');
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        this.particles.forEach(particle => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
        });
    }
}

// 웨이브 애니메이션
class WaveAnimation {
    constructor() {
        this.waves = [];
        this.time = 0;
        this.init();
    }

    init() {
        this.waves = [];
        for (let i = 0; i < 3; i++) {
            this.waves.push({
                amplitude: 50 + i * 20,
                frequency: 0.02 + i * 0.01,
                phase: i * Math.PI / 3,
                color: `hsla(${200 + i * 30}, 70%, 70%, 0.2)`
            });
        }
    }

    reset() {
        this.time = 0;
        this.init();
    }

    update() {
        this.time += 0.02;
    }

    draw() {
        const canvas = document.getElementById('p5-canvas');
        const ctx = canvas.getContext('2d');
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        this.waves.forEach(wave => {
            ctx.beginPath();
            ctx.strokeStyle = wave.color;
            ctx.lineWidth = 2;
            
            for (let x = 0; x < canvas.width; x += 5) {
                const y = canvas.height / 2 + 
                         Math.sin(x * wave.frequency + this.time + wave.phase) * wave.amplitude;
                
                if (x === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            ctx.stroke();
        });
    }
}

// 기하학적 애니메이션
class GeometricAnimation {
    constructor() {
        this.shapes = [];
        this.time = 0;
        this.init();
    }

    init() {
        this.shapes = [];
        for (let i = 0; i < 20; i++) {
            this.shapes.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                size: Math.random() * 30 + 10,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.02,
                color: `hsla(${Math.random() * 360}, 60%, 60%, 0.1)`,
                type: Math.floor(Math.random() * 3) // 0: rectangle, 1: circle, 2: triangle
            });
        }
    }

    reset() {
        this.time = 0;
        this.init();
    }

    update() {
        this.time += 0.01;
        this.shapes.forEach(shape => {
            shape.rotation += shape.rotationSpeed;
        });
    }

    draw() {
        const canvas = document.getElementById('p5-canvas');
        const ctx = canvas.getContext('2d');
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        this.shapes.forEach(shape => {
            ctx.save();
            ctx.translate(shape.x, shape.y);
            ctx.rotate(shape.rotation);
            ctx.fillStyle = shape.color;
            
            switch(shape.type) {
                case 0: // rectangle
                    ctx.fillRect(-shape.size/2, -shape.size/2, shape.size, shape.size);
                    break;
                case 1: // circle
                    ctx.beginPath();
                    ctx.arc(0, 0, shape.size/2, 0, Math.PI * 2);
                    ctx.fill();
                    break;
                case 2: // triangle
                    ctx.beginPath();
                    ctx.moveTo(0, -shape.size/2);
                    ctx.lineTo(-shape.size/2, shape.size/2);
                    ctx.lineTo(shape.size/2, shape.size/2);
                    ctx.closePath();
                    ctx.fill();
                    break;
            }
            ctx.restore();
        });
    }
}

// 자연 테마 애니메이션
class NatureAnimation {
    constructor() {
        this.leaves = [];
        this.time = 0;
        this.init();
    }

    init() {
        this.leaves = [];
        for (let i = 0; i < 30; i++) {
            this.leaves.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: (Math.random() - 0.5) * 1,
                vy: Math.random() * 1 + 0.5,
                size: Math.random() * 8 + 3,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.05,
                color: `hsla(${90 + Math.random() * 60}, 70%, 50%, 0.3)`
            });
        }
    }

    reset() {
        this.time = 0;
        this.init();
    }

    update() {
        this.time += 0.01;
        this.leaves.forEach(leaf => {
            leaf.x += leaf.vx + Math.sin(this.time + leaf.y * 0.01) * 0.5;
            leaf.y += leaf.vy;
            leaf.rotation += leaf.rotationSpeed;
            
            if (leaf.y > window.innerHeight + 10) {
                leaf.y = -10;
                leaf.x = Math.random() * window.innerWidth;
            }
            if (leaf.x < -10) leaf.x = window.innerWidth + 10;
            if (leaf.x > window.innerWidth + 10) leaf.x = -10;
        });
    }

    draw() {
        const canvas = document.getElementById('p5-canvas');
        const ctx = canvas.getContext('2d');
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        this.leaves.forEach(leaf => {
            ctx.save();
            ctx.translate(leaf.x, leaf.y);
            ctx.rotate(leaf.rotation);
            ctx.fillStyle = leaf.color;
            
            // 잎사귀 모양 그리기
            ctx.beginPath();
            ctx.ellipse(0, 0, leaf.size, leaf.size * 0.6, 0, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.restore();
        });
    }
}

// 기술 테마 애니메이션
class TechAnimation {
    constructor() {
        this.nodes = [];
        this.connections = [];
        this.time = 0;
        this.init();
    }

    init() {
        this.nodes = [];
        this.connections = [];
        
        for (let i = 0; i < 15; i++) {
            this.nodes.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 4 + 2,
                color: `hsla(${180 + Math.random() * 60}, 70%, 60%, 0.8)`
            });
        }
    }

    reset() {
        this.time = 0;
        this.init();
    }

    update() {
        this.time += 0.01;
        this.nodes.forEach(node => {
            node.x += node.vx;
            node.y += node.vy;
            
            if (node.x < 0 || node.x > window.innerWidth) node.vx *= -1;
            if (node.y < 0 || node.y > window.innerHeight) node.vy *= -1;
        });
        
        // 연결선 계산
        this.connections = [];
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                const dx = this.nodes[i].x - this.nodes[j].x;
                const dy = this.nodes[i].y - this.nodes[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    this.connections.push({
                        from: this.nodes[i],
                        to: this.nodes[j],
                        alpha: 1 - distance / 150
                    });
                }
            }
        }
    }

    draw() {
        const canvas = document.getElementById('p5-canvas');
        const ctx = canvas.getContext('2d');
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 연결선 그리기
        this.connections.forEach(conn => {
            ctx.beginPath();
            ctx.moveTo(conn.from.x, conn.from.y);
            ctx.lineTo(conn.to.x, conn.to.y);
            ctx.strokeStyle = `rgba(52, 152, 219, ${conn.alpha * 0.3})`;
            ctx.lineWidth = 1;
            ctx.stroke();
        });
        
        // 노드 그리기
        this.nodes.forEach(node => {
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
            ctx.fillStyle = node.color;
            ctx.fill();
        });
    }
}

// 브레인스토밍 애니메이션
class BrainstormAnimation {
    constructor() {
        this.ideas = [];
        this.time = 0;
        this.init();
    }

    init() {
        this.ideas = [];
        for (let i = 0; i < 20; i++) {
            this.ideas.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: (Math.random() - 0.5) * 1,
                vy: (Math.random() - 0.5) * 1,
                size: Math.random() * 15 + 5,
                pulse: Math.random() * Math.PI * 2,
                color: `hsla(${Math.random() * 60 + 300}, 70%, 70%, 0.4)`
            });
        }
    }

    reset() {
        this.time = 0;
        this.init();
    }

    update() {
        this.time += 0.03;
        this.ideas.forEach(idea => {
            idea.x += idea.vx;
            idea.y += idea.vy;
            idea.pulse += 0.1;
            
            if (idea.x < 0 || idea.x > window.innerWidth) idea.vx *= -1;
            if (idea.y < 0 || idea.y > window.innerHeight) idea.vy *= -1;
        });
    }

    draw() {
        const canvas = document.getElementById('p5-canvas');
        const ctx = canvas.getContext('2d');
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        this.ideas.forEach(idea => {
            const pulseSize = idea.size + Math.sin(idea.pulse) * 3;
            ctx.beginPath();
            ctx.arc(idea.x, idea.y, pulseSize, 0, Math.PI * 2);
            ctx.fillStyle = idea.color;
            ctx.fill();
            
            // 내부 광채 효과
            ctx.beginPath();
            ctx.arc(idea.x, idea.y, pulseSize * 0.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, 0.2)`;
            ctx.fill();
        });
    }
}

// 기타 애니메이션 클래스들 (간단한 구현)
class PresentationAnimation extends GeometricAnimation {}
class CreativeAnimation extends NatureAnimation {}
class MediaAnimation extends TechAnimation {}
class SuccessAnimation extends ParticleAnimation {}
class CautionAnimation extends WaveAnimation {}
class QuestionAnimation extends BrainstormAnimation {}
class DiscussionAnimation extends TechAnimation {}
class SummaryAnimation extends GeometricAnimation {}
class ToolsAnimation extends TechAnimation {}
class DesignAnimation extends CreativeAnimation {}
class EcoAnimation extends NatureAnimation {}

// 축하 애니메이션
class CelebrationAnimation {
    constructor() {
        this.confetti = [];
        this.time = 0;
        this.init();
    }

    init() {
        this.confetti = [];
        for (let i = 0; i < 100; i++) {
            this.confetti.push({
                x: Math.random() * window.innerWidth,
                y: -10,
                vx: (Math.random() - 0.5) * 4,
                vy: Math.random() * 2 + 1,
                size: Math.random() * 6 + 2,
                color: `hsla(${Math.random() * 360}, 70%, 60%, 0.8)`,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.1
            });
        }
    }

    reset() {
        this.time = 0;
        this.init();
    }

    update() {
        this.time += 0.02;
        this.confetti.forEach(piece => {
            piece.x += piece.vx;
            piece.y += piece.vy;
            piece.rotation += piece.rotationSpeed;
            
            if (piece.y > window.innerHeight + 10) {
                piece.y = -10;
                piece.x = Math.random() * window.innerWidth;
            }
        });
    }

    draw() {
        const canvas = document.getElementById('p5-canvas');
        const ctx = canvas.getContext('2d');
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        this.confetti.forEach(piece => {
            ctx.save();
            ctx.translate(piece.x, piece.y);
            ctx.rotate(piece.rotation);
            ctx.fillStyle = piece.color;
            ctx.fillRect(-piece.size/2, -piece.size/2, piece.size, piece.size);
            ctx.restore();
        });
    }
}

// 애니메이션 매니저 초기화
let animationManager;

// 캔버스 초기화
function initCanvas() {
    const canvas = document.createElement('canvas');
    canvas.id = 'p5-canvas';
    canvas.className = 'p5-canvas';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // 기존 캔버스 제거
    const existingCanvas = document.getElementById('p5-canvas');
    if (existingCanvas) {
        existingCanvas.remove();
    }
    
    // 현재 슬라이드에 캔버스 추가
    const currentSlide = document.querySelector('.reveal .slides section.present');
    if (currentSlide) {
        currentSlide.appendChild(canvas);
    }
    
    return canvas;
}

// 애니메이션 루프
function animate() {
    if (animationManager) {
        animationManager.update();
        animationManager.draw();
    }
    requestAnimationFrame(animate);
}

// 슬라이드 변경 감지 및 애니메이션 전환
function onSlideChanged(event) {
    const slide = event.currentSlide;
    const animationType = slide.getAttribute('data-animation') || 'particles';
    
    // 캔버스 재초기화
    initCanvas();
    
    // 애니메이션 전환
    if (animationManager) {
        animationManager.switchAnimation(animationType);
    }
}

// 창 크기 변경 시 캔버스 리사이즈
function onWindowResize() {
    const canvas = document.getElementById('p5-canvas');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
}

// 초기화
document.addEventListener('DOMContentLoaded', function() {
    animationManager = new AnimationManager();
    initCanvas();
    animate();
    
    // Reveal.js 이벤트 리스너
    if (typeof Reveal !== 'undefined') {
        Reveal.addEventListener('slidechanged', onSlideChanged);
        Reveal.addEventListener('ready', onSlideChanged);
    }
    
    // 창 리사이즈 이벤트
    window.addEventListener('resize', onWindowResize);
});

// 애니메이션 타입 설정 함수 (외부에서 호출 가능)
function setAnimation(type) {
    if (animationManager) {
        animationManager.switchAnimation(type);
    }
} 