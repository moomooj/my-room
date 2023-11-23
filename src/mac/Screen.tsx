import { Plane } from "@react-three/drei";
import { useState } from "react";
import Spotify from "./Spotify";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function Screen() {
  const [screen, spotifyLogo] = useLoader(TextureLoader, [
    "./img/screen.jpg",
    "./img/spotify-logo.png",
  ]);
  const [open, setOpen] = useState(false);

  const openSpotify = () => {
    setOpen(true);
  };
  return (
    <>
      <group
        position={[-3.339, 1.34, -0.76]}
        rotation={[0, Math.PI / 2.9558, 0]}
      >
        <Plane scale={[2.1, 1.26, 0.1]}>
          <meshBasicMaterial map={screen} />
        </Plane>
        <Plane
          position={[-0.45, 0, 0.1]}
          scale={!open ? [0.6, 0.6, 0.1] : [0, 0, 0]}
          onClick={openSpotify}
        >
          <meshBasicMaterial map={spotifyLogo} transparent />
        </Plane>
      </group>

      <Spotify open={open} setOpen={setOpen} />
    </>
  );
}
useLoader.preload(TextureLoader, [
  "./img/screen.jpg",
  "./img/spotify-logo.png",
]);

export default Screen;
