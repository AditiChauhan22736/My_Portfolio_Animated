import {Suspense, useEffect, useState} from 'react';
import { Stats, OrbitControls, Environment, useGLTF, Preload } from '@react-three/drei';
import  CanvasLoader  from '../Loader';
import { events, useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';

const Computers = ({isMobile}) => {
 
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
   
     <mesh>
       <hemisphereLight intensity={5} 
        groundColor="black"/>
      <pointLight intensity={8} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
      object={computer.scene}
      scale={isMobile ? 0.55 : 0.75}
      position={isMobile ? [0, -2.5, -1.5] :[0, -3.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
      />
     </mesh>
    
  );
};
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change',handleMediaQueryChange);
    
    return () => {
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }
  
    }, []);
  




  return(
    <Canvas 
    frameloop="demand"
    shadows
    camera={{position:[20, 3, 5], fov: 25}}
    gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback= {<CanvasLoader />}> 
      <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
       />
       <Computers isMobile = {isMobile} />
      </Suspense>
      <Preload all />
      
    </Canvas>
  );
};
export default ComputersCanvas;