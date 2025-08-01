import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Floating particles component
const FloatingParticles = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 50;

  const particles = useMemo(() => {
    const temp = new THREE.Object3D();
    const positions = [];
    
    for (let i = 0; i < count; i++) {
      positions.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
        ],
        rotation: Math.random() * Math.PI * 2,
        scale: Math.random() * 0.5 + 0.2,
      });
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      particles.forEach((particle, index) => {
        const time = state.clock.getElapsedTime();
        const temp = new THREE.Object3D();
        
        temp.position.set(
          particle.position[0] + Math.sin(time * 0.5 + index) * 0.5,
          particle.position[1] + Math.cos(time * 0.3 + index) * 0.5,
          particle.position[2] + Math.sin(time * 0.7 + index) * 0.3
        );
        
        temp.rotation.set(
          particle.rotation + time * 0.2,
          particle.rotation + time * 0.1,
          particle.rotation + time * 0.3
        );
        
        temp.scale.setScalar(particle.scale * (1 + Math.sin(time + index) * 0.1));
        temp.updateMatrix();
        
        meshRef.current.setMatrixAt(index, temp.matrix);
      });
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <octahedronGeometry args={[0.1, 0]} />
      <meshStandardMaterial 
        color="#6366f1" 
        transparent 
        opacity={0.6}
        metalness={0.8}
        roughness={0.2}
      />
    </instancedMesh>
  );
};

// Main geometric shape
const MainSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial
        color="#8b5cf6"
        transparent
        opacity={0.3}
        wireframe
      />
    </mesh>
  );
};

// Simple connecting lines using drei's Line component
const NetworkLines = () => {
  const linesRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={linesRef}>
      {/* Static connecting lines */}
      <mesh>
        <boxGeometry args={[8, 0.01, 0.01]} />
        <meshBasicMaterial color="#6366f1" transparent opacity={0.3} />
      </mesh>
      <mesh rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[6, 0.01, 0.01]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.2} />
      </mesh>
      <mesh rotation={[0, -Math.PI / 4, 0]}>
        <boxGeometry args={[4, 0.01, 0.01]} />
        <meshBasicMaterial color="#6366f1" transparent opacity={0.25} />
      </mesh>
    </group>
  );
};

const InteractiveBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <pointLight position={[-10, -10, -5]} intensity={0.4} color="#8b5cf6" />
          <directionalLight position={[0, 10, 5]} intensity={0.3} />
          
          <MainSphere />
          <FloatingParticles />
          <NetworkLines />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default InteractiveBackground;