import {
  Environment,
  Image,
  Lightformer,
  OrbitControls,
  Text,
} from "@react-three/drei";
import Room from "./model/Room";
import { useEffect, useState } from "react";
import { Perf } from "r3f-perf";
import Spotify from "./Spotify/Spotify";

function App() {
  const [time, setTime] = useState("00:00");
  const [rectLight, setRectLight] = useState(true);

  useEffect(() => {
    const today = new Date();
    setTime(`${today.getHours()}:${today.getMinutes()}`);
  }, []);

  return (
    <>
      {/* Debug */}
      <Perf position="top-left" />
      <color args={["#3b3a3a"]} attach={"background"} />
      <OrbitControls />
      {rectLight && (
        <rectAreaLight
          intensity={40}
          position={[-3.9, 3.9, 1]}
          rotation={[Math.PI / -2, -1, 0]}
          width={0.5}
          height={5}
        />
      )}

      <Room position={[0, -3, 0]} setRectLight={setRectLight} />
      <Text
        font="./font/DNFBitBitv2.ttf"
        position={[2.7, 4, 4.1]}
        rotation={[0, Math.PI, 0]}
        scale={0.3}
        color={"#faf8f8"}
      >
        {time}
      </Text>
      <Spotify />
      <Image
        url="./img/mac-screen.jpg"
        position={[-4.02, 1.34, 1.25]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1.93, 1.1]}
      />
      <Image
        url="./img/three.jpg"
        position={[-3.13, 1.35, 3.15]}
        rotation={[0, Math.PI / 1.39, 0]}
        scale={[2, 1.14]}
      />

      <Image
        url="./img/lala.jpg"
        position={[-0.42, 4.3, 4]}
        rotation={[0, Math.PI, 0]}
        scale={[2.3, 1.4]}
      />

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
