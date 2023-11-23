import { Environment, OrbitControls, Text } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { mobile } from "./utils/Mobile";
import Room from "./model/Room";
import gsap from "gsap";
import Screen from "./mac/Screen";
import Lightformers from "./Lightformers";
import Images from "./Images";

function App() {
  const [time, setTime] = useState("00:00");
  const [rectLight, setRectLight] = useState(true);
  const [focus, setfocus] = useState(false);
  const orbitControlRef = useRef<any>(null!);
  useEffect(() => {
    const today = new Date();
    setTime(
      `${today.getHours() < 10 ? "0" + today.getHours() : today.getHours()}:${
        today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()
      }`
    );
  }, []);

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
        z: -2.55,
      });

      gsap.to(orbitControlRef.current.object.position, {
        duration: 1,
        x: mobile() ? 3.15 : 0,
      });
      gsap.to(orbitControlRef.current.object.position, {
        duration: 1,
        y: mobile() ? 1 : 1.2,
      });
      gsap.to(orbitControlRef.current.object.position, {
        duration: 1,
        z: mobile() ? 3.3 : 1,
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
        x: mobile() ? 30 : 15,
      });
      gsap.to(orbitControlRef.current.object.position, {
        duration: 1,
        y: mobile() ? 10 : 5,
      });
      gsap.to(orbitControlRef.current.object.position, {
        duration: 1,
        z: mobile() ? -35 : -15,
      });
    }
  }, [focus]);

  return (
    <>
      <OrbitControls
        target={[0, 0, 0]}
        ref={orbitControlRef}
        enableZoom={!focus}
        enableRotate={!focus}
        enablePan={!focus}
      />
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
      <Screen />
      <Images />
      <Text
        font="./font/DNFBitBitv2.ttf"
        position={[2.7, 4, 4.1]}
        rotation={[0, Math.PI, 0]}
        scale={0.3}
        color={"#faf8f8"}
      >
        {time}
      </Text>
      <Environment blur={1} resolution={256}>
        <Lightformers />
      </Environment>
    </>
  );
}

export default App;
