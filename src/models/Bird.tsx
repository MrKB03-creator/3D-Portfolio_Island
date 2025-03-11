import birdScene from "../assets/3d/bird.glb";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";

const Bird = () => {
  const { scene, animations } = useGLTF(birdScene);
  const birdRef = useRef<THREE.Mesh>(null);
  
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"]?.play();
  }, [actions]);

  useFrame(({clock, camera}) => {
    if (birdRef.current) {
      birdRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2 + 2;
    }

    if (birdRef.current && birdRef.current.position.x > camera.position.x + 10) {
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current && birdRef.current.position.x < camera.position.x - 10) {
      birdRef.current.rotation.y = 0;
    }

    if (birdRef.current) {
      if (birdRef.current.rotation.y === 0) {
        birdRef.current.position.x += 0.01;
        birdRef.current.position.z -= 0.01;
      } else {
        birdRef.current.position.x -= 0.01;
        birdRef.current.position.z += 0.01;
      }
    }

  });

  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
