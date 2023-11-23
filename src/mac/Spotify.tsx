import { Plane } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useState } from "react";
import { TextureLoader } from "three";

interface IProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type SongName = "gods" | "memories" | "prada" | "";

interface IIsPlaying {
  gods: boolean;
  memories: boolean;
  prada: boolean;
  [key: string]: any;
}
interface IAudio {
  [key: string]: any;
}

function Spotify({ open, setOpen }: IProps) {
  const [
    spscreen,
    spgods,
    spstopgods,
    spstopmemories,
    spmemories,
    spstopprada,
    spprada,
  ] = useLoader(TextureLoader, [
    "./img/spscreen.jpg",
    "./img/spgods.jpg",
    "./img/spstopgods.jpg",
    "./img/spstopmemories.jpg",
    "./img/spmemories.jpg",
    "./img/spstopprada.jpg",
    "./img/spprada.jpg",
  ]);
  const [audio, setAudio] = useState<IAudio>({
    gods: new Audio("./music/gods.mp3"),
    memories: new Audio("./music/memories.mp3"),
    prada: new Audio("./music/prada.mp3"),
  });
  const [isPlaying, setIsPlaying] = useState<IIsPlaying>({
    gods: false,
    memories: false,
    prada: false,
  });

  const playPause = (songName: SongName) => {
    const updatedValues = isPlaying as IIsPlaying;

    for (const key in audio) {
      if (key !== songName) {
        audio[key].pause();
      }
    }

    if (isPlaying[songName]) {
      audio[songName].pause();
    } else {
      audio[songName].play();
    }

    for (const key in updatedValues) {
      if (key !== songName) {
        updatedValues[key] = false;
      }
    }
    updatedValues[`${songName}`] = !isPlaying[songName];

    setIsPlaying({ ...updatedValues });
  };

  const closeSpotify = () => {
    for (const key in audio) {
      audio[key].pause();
    }
    setIsPlaying({ gods: false, memories: false, prada: false });
    setOpen(false);
  };

  return (
    <>
      <group
        position={[-3.3, 1.35, -0.78]}
        rotation={[0, Math.PI / 3, 0]}
        scale={open ? 1.1 : 0}
        visible={open}
      >
        <Plane scale={[1.7, 1, 0.1]} onClick={closeSpotify}>
          <meshBasicMaterial map={spscreen} />
        </Plane>

        <Plane
          position={[0, 0.3, 0.001]}
          scale={[1.45, 0.25, 0.1]}
          onClick={(event) => {
            playPause("gods");
            event.stopPropagation();
          }}
        >
          <meshBasicMaterial map={isPlaying.gods ? spstopgods : spgods} />
        </Plane>

        <Plane
          position={[0, 0, 0.001]}
          scale={[1.45, 0.25, 0.1]}
          onClick={(event) => {
            playPause("memories");
            event.stopPropagation();
          }}
        >
          <meshBasicMaterial
            map={isPlaying.memories ? spstopmemories : spmemories}
          />
        </Plane>

        <Plane
          position={[0, -0.3, 0.01]}
          scale={[1.45, 0.25, 0.1]}
          onClick={(event) => {
            playPause("prada");
            event.stopPropagation();
          }}
        >
          <meshBasicMaterial map={isPlaying.prada ? spstopprada : spprada} />
        </Plane>
      </group>
    </>
  );
}
useLoader.preload(TextureLoader, [
  "./img/spscreen.jpg",
  "./img/spgods.jpg",
  "./img/spstopgods.jpg",
  "./img/spstopmemories.jpg",
  "./img/spmemories.jpg",
  "./img/spstopprada.jpg",
  "./img/spprada.jpg",
]);

export default Spotify;
