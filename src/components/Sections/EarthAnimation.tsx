// EarthAnimation.tsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Convert latitude/longitude to 3D position
const latLongToVector3 = (lat: number, lon: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
};

const Earth = () => {
  const texture = new THREE.TextureLoader().load(
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg'
  );

  return (
    <mesh>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const CameraController = () => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!);
  const controlsRef = useRef<any>(null!);
  const phaseRef = useRef<'zoomIn' | 'hold' | 'zoomOut'>('zoomIn');
  const startTimeRef = useRef<number>(0);
  const kenyaPosition = latLongToVector3(1.2921, 36.8219, 1);
  const worldPosition = new THREE.Vector3(0, 0, 5);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    
    if (!startTimeRef.current) startTimeRef.current = elapsedTime;
    const phaseTime = elapsedTime - startTimeRef.current;

    // Kenya position (adjusted for camera focus)
    const kenyaCameraPosition = new THREE.Vector3().copy(kenyaPosition).multiplyScalar(1.5);
    
    switch (phaseRef.current) {
      case 'zoomIn':
        cameraRef.current.position.lerpVectors(
          worldPosition,
          kenyaCameraPosition,
          Math.min(phaseTime / 3, 1)
        );
        if (phaseTime > 3) {
          phaseRef.current = 'hold';
          startTimeRef.current = elapsedTime;
        }
        break;
        
      case 'hold':
        if (phaseTime > 1) {
          phaseRef.current = 'zoomOut';
          startTimeRef.current = elapsedTime;
        }
        break;
        
      case 'zoomOut':
        cameraRef.current.position.lerpVectors(
          kenyaCameraPosition,
          worldPosition,
          Math.min(phaseTime / 4, 1)
        );
        if (phaseTime > 4) {
          phaseRef.current = 'zoomIn';
          startTimeRef.current = elapsedTime;
        }
        break;
    }

    cameraRef.current.lookAt(0, 0, 0);
    if (controlsRef.current) controlsRef.current.update();
  });

  return (
    <>
      <perspectiveCamera
        ref={cameraRef}
        position={[0, 0, 5]}
        fov={45}
        near={0.1}
        far={1000}
      />
      <OrbitControls
        ref={controlsRef}
        enabled={false}
        enableZoom={false}
        enableRotate={false}
      />
    </>
  );
};

const EarthScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Earth />
      <Stars radius={100} depth={50} count={5000} factor={4} />
      <CameraController />
    </Canvas>
  );
};

export default EarthScene;