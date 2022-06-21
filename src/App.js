import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";

import styled from "styled-components";
import Background from "./components/Background";
import TextSection from "./components/TextSection";
import Box from "./components/Box";
import Sphere from "./components/AnimatedSphere";
import Iphone from "./components/Iphone";
import { OrbitControls } from "@react-three/drei";
function App() {
  return (
    <Wrapper className="App">
      <Background />
      <TextSection />
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <directionalLight position={[-2, 5, 2]} intensity={1} />
        </Suspense>
        <Box />
      </Canvas>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <directionalLight position={[-2, 5, 2]} intensity={1} />
        </Suspense>
        <Sphere />
      </Canvas>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <directionalLight position={[-2, 5, 2]} intensity={1} />
        </Suspense>
        <Iphone />
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;
  canvas {
    height: 500px;
  }
`;

export default App;
