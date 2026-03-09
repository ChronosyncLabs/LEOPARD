'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 242;

export default function TigerExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const foregroundCanvasRef = useRef<HTMLCanvasElement>(null);
  const ambientCanvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);

  useEffect(() => {
    const foregroundCanvas = foregroundCanvasRef.current;
    const ambientCanvas = ambientCanvasRef.current;
    if (!foregroundCanvas || !ambientCanvas) return;

    const foregroundCtx = foregroundCanvas.getContext('2d', { alpha: false });
    const ambientCtx = ambientCanvas.getContext('2d', { alpha: false });
    if (!foregroundCtx || !ambientCtx) return;

    // Set canvas dimensions
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      foregroundCanvas.width = width * dpr;
      foregroundCanvas.height = height * dpr;
      ambientCanvas.width = width * dpr;
      ambientCanvas.height = height * dpr;

      foregroundCanvas.style.width = `${width}px`;
      foregroundCanvas.style.height = `${height}px`;
      ambientCanvas.style.width = `${width}px`;
      ambientCanvas.style.height = `${height}px`;

      foregroundCtx.scale(dpr, dpr);
      ambientCtx.scale(dpr, dpr);
    };

    setCanvasSize();

    // Preload images
    const loadImages = async () => {
      const promises = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
        return new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          const frameNum = String(i + 1).padStart(3, '0');
          img.src = `/Nike tiger images/ezgif-frame-${frameNum}.jpg`;
          img.onload = () => resolve(img);
          img.onerror = reject;
        });
      });

      try {
        imagesRef.current = await Promise.all(promises);
        renderFrame(0);
      } catch (error) {
        console.error('Error loading tiger frames:', error);
      }
    };

    // Render frame with dual-canvas technique
    const renderFrame = (frameIndex: number) => {
      const frame = Math.min(Math.floor(frameIndex), TOTAL_FRAMES - 1);
      const img = imagesRef.current[frame];
      if (!img) return;

      const canvasWidth = foregroundCanvas.width / (window.devicePixelRatio || 1);
      const canvasHeight = foregroundCanvas.height / (window.devicePixelRatio || 1);

      // Clear canvases
      foregroundCtx.clearRect(0, 0, canvasWidth, canvasHeight);
      ambientCtx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Calculate dimensions for foreground (contain)
      const imgAspect = img.width / img.height;
      const canvasAspect = canvasWidth / canvasHeight;
      let renderWidth, renderHeight, offsetX, offsetY;

      if (canvasAspect > imgAspect) {
        renderHeight = canvasHeight;
        renderWidth = renderHeight * imgAspect;
        offsetX = (canvasWidth - renderWidth) / 2;
        offsetY = 0;
      } else {
        renderWidth = canvasWidth;
        renderHeight = renderWidth / imgAspect;
        offsetX = 0;
        offsetY = (canvasHeight - renderHeight) / 2;
      }

      // Draw foreground canvas (contain with mask gradient in CSS)
      foregroundCtx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);

      // Draw ambient background (cover with blur)
      const scale = 1.1;
      let bgWidth, bgHeight, bgOffsetX, bgOffsetY;

      if (canvasAspect > imgAspect) {
        bgWidth = canvasWidth * scale;
        bgHeight = bgWidth / imgAspect;
        bgOffsetX = -((bgWidth - canvasWidth) / 2);
        bgOffsetY = -((bgHeight - canvasHeight) / 2);
      } else {
        bgHeight = canvasHeight * scale;
        bgWidth = bgHeight * imgAspect;
        bgOffsetX = -((bgWidth - canvasWidth) / 2);
        bgOffsetY = -((bgHeight - canvasHeight) / 2);
      }

      ambientCtx.drawImage(img, bgOffsetX, bgOffsetY, bgWidth, bgHeight);
    };

    // Setup ScrollTrigger
    const setupScrollAnimation = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
          pin: '.tiger-canvas-wrapper',
          anticipatePin: 1,
        },
      });

      tl.to(currentFrameRef, {
        current: TOTAL_FRAMES - 1,
        ease: 'none',
        onUpdate: () => {
          renderFrame(currentFrameRef.current);
        },
      });
    };

    // Debounced resize handler
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setCanvasSize();
        renderFrame(currentFrameRef.current);
      }, 150);
    };

    window.addEventListener('resize', handleResize);

    // Initialize
    loadImages().then(() => {
      setupScrollAnimation();
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative" style={{ height: '800vh' }}>
      <div className="tiger-canvas-wrapper fixed top-0 left-0 w-full h-screen overflow-hidden">
        {/* Ambient Background Canvas */}
        <canvas
          ref={ambientCanvasRef}
          id="ambient-canvas"
          className="absolute top-0 left-0 w-full h-full"
          style={{
            filter: 'blur(40px) saturate(1.2)',
            transform: 'scale(1.1)',
          }}
        />

        {/* Foreground Canvas with Gradient Mask */}
        <canvas
          ref={foregroundCanvasRef}
          id="tiger-canvas"
          className="absolute top-0 left-0 w-full h-full"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)',
          }}
        />

        {/* Hero Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center px-4">
            <h1
              className="nike-heading text-white"
              style={{ fontSize: 'clamp(3rem, 10vw, 5.5rem)' }}
            >
              HUNGRY FOR MORE
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
