import React, { useEffect, useRef, type JSX } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three'

type HeadphonesProps = JSX.IntrinsicElements["group"] & {
  color: string;
};

export default function Headphones({ color, ...props }: HeadphonesProps) {
  const gltf = useGLTF("/models/beats_headphones.glb");
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    const targets = ['BlackPlastic', 'BlackLeazer', 'Metals', 'Material', 'Material.001', 'Material.003']

    targets.forEach((name) => {
      const mat = gltf.materials[name] as THREE.MeshStandardMaterial
      if (mat){
        mat.color.set(color)
        mat.needsUpdate = true
      }
    })
  }, [color, gltf.materials])

  return (
    <group ref={groupRef} {...props}>
      <primitive object={gltf.scene} scale={0.2}/>
    </group>
  );
}

useGLTF.preload("/models/beats_headphones.glb");