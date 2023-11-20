import * as THREE from "three";
import { Image } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";

function Spotify() {
  const gods = useLoader(THREE.TextureLoader, "./img/spgods.jpg");
  const memories = useLoader(THREE.TextureLoader, "./img/spmemories.jpg");
  const prada = useLoader(THREE.TextureLoader, "./img/spprada.jpg");

  return (
    <group
      position={[-3.3, 1.35, -0.78]}
      rotation={[0, Math.PI / 3, 0]}
      scale={1.1}
    >
      <Image url="./img/spscreen.jpg" scale={[1.7, 1]} />

      <mesh position={[0, 0, 0.001]} scale={[1.45, 0.25, 0]}>
        <planeGeometry />
        <meshBasicMaterial map={gods} />
      </mesh>
      <mesh position={[0, 0.3, 0.001]} scale={[1.45, 0.25, 0]}>
        <planeGeometry />
        <meshBasicMaterial map={memories} />
      </mesh>
      <mesh position={[0, -0.3, 0.001]} scale={[1.45, 0.25, 0]}>
        <planeGeometry />
        <meshBasicMaterial map={prada} />
      </mesh>
    </group>
  );
}

export default Spotify;
