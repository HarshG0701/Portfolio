
import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, vx: 0, vy: 0 });
  const lastMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    // Vibrant Fluid Orbs
    const orbs = [
      { x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: 850, h: 166, s: 100, l: 65, a: 0.22, speedX: 0.02, speedY: 0.03 }, // Neon Mint
      { x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: 1300, h: 217, s: 95, l: 55, a: 0.16, speedX: 0.015, speedY: 0.025 }, // Electric Blue
      { x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: 950, h: 280, s: 85, l: 45, a: 0.18, speedX: 0.03, speedY: 0.012 }, // Deep Purple
      { x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: 1600, h: 190, s: 95, l: 60, a: 0.12, speedX: 0.012, speedY: 0.022 }, // Cyan
    ];

    // Physics Particles for "Flow"
    const particles: any[] = [];
    const createParticle = (x: number, y: number, vx: number, vy: number) => {
      return {
        x, y, vx, vy,
        life: 1.0,
        size: Math.random() * 4 + 2,
        colorHue: Math.random() * 60 + 160 // Range of blues/teals
      };
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.targetX = e.clientX;
      mouse.current.targetY = e.clientY;
      
      // Calculate cursor velocity for flow dynamics
      mouse.current.vx = e.clientX - lastMouse.current.x;
      mouse.current.vy = e.clientY - lastMouse.current.y;
      
      lastMouse.current.x = e.clientX;
      lastMouse.current.y = e.clientY;

      // Spawn trail particles on fast movement
      if (Math.abs(mouse.current.vx) + Math.abs(mouse.current.vy) > 8) {
        for(let i=0; i<3; i++) {
          particles.push(createParticle(
            e.clientX, 
            e.clientY, 
            (Math.random() - 0.5) * 3 + mouse.current.vx * 0.15,
            (Math.random() - 0.5) * 3 + mouse.current.vy * 0.15
          ));
        }
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      // Smoothly update mouse position for soft transitions
      mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.1;
      mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.1;

      const time = Date.now() * 0.001;

      // Solid Deep Navy Base
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#01040a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 1. Draw Liquid Orbs with Screen Blending
      ctx.globalCompositeOperation = 'screen';
      orbs.forEach((orb, i) => {
        // Orbit around mouse with distinct lag/inertia
        const targetX = mouse.current.x + Math.sin(time * 0.6 + i) * 180;
        const targetY = mouse.current.y + Math.cos(time * 0.5 + i) * 180;
        
        orb.x += (targetX - orb.x) * orb.speedX;
        orb.y += (targetY - orb.y) * orb.speedY;

        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
        const hue = (orb.h + Math.sin(time * 0.3) * 30) % 360;
        grad.addColorStop(0, `hsla(${hue}, ${orb.s}%, ${orb.l}%, ${orb.a})`);
        grad.addColorStop(0.5, `hsla(${(hue + 20) % 360}, ${orb.s}%, 40%, ${orb.a * 0.5})`);
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // 2. Trail Particle System
      ctx.globalCompositeOperation = 'lighter';
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.02;
        p.vx *= 0.97;
        p.vy *= 0.97;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.fillStyle = `hsla(${p.colorHue}, 100%, 75%, ${p.life * 0.6})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fill();
        
        // Connect nearby particles for a web-like game effect
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const d = Math.sqrt(dx*dx + dy*dy);
        if (d < 150) {
          ctx.strokeStyle = `hsla(${p.colorHue}, 100%, 75%, ${p.life * 0.15})`;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.current.x, mouse.current.y);
          ctx.stroke();
        }
      }

      // 3. Reactive Cyber Mesh Grid
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = 'rgba(100, 255, 218, 0.07)';
      ctx.lineWidth = 0.6;
      const gridSize = 85;
      const margin = 100;
      
      for (let x = -margin; x < canvas.width + margin; x += gridSize) {
        ctx.beginPath();
        for (let y = -margin; y < canvas.height + margin; y += 15) {
          const dx = x - mouse.current.x;
          const dy = y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const warpForce = Math.max(0, 1 - dist / 350);
          const warpX = (dx / dist) * warpForce * -50;
          
          const drawX = x + (isNaN(warpX) ? 0 : warpX);
          if (y === -margin) ctx.moveTo(drawX, y);
          else ctx.lineTo(drawX, y);
        }
        ctx.stroke();
      }
      
      for (let y = -margin; y < canvas.height + margin; y += gridSize) {
        ctx.beginPath();
        for (let x = -margin; x < canvas.width + margin; x += 15) {
          const dx = x - mouse.current.x;
          const dy = y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const warpForce = Math.max(0, 1 - dist / 350);
          const warpY = (dy / dist) * warpForce * -50;
          
          const drawY = y + (isNaN(warpY) ? 0 : warpY);
          if (x === -margin) ctx.moveTo(x, drawY);
          else ctx.lineTo(x, drawY);
        }
        ctx.stroke();
      }

      // Maintain reasonable particle count for performance
      if (particles.length > 80) particles.shift();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none"
      style={{ backgroundColor: '#01040a' }}
    />
  );
};

export default AnimatedBackground;
