import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import Bottle from './3D/Bottle';

const ProductDesign = () => {
  return (
    <Canvas size={[400, 200, 0.5]} >
      <Stage environment="city" intensity={0.6} >
        <Bottle/>
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ProductDesign;