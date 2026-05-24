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

  // Standard loading fallback that resembles the visual core of the model
  const LoadingPlaceholder = () => (
    <div className="w-full h-full relative flex items-center justify-center pointer-events-none select-none">
      {/* Concentric Glow Orbs */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-indigo-500/10 blur-[60px] animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute w-[180px] h-[180px] rounded-full bg-purple-500/5 blur-[40px] animate-[pulse_6s_ease-in-out_infinite_1s]" />
      
      {/* Floating Cyber Core */}
      <div className="relative w-40 h-40 rounded-full border border-white/10 flex items-center justify-center bg-black/40 backdrop-blur-md shadow-2xl animate-[bounce_4s_ease-in-out_infinite]">
        {/* Outer spinning dash ring */}
        <div className="absolute inset-2 rounded-full border border-dashed border-indigo-500/20 animate-[spin_25s_linear_infinite]" />
        
        {/* Inner glowing core */}
        <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-indigo-500/40 to-purple-500/40 blur-sm animate-[pulse_3s_ease-in-out_infinite]" />
        <div className="absolute w-6 h-6 rounded-full bg-white/15 blur-[2px]" />
        
        {/* Orbital particle dots */}
        <div className="absolute w-2 h-2 rounded-full bg-indigo-400 top-4 left-1/2 -translate-x-1/2 shadow-[0_0_10px_#818cf8]" />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-purple-400 bottom-6 right-8 shadow-[0_0_10px_#c084fc]" />
      </div>
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
