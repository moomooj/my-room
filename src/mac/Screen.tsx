import { Image } from "@react-three/drei";
import { useState } from "react";
import Spotify from "./Spotify";

function Screen() {
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
        <Image url="./img/screen.jpg" scale={[2.1, 1.26]} />
        {!open && (
          <Image
            url="./img/spotify-logo.png"
            position={[-0.45, 0, 0.1]}
            scale={[0.6, 0.6]}
            transparent
            onClick={openSpotify}
          />
        )}
      </group>

      {open && <Spotify setOpen={setOpen} />}
    </>
  );
}

export default Screen;
