import { useRef, useEffect } from 'react';

const Background = () => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    const letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZαβγδεζηθικλμνξοπρστυφχψω'.split('');
    const fontSize = 22;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = new Array(columns).fill(1);
    const speeds = new Array(columns).fill(0).map(() => 0.6 + Math.random() * 0.6);

    ctx.textBaseline = 'top';

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 2, 20, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        const x = i * fontSize + (Math.random() - 0.5) * 2;
        const y = drops[i] * fontSize + (Math.random() - 0.5) * 2;

        ctx.shadowColor = 'rgba(0, 0, 0 , 0.6)';
        ctx.shadowBlur = 12;
        ctx.fillStyle = 'rgba(200, 100, 255, 0.9)';
        ctx.font = `bold ${fontSize}px 'Courier New', 'Monaco', monospace`;
        ctx.fillText(text, x, y);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = -Math.random() * 5;
        }

        drops[i] += speeds[i];
      }

      animationFrameId.current = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      setCanvasSize();
      const newColumns = Math.floor(canvas.width / fontSize);
      drops.length = newColumns;
      speeds.length = newColumns;

      for (let i = 0; i < newColumns; i++) {
        if (drops[i] === undefined) drops[i] = Math.random() * canvas.height / fontSize;
        if (speeds[i] === undefined) speeds[i] = 0.6 + Math.random() * 0.6;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        backgroundColor: '#0a0010',
      }}
    />
  );
};

export default Background;
