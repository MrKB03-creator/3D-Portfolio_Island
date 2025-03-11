import { useGLTF } from "@react-three/drei";
import skyScene from "../assets/3d/sky.glb"; 
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SkyProps {
  isRotating: boolean;
}

const Sky = ({ isRotating }: SkyProps) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef<THREE.Mesh>(null);

  useFrame((_,delta) => {
    if (isRotating) {
      if (skyRef.current) {
        skyRef.current.rotation.y += 0.15 * delta;
      }
    }
  });
  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
