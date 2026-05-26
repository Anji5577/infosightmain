import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { SplineScene } from '@/components/ui/splite';
import { Spotlight } from '@/components/ui/spotlight';
import { GridBeam } from '@/components/ui/background-grid-beam';

export function Hero() {
  const splineAppRef = useRef<any>(null);
  const targetScaleRef = useRef(1);
  const currentScaleRef = useRef(1);
  const animationFrameIdRef = useRef<number | null>(null);

  // Mouse tilt control values for 3D Robot mannequin
  const modelRotateX = useMotionValue(0);
  const modelRotateY = useMotionValue(0);
  const springRotateX = useSpring(modelRotateX, { damping: 45, stiffness: 100 });
  const springRotateY = useSpring(modelRotateY, { damping: 45, stiffness: 100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const degX = -((e.clientY - innerHeight / 2) / (innerHeight / 2)) * 6; // -6 to 6 deg rotation on X axis
      const degY = ((e.clientX - innerWidth / 2) / (innerWidth / 2)) * 8; // -8 to 8 deg rotation on Y axis
      modelRotateX.set(degX);
      modelRotateY.set(degY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [modelRotateX, modelRotateY]);

  const updateSplineScale = () => {
    if (!splineAppRef.current) return;
    const width = window.innerWidth;
    
    let target = 1;
    if (width >= 1024) {
      const baseWidth = 1440;
      const scaleFactor = width / baseWidth;
      target = Math.min(Math.max(scaleFactor * 1.05, 0.75), 1.25);
    }
    
    targetScaleRef.current = target;
    
    if (animationFrameIdRef.current === null) {
      animate();
    }
  };

  const animate = () => {
    if (!splineAppRef.current) {
      animationFrameIdRef.current = null;
      return;
    }

    const splineApp = splineAppRef.current;
    const camera = splineApp.camera || splineApp.findObjectByName('Camera') || splineApp.findObjectByName('defaultCamera');
    
    if (!camera) {
      animationFrameIdRef.current = null;
      return;
    }

    if (camera.isOrthographicCamera || camera.zoom !== undefined) {
      if (!camera.userData.initialZoom) {
        camera.userData.initialZoom = camera.zoom || 1;
      }
    } else if (camera.position) {
      if (!camera.userData.initialZ) {
        camera.userData.initialZ = camera.position.z;
      }
    }

    const lerpFactor = 0.08;
    const diff = targetScaleRef.current - currentScaleRef.current;
    
    if (Math.abs(diff) > 0.001) {
      currentScaleRef.current += diff * lerpFactor;
      
      if (camera.isOrthographicCamera || camera.zoom !== undefined) {
        camera.zoom = camera.userData.initialZoom * currentScaleRef.current;
        camera.updateProjectionMatrix();
      } else if (camera.position) {
        camera.position.z = camera.userData.initialZ / currentScaleRef.current;
        camera.updateProjectionMatrix();
      }
      
      animationFrameIdRef.current = requestAnimationFrame(animate);
    } else {
      currentScaleRef.current = targetScaleRef.current;
      if (camera.isOrthographicCamera || camera.zoom !== undefined) {
        camera.zoom = camera.userData.initialZoom * currentScaleRef.current;
        camera.updateProjectionMatrix();
      } else if (camera.position) {
        camera.position.z = camera.userData.initialZ / currentScaleRef.current;
        camera.updateProjectionMatrix();
      }
      animationFrameIdRef.current = null;
    }
  };

  const handleSplineLoad = (splineApp: any) => {
    splineAppRef.current = splineApp;
    updateSplineScale();
  };

  useEffect(() => {
    const handleResize = () => {
      updateSplineScale();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameIdRef.current !== null) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden flex lg:min-h-[95vh] items-center w-full bg-black">
      <GridBeam className="w-full h-full py-16 md:py-24 flex items-center justify-center">
        {/* Spotlight Ambient Beam */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        {/* Cinematic Deep Volumetric Glows */}
        <div className="absolute top-0 left-0 w-full max-w-4xl h-[750px] bg-indigo-500/[0.015] blur-[150px] rounded-full pointer-events-none z-0" />
        <div className="absolute top-1/4 left-1/4 w-full max-w-[550px] h-[550px] bg-indigo-500/10 blur-[170px] rounded-full pointer-events-none z-0 mix-blend-screen" />
        <div className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-cyan-500/[0.02] blur-[140px] rounded-full pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
          
          {/* Left Content Column */}
          <div className="flex flex-col items-start text-left max-w-2xl w-full relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-display font-medium text-white leading-[0.92] tracking-tighter mb-6"
            >
              Turning manual operations into <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-neutral-100 via-white to-neutral-500 bg-clip-text text-transparent">intelligent systems.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-400 max-w-xl mb-10 leading-relaxed font-light"
            >
              We help businesses automate workflows, deploy AI systems, and scale operations without increasing headcount. Production-grade from day one.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto relative z-20"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 rounded-lg bg-white text-black font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out shadow-[0_0_30px_rgba(255,255,255,0.12)] hover:shadow-[0_0_40px_rgba(99,102,241,0.25)] hover:bg-neutral-100 relative overflow-hidden group"
              >
                {/* Sweep hover glare flash effect */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-sweep pointer-events-none" />
                <span className="relative z-10 flex items-center gap-2">
                  Book a consultation
                  <ArrowRight size={16} />
                </span>
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 rounded-lg bg-white/[0.02] border border-white/10 text-white font-medium hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 backdrop-blur-md active:scale-[0.98] relative overflow-hidden group"
              >
                {/* Sweep hover glare flash effect */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-sweep pointer-events-none" />
                <span className="relative z-10">Explore services</span>
              </a>
            </motion.div>
          </div>

          {/* Right 3D Content Container: Overlapped deeper into layout, cursor-reactive tilt */}
          <div className="relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:-right-[7vw] w-full lg:w-[55vw] lg:max-w-[850px] h-[340px] sm:h-[420px] lg:h-[clamp(520px,82vh,850px)] z-0 flex items-center justify-center mt-10 lg:mt-0 select-none pointer-events-none transition-all duration-300 ease-out">
            <motion.div 
              style={{
                rotateX: springRotateX,
                rotateY: springRotateY,
                transformStyle: "preserve-3d",
              }}
              animate={{
                y: [-10, 10, -10]
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-full h-full flex items-center justify-center relative"
            >
              {/* Volumetric glow directly behind the 3D model */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.06),transparent_65%)] pointer-events-none z-0 scale-125" />
              <div className="absolute w-[80%] h-[80%] top-10 left-10 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.04),transparent_50%)] pointer-events-none z-0 blur-[70px] animate-pulse" style={{ animationDuration: '8s' }} />

              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full pointer-events-auto"
                onLoad={handleSplineLoad}
              />
              {/* Grounding Shadow Ellipse */}
              <motion.div 
                animate={{
                  scale: [0.9, 1.1, 0.9],
                  opacity: [0.35, 0.65, 0.35]
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[55%] h-[20px] bg-indigo-500/[0.09] blur-xl rounded-full scale-y-[0.35]"
              />
            </motion.div>
          </div>

        </div>
      </GridBeam>
    </section>
  );
}
