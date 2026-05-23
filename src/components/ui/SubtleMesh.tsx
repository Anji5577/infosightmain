import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function WavyPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Create geometry once
  const geometry = useMemo(() => new THREE.PlaneGeometry(20, 20, 32, 32), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime() * 0.2;
    
    const positionAttribute = geometry.attributes.position;
    for (let i = 0; i < positionAttribute.count; i++) {
      const x = positionAttribute.getX(i);
      const y = positionAttribute.getY(i);
      // Gentle wave math
      const z = Math.sin(x * 0.5 + time) * 0.5 + Math.cos(y * 0.5 + time) * 0.5;
      positionAttribute.setZ(i, z);
    }
    positionAttribute.needsUpdate = true;
    
    // Very slow rotation
    meshRef.current.rotation.z = time * 0.05;
  });

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 2.2, 0, 0]} position={[0, -2, 0]}>
      <meshBasicMaterial 
        color="#ffffff" 
        wireframe={true} 
        transparent 
        opacity={0.03} 
        side={THREE.DoubleSide} 
      />
    </mesh>
  );
}

export function SubtleMesh() {
  return (
    <div className="absolute inset-0 z-0 select-none pointer-events-none mix-blend-screen overflow-hidden" aria-hidden="true">
      {/* Gradient mask to fade out the edges */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_70%)] pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />
      
      <Canvas camera={{ position: [0, 2, 5], fov: 60 }} dpr={[1, 2]}>
        <fog attach="fog" args={['#000000', 2, 10]} />
        <WavyPlane />
      </Canvas>
    </div>
  );
}
