import planeScene from "../assets/3d/plane.glb";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from 'three';
import { useEffect, useRef } from "react";

interface PlaneProps {
  isRotating: boolean;
  position: [number, number, number];
  [key: string]: boolean | string | number | [number, number, number];
}

const Plane = ({ isRotating, position, ...props }: PlaneProps) => {
  const ref = useRef<THREE.Mesh>(null);
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"]?.play();
    } else {
      actions["Take 001"]?.stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} position={new THREE.Vector3(...position)} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
