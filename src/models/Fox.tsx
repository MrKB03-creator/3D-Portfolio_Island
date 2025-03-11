
import  { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useGLTF, useAnimations } from '@react-three/drei'
import { invalidate } from '@react-three/fiber'
import scene from '../assets/3d/fox.glb'

interface FoxProps {
  currentAnimation: string;
  [key: string]: unknown;
}

const Fox = ({currentAnimation, ...props}: FoxProps) => {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(scene)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    Object.values(actions).forEach((action) => {
      action?.stop()
    });

      if (actions[currentAnimation]) {
        actions[currentAnimation]?.play();
        invalidate();
      }
  
  }, [actions, currentAnimation]);


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={(nodes.Object_7 as THREE.Mesh).geometry}
          material={materials.PaletteMaterial001}
          skeleton={(nodes.Object_7 as THREE.SkinnedMesh).skeleton}
        />
        <skinnedMesh
          name="Object_8"
          geometry={(nodes.Object_8 as THREE.Mesh).geometry}
          material={materials.PaletteMaterial001}
          skeleton={(nodes.Object_8 as THREE.SkinnedMesh).skeleton}
        />
        <skinnedMesh
          name="Object_9"
          geometry={(nodes.Object_9 as THREE.Mesh).geometry}
          material={materials.PaletteMaterial001}
          skeleton={(nodes.Object_9 as THREE.SkinnedMesh).skeleton}
        />
        <skinnedMesh
          name="Object_10"
          geometry={(nodes.Object_10 as THREE.Mesh).geometry}
          material={materials.PaletteMaterial001}
          skeleton={(nodes.Object_10 as THREE.SkinnedMesh).skeleton}
        />
        <skinnedMesh
          name="Object_11"
          geometry={(nodes.Object_11 as THREE.Mesh).geometry}
          material={materials.PaletteMaterial001}
          skeleton={(nodes.Object_11 as THREE.SkinnedMesh).skeleton}
        />
      </group>
    </group>
  )
}

export default Fox;
