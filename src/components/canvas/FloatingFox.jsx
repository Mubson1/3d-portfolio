import { Suspense, useEffect, useState } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
extend({ OrbitControls });

const FloatingFoxView = ({ isMobile }) => {
  const floatingFox = useGLTF("./floating_fox/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={3} position={[2, 0, 1.4]} />
      <primitive
        object={floatingFox.scene}
        scale={isMobile ? 0.45 : 0.85}
        position={isMobile ? [0, -2, 0.2] : [0, -2, 0]}
        rotation={[-0.01, 1.14, -0.1]}
      />
    </mesh>
  );
};

const FloatingFox = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    //mediaQuery.matches is basically asking: are we on a device that is lower that 500 on width
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Suspense will fallback of CanvasLoader means that when it takes time for the children to render, it will show CanvasLoader */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          //rotate in specific axis (horizontally)
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <FloatingFoxView isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default FloatingFox;
