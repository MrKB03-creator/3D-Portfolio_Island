import { useState } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";

const Home = () => {

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);


  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    const screenPosition = [0, -6.5, -43];
    const Rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, Rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale: [number, number, number], screenPosition: [number, number, number];
  
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0]; // Ensure this has exactly 3 elements
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4]; // Ensure this has exactly 3 elements
    }

    return [screenScale, screenPosition];
  };

  const [screenScale, screenPosition, Rotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition ] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 flex z-10 justify-center items-center">
        {currentStage > 0 && <HomeInfo currentStage={currentStage}/>}
      </div> 
      <Canvas
        camera={{ near: 0.1, far: 1000 }}
        className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            color="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Bird />
          <Sky 
            isRotating={isRotating}
          />
          <Island
            position={screenPosition}
            scale={screenScale}
            rotation={Rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />

          <Plane 
            isRotating={isRotating}
            position={planePosition}
            scale={planeScale}
            rotation={[0, 20.1, 0]}
          />

        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
