import { Environment, Image, OrbitControls, Text } from "@react-three/drei";
import Room from "./model/Room";
import { useEffect, useRef, useState } from "react";
import { Perf } from "r3f-perf";
import gsap from "gsap";
import Screen from "./mac/Screen";
import Lightformers from "./Lightformers";

function App() {
  const [time, setTime] = useState("00:00");
  const [rectLight, setRectLight] = useState(true);
  const [focus, setfocus] = useState(false);

  useEffect(() => {
    const today = new Date();
    setTime(
      `${today.getHours() < 10 ? "0" + today.getHours() : today.getHours()}:${
        today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()
      }`
    );
  }, []);
  const orbitControlRef = useRef<any>(null!);

  useEffect(() => {
    if (focus) {
      gsap.to(orbitControlRef.current.target, {
        duration: 1,
        x: -6.2,
      });
      gsap.to(orbitControlRef.current.target, {
        duration: 1,
        y: 1.24,
      });
      gsap.to(orbitControlRef.current.target, {
        duration: 1,
        z: -2.35,
      });

      gsap.to(orbitControlRef.current.object.position, {
        duration: 1,
        x: 0,
      });
      gsap.to(orbitControlRef.current.object.position, {
        duration: 1,
        y: 1.2,
      });
      gsap.to(orbitControlRef.current.object.position, {
        duration: 1,
        z: 1,
      });
    } else {
      gsap.to(orbitControlRef.current.target, {
        duration: 1,
        x: 0,
      });
      gsap.to(orbitControlRef.current.target, {
        duration: 1,
        y: 0,
      });
      gsap.to(orbitControlRef.current.target, {
        duration: 1,
        z: 0,
      });

      gsap.to(orbitControlRef.current.object.position, {
        duration: 1,
        x: 15,
      });
      gsap.to(orbitControlRef.current.object.position, {
        duration: 1,
        y: 5,
      });
      gsap.to(orbitControlRef.current.object.position, {
        duration: 1,
        z: -15,
      });
    }
  }, [focus]);

  return (
    <>
      {/* Debug */}
      <Perf position="top-left" />
      <OrbitControls target={[0, 0, 0]} ref={orbitControlRef} />

      {rectLight && (
        <rectAreaLight
          intensity={40}
          position={[-3.9, 3.9, 1]}
          rotation={[Math.PI / -2, -1, 0]}
          width={0.5}
          height={5}
        />
      )}

      <Room
        position={[0, -3, 0]}
        setRectLight={setRectLight}
        setfocus={setfocus}
        focus={focus}
      />
      <Text
        font="./font/DNFBitBitv2.ttf"
        position={[2.7, 4, 4.1]}
        rotation={[0, Math.PI, 0]}
        scale={0.3}
        color={"#faf8f8"}
      >
        {time}
      </Text>
      <Screen />
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

      <Environment blur={1} resolution={256} background>
        <Lightformers />
      </Environment>
    </>
  );
}

export default App;
