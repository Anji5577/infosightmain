'use client'

import { Suspense, lazy, useEffect, useState, useRef } from 'react'

// Lazy load the Spline component for all devices
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Monitor visibility to only render / play 3D scene when visible
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: '150px' } // Load slightly before scrolled into view
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  // Standard loading fallback with a clean theme spinner loader
  const LoadingPlaceholder = () => (
    <div className="w-full h-full flex items-center justify-center bg-transparent">
      <div className="w-8 h-8 rounded-full border border-white/10 border-t-white/80 animate-spin" />
    </div>
  );

  return (
    <div ref={containerRef} className={`${className} relative`}>
      {isVisible ? (
        <Suspense fallback={<LoadingPlaceholder />}>
          <Spline
            scene={scene}
            className="w-full h-full"
          />
        </Suspense>
      ) : (
        <LoadingPlaceholder />
      )}
    </div>
  )
}
