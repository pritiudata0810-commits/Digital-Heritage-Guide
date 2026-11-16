import { useEffect, useRef } from 'react';

interface AudioVisualizerProps {
  isPlaying: boolean;
  barCount?: number;
  height?: number;
  className?: string;
  color?: string;
}

export function AudioVisualizer({
  isPlaying,
  barCount = 16,
  height = 24,
  className = "",
  color = "#d97706"
}: AudioVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let phase = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const h = canvas.height;
      const barWidth = Math.max(2, (width / barCount) - 2);

      for (let i = 0; i < barCount; i++) {
        let barH = 3;
        if (isPlaying) {
          // Sinusoidal waveform simulation mimicking acoustic resonant frequencies
          const wave1 = Math.sin((i * 0.4) + phase);
          const wave2 = Math.cos((i * 0.8) - phase * 1.5);
          const norm = Math.abs((wave1 + wave2) / 2);
          barH = Math.max(4, norm * (h - 4));
        }

        const x = i * (barWidth + 2);
        const y = (h - barH) / 2;

        ctx.fillStyle = isPlaying ? color : 'rgba(168, 162, 158, 0.3)';
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, barH, 2);
        ctx.fill();
      }

      if (isPlaying) {
        phase += 0.15;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying, barCount, color]);

  return (
    <canvas
      ref={canvasRef}
      width={barCount * 6}
      height={height}
      className={`block ${className}`}
      aria-label={isPlaying ? "Audio playing waveform visualizer" : "Audio stopped"}
    />
  );
}
