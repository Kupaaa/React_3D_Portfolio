import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import Pic from './3D/Pic';

const Illustration = () => {
  return (
<Canvas>
      <Stage environment="city" intensity={0.6}>
        <Pic/>
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Illustration;