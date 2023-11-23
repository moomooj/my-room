import { Image } from "@react-three/drei";

function Images() {
  return (
    <>
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
      {/*
      <Image
        url="./img/github.png"
        position={[3.2, 4.76, 4]}
        rotation={[0, Math.PI, 0]}
        scale={[0.8, 0.8]}
        grayscale={10}
        transparent
      />

      <Image
        url="./img/notion.png"
        position={[2.3, 4.75, 4]}
        rotation={[0, Math.PI, 0]}
        scale={[0.5, 0.5]}
        transparent
      /> */}
    </>
  );
}

export default Images;
