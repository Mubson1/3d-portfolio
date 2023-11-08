import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const FallingAstronautView = () => {
  const astronaut = useGLTF("./astronaut/scene.gltf");

  return (
    <primitive
      object={astronaut.scene}
      scale={2}
      position-y={0}
      rotation-y={0}
    />
  );
};

const FallingAstronaut = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI}
          minPolarAngle={Math.PI}
        />
        <FallingAstronautView />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default FallingAstronaut;
