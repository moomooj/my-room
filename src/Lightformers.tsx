import * as THREE from "three";
import { Lightformer } from "@react-three/drei";
import { useRef } from "react";

function Lightformers() {
  const ref = useRef<any>(null);

  return (
    <>
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
        intensity={0.1}
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

      <Lightformer
        type="ring"
        color="#913838"
        intensity={20}
        scale={10}
        position={[-40, 0, 30]}
        rotation={[0, Math.PI / -3, 0]}
        ref={ref}
      />

      {/* Background */}
      <mesh scale={70}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial side={THREE.BackSide} color={"#eaeaea"} />
      </mesh>
    </>
  );
}
export default Lightformers;
