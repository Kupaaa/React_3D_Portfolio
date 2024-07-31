import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import Logo from './3D/Logo'

export const Development = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Logo/>
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default Development;