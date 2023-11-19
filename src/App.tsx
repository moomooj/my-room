import {
  Environment,
  Lightformer,
  OrbitControls,
  Text,
  useHelper,
} from "@react-three/drei";
import Room from "./model/Room";
import { useRef } from "react";
import { SpotLight, SpotLightHelper } from "three";

function App() {
  const spotLightRef = useRef<SpotLight>(null!);
  useHelper(spotLightRef, SpotLightHelper, 1);

  return (
    <>
      <color args={["#3b3a3a"]} attach={"background"} />
      <OrbitControls />
      <Room position={[0, -3, 0]} />
      <Text font="./font/DNFBitBitv2.ttf">20:20</Text>
      <Environment resolution={256}>
        {/* top */}
        <Lightformer
          color={"#ffffff"}
          intensity={1}
          position={[0, 14, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[20, 20, 0]}
        />
        <Lightformer
          color={"#ffffff"}
          intensity={0.1}
          position={[10.1, 6.5, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[20, 15, 0]}
        />
        <Lightformer
          color={"#ffffff"}
          intensity={0.5}
          position={[0, 6.5, 10.1]}
          rotation={[0, 0, 0]}
          scale={[20, 15, 0]}
        />
      </Environment>
    </>
  );
}

export default App;
