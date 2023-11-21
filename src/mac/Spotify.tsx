import { Image } from "@react-three/drei";
import { useState } from "react";

interface IProps {
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

function Spotify({ setOpen }: IProps) {
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
        scale={1.1}
      >
        <Image
          url="./img/spscreen.jpg"
          scale={[1.7, 1]}
          onClick={closeSpotify}
        />
        <Image
          url={`./img/${isPlaying.gods ? "spstopgods" : "spgods"}.jpg`}
          position={[0, 0.3, 0.001]}
          scale={[1.45, 0.25]}
          onClick={(event) => {
            playPause("gods");
            event.stopPropagation();
          }}
        />

        <Image
          url={`./img/${
            isPlaying.memories ? "spstopmemories" : "spmemories"
          }.jpg`}
          position={[0, 0, 0.001]}
          scale={[1.45, 0.25]}
          onClick={(event) => {
            playPause("memories");
            event.stopPropagation();
          }}
        />
        <Image
          url={`./img/${isPlaying.prada ? "spstopprada" : "spprada"}.jpg`}
          position={[0, -0.3, 0.01]}
          scale={[1.45, 0.25]}
          onClick={(event) => {
            playPause("prada");
            event.stopPropagation();
          }}
        />
      </group>
    </>
  );
}

export default Spotify;
