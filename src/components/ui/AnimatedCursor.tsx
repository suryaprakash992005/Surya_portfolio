import { useEffect, useRef } from 'react';

/**
 * AnimatedCursor — zero React re-renders, pure DOM mutations via rAF.
 * Dot: tracks exactly (instant). Ring: eased lag follow.
 * On hover: dot shrinks, ring expands + glows.
 */
export default function AnimatedCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    const trail = trailRef.current!;

    let mouseX = -200, mouseY = -200;
    let ringX = -200, ringY = -200;
    let trailX = -200, trailY = -200;
    let hovering = false;
    let rafId: number;

    // Mouse move — update target positions
    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    // Hover detection — delegate from body
    const onEnter = (e: Event) => {
      const el = e.target as Element;
      if (el.closest('a, button, [data-cursor="hover"]')) {
        hovering = true;
        dot.style.transform = 'translate(-50%, -50%) scale(0)';
        ring.style.width = '52px';
        ring.style.height = '52px';
        ring.style.borderColor = 'rgba(6,182,212,0.9)';
        ring.style.boxShadow = '0 0 20px rgba(6,182,212,0.4), inset 0 0 10px rgba(6,182,212,0.1)';
      }
    };
    const onLeave = (e: Event) => {
      const el = e.target as Element;
      if (el.closest('a, button, [data-cursor="hover"]')) {
        hovering = false;
        dot.style.transform = 'translate(-50%, -50%) scale(1)';
        ring.style.width = '36px';
        ring.style.height = '36px';
        ring.style.borderColor = 'rgba(99,102,241,0.6)';
        ring.style.boxShadow = 'none';
      }
    };
    document.body.addEventListener('mouseover', onEnter, { passive: true });
    document.body.addEventListener('mouseout', onLeave, { passive: true });

    // Hide cursor when leaving window
    const onLeaveDoc = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
      trail.style.opacity = '0';
    };
    const onEnterDoc = () => {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
      trail.style.opacity = '1';
    };
    document.addEventListener('mouseleave', onLeaveDoc);
    document.addEventListener('mouseenter', onEnterDoc);

    // rAF loop — direct DOM style writes, zero React renders
    const loop = () => {
      // Dot: instant
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';

      // Ring: smooth lag (ease factor 0.13)
      ringX += (mouseX - ringX) * 0.13;
      ringY += (mouseY - ringY) * 0.13;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';

      // Trail: slower lag (ease factor 0.07)
      trailX += (mouseX - trailX) * 0.07;
      trailY += (mouseY - trailY) * 0.07;
      trail.style.left = trailX + 'px';
      trail.style.top = trailY + 'px';

      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
      document.body.removeEventListener('mouseover', onEnter);
      document.body.removeEventListener('mouseout', onLeave);
      document.removeEventListener('mouseleave', onLeaveDoc);
      document.removeEventListener('mouseenter', onEnterDoc);
    };
  }, []);

  return (
    <>
      {/* Trail — slowest, faintest */}
      <div ref={trailRef} className="cursor-trail" aria-hidden="true" />
      {/* Ring — lagged follow */}
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      {/* Dot — instant */}
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
