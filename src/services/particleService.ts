type Particle = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
};

export const initParticleCanvas = (canvas: HTMLCanvasElement | null) => {
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];

    const initParticles = () => {
        particles.length = 0;
        for (let i = 0; i < 90; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                size: Math.random() * 2 + 1,
            });
        }
    };

    initParticles();

    let animationFrame: number;
    const render = () => {
        ctx.clearRect(0, 0, width, height);

        particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(168, 85, 247, 0.4)`;
            ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 110) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(168, 85, 247, ${0.15 * (1 - dist / 110)
                        })`;
                    ctx.lineWidth = 0.7;
                    ctx.stroke();
                }
            }
        });

        animationFrame = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
        width = (canvas.width = window.innerWidth);
        height = (canvas.height = window.innerHeight);
        initParticles();
    };

    window.addEventListener("resize", handleResize);

    // cleanup function used by hook
    return () => {
        cancelAnimationFrame(animationFrame);
        window.removeEventListener("resize", handleResize);
    };
};
