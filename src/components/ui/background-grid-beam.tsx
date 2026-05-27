'use client'

import React, { useEffect, useState, useRef, useMemo } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { cn } from "@/lib/utils"

export const GridBeam: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className
}) => {
  const [isDesktop, setIsDesktop] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkSize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    checkSize()
    window.addEventListener('resize', checkSize)
    return () => window.removeEventListener('resize', checkSize)
  }, [])

  // Create a mouse-move parallax effect for the grid
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 50, stiffness: 200 }
  const gridX = useSpring(mouseX, springConfig)
  const gridY = useSpring(mouseY, springConfig)

  // Mouse spotlight glow values
  const rawGlowX = useMotionValue(0)
  const rawGlowY = useMotionValue(0)
  const glowX = useSpring(rawGlowX, { damping: 45, stiffness: 180 })
  const glowY = useSpring(rawGlowY, { damping: 45, stiffness: 180 })

  // Statically seed background floating particles
  const particles = useMemo(() => {
    return Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2.5 + 0.8,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 6,
      duration: Math.random() * 10 + 14,
      driftX: Math.random() * 40 - 20,
    }))
  }, [])

  // Seeding glowing grid nodes at intersection alignments
  const gridGlowNodes = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: Math.floor(Math.random() * 8) * 12 + 10,
      y: Math.floor(Math.random() * 8) * 12 + 10,
      delay: Math.random() * 4,
    }))
  }, [])

  useEffect(() => {
    if (!isDesktop) return

    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current
      if (!container) return
      const rect = container.getBoundingClientRect()
      
      // Calculate offset from center for parallax (-12px to 12px range)
      const xOffset = ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 12
      const yOffset = ((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * 12
      
      mouseX.set(xOffset)
      mouseY.set(yOffset)

      // Set actual cursor coordinates relative to container for glow
      rawGlowX.set(e.clientX - rect.left)
      rawGlowY.set(e.clientY - rect.top)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isDesktop])

  // Radial gradient mask to fade grid behind text and focus around the robot/3D model area
  const maskStyle = isDesktop
    ? {
        WebkitMaskImage: 'radial-gradient(circle at 72% 50%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0.04) 100%)',
        maskImage: 'radial-gradient(circle at 72% 50%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0.04) 100%)',
      }
    : {
        WebkitMaskImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 75%, rgba(0,0,0,0) 100%)',
        maskImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 75%, rgba(0,0,0,0) 100%)',
      }

  return (
    <div ref={containerRef} className={cn('relative w-full h-full overflow-hidden bg-transparent', className)}>
      {/* Layered cinematic ambient glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,68,245,0.045),transparent_55%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(255,255,255,0.025),transparent_45%)] pointer-events-none z-0" />

      {/* Grid layer with parallax movement & slow automatic float fallback on mobile */}
      <motion.div
        style={{
          x: gridX,
          y: gridY,
          transform: isDesktop ? 'perspective(1000px) rotateX(60deg) scale(1.6)' : 'none',
          transformOrigin: 'top center',
          ...maskStyle
        }}
        animate={isDesktop ? {} : {
          y: [0, -6, 0],
          x: [0, 3, 0]
        }}
        transition={isDesktop ? {} : {
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-[-20px] bg-grid opacity-85 pointer-events-none z-0"
      />

      {/* Pulsing Grid Intersections */}
      {isDesktop && gridGlowNodes.map((node) => (
        <motion.div
          key={`node-${node.id}`}
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
          animate={{
            scale: [0.8, 1.5, 0.8],
            opacity: [0.15, 0.65, 0.15]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: node.delay,
            ease: "easeInOut"
          }}
          className="absolute w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/80 shadow-[0_0_10px_rgba(99,102,241,0.8)] z-0 pointer-events-none"
        />
      ))}

      {/* Interactive mouse-follow spotlight glow (Dual-Intensity Cone) */}
      {isDesktop && (
        <>
          <motion.div
            style={{
              left: glowX,
              top: glowY,
              transform: 'translate(-50%, -50%)',
            }}
            className="absolute w-[600px] h-[600px] bg-indigo-500/[0.04] blur-[120px] rounded-full pointer-events-none z-0 mix-blend-screen"
          />
          <motion.div
            style={{
              left: glowX,
              top: glowY,
              transform: 'translate(-50%, -50%)',
            }}
            className="absolute w-[200px] h-[200px] bg-cyan-400/[0.07] blur-[45px] rounded-full pointer-events-none z-0 mix-blend-screen"
          />
        </>
      )}

      {/* Floating stardust particles with horizontal drift */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [0, -120, 0],
              x: [0, p.driftX, 0],
              opacity: [0, 0.65, 0],
              scale: [0.7, 1.4, 0.7]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut"
            }}
            className="absolute rounded-full bg-indigo-400/40 blur-[0.3px]"
          />
        ))}
      </div>
      
      {/* Soft interactive pulsing glow around the 3D model area */}
      {isDesktop && (
        <div className="absolute right-[8vw] top-[50%] -translate-y-1/2 w-[35vw] h-[35vw] max-w-[550px] max-h-[550px] bg-indigo-500/[0.035] blur-[90px] rounded-full pointer-events-none z-0 border border-indigo-500/[0.015] animate-pulse" style={{ animationDuration: '6s' }} />
      )}

      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  )
}
