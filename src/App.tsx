import {
  Environment,
  Lightformer,
  OrbitControls,
  Text,
  useHelper,
} from "@react-three/drei";
import Room from "./model/Room";
import { useRef } from "react";
import { RectAreaLight } from "three";
import { RectAreaLightHelper } from "three/examples/jsm/Addons.js";

function App() {
  const rectAreaLightRef = useRef<RectAreaLight>(null!);
  useHelper(rectAreaLightRef, RectAreaLightHelper, 1);

  return (
    <>
      <color args={["#3b3a3a"]} attach={"background"} />
      <OrbitControls />
      <rectAreaLight
        intensity={40}
        position={[-3.9, 3.9, 1]}
        rotation={[Math.PI / -2, -1, 0]}
        width={0.5}
        height={5}
      />
      <Room position={[0, -3, 0]} />
      <Text
        font="./font/DNFBitBitv2.ttf"
        position={[2.7, 4, 4.1]}
        rotation={[0, Math.PI, 0]}
        scale={0.3}
        color={"red"}
      >
        20:20
      </Text>
      <Environment resolution={256}>
        {/* top */}
        <Lightformer
          color={"#ffffff"}
          intensity={0.1}
          position={[0, 14, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[20, 20, 0]}
        />
        <Lightformer
          color={"#ffffff"}
          intensity={0.2}
          position={[5, 1, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[9, 9, 0]}
        />
        <Lightformer
          color={"#ffffff"}
          intensity={0.1}
          position={[-0.8, 1, -5]}
          rotation={[0, 0, 0]}
          scale={[9, 9, 0]}
        />
      </Environment>
    </>
  );
}

export default App;
