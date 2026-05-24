import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useAdaptivePerformance } from '../../hooks/useAdaptivePerformance';

// Custom shader to run the wave animation on the GPU instead of CPU
const WavyShader = {
  uniforms: {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color('#ffffff') },
    uOpacity: { value: 0.03 },
  },
  vertexShader: `
    uniform float uTime;
    void main() {
      vec3 pos = position;
      // Gentle wave math on GPU (in parallel)
      pos.z = sin(pos.x * 0.5 + uTime) * 0.5 + cos(pos.y * 0.5 + uTime) * 0.5;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 uColor;
    uniform float uOpacity;
    void main() {
      gl_FragColor = vec4(uColor, uOpacity);
    }
  `
};

function WavyPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Create geometry once and dispose of it on unmount
  const geometry = useMemo(() => new THREE.PlaneGeometry(20, 20, 32, 32), []);
  
  // Create shader material once and dispose of it on unmount
  const material = useMemo(() => new THREE.ShaderMaterial({
    uniforms: THREE.UniformsUtils.clone(WavyShader.uniforms),
    vertexShader: WavyShader.vertexShader,
    fragmentShader: WavyShader.fragmentShader,
    wireframe: true,
    transparent: true,
    side: THREE.DoubleSide
  }), []);

  // Cleanup WebGL resources to prevent memory leaks
  useEffect(() => {
    return () => {
      geometry.dispose();
      material.dispose();
    };
  }, [geometry, material]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime() * 0.2;
    
    // Update shader uniform
    material.uniforms.uTime.value = time;
    
    // Very slow rotation
    meshRef.current.rotation.z = time * 0.05;
  });

  return (
    <mesh 
      ref={meshRef} 
      geometry={geometry} 
      material={material}
      rotation={[-Math.PI / 2.2, 0, 0]} 
      position={[0, -2, 0]}
    />
  );
}

export function SubtleMesh() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const perf = useAdaptivePerformance();

  // Stop WebGL rendering when CTA component is scrolled off-screen (saves 100% GPU)
  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { rootMargin: '100px' }); // Load slightly before coming into view

    observer.observe(containerRef.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 z-0 select-none pointer-events-none mix-blend-screen overflow-hidden" 
      aria-hidden="true"
    >
      {/* Gradient mask to fade out the edges */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_70%)] pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />
      
      {isVisible && (
        <Canvas 
          camera={{ position: [0, 2, 5], fov: 60 }} 
          dpr={perf.dpr} // Restrict DPR dynamically based on device capability
          gl={{ 
            powerPreference: 'low-power', 
            antialias: perf.antialias,
            precision: perf.precision
          }} // Quality settings dynamically tailored to the device
        >
          <fog attach="fog" args={['#000000', 2, 10]} />
          <WavyPlane />
        </Canvas>
      )}
    </div>
  );
}
