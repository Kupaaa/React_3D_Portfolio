import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import Media from './3D/Media'

export const SocialMedia = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Media/>
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}


export default SocialMedia ;
