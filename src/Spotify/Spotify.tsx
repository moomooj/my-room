import { Image } from "@react-three/drei";
import { useState } from "react";

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

function Spotify() {
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
  return (
    <group
      position={[-3.3, 1.35, -0.78]}
      rotation={[0, Math.PI / 3, 0]}
      scale={1.1}
    >
      <Image url="./img/spscreen.jpg" scale={[1.7, 1]} />

      <Image
        url={`./img/${isPlaying.gods ? "spstopgods" : "spgods"}.jpg`}
        position={[0, 0.3, 0.001]}
        scale={[1.45, 0.25]}
        onClick={() => playPause("gods")}
      />

      <Image
        url={`./img/${
          isPlaying.memories ? "spstopmemories" : "spmemories"
        }.jpg`}
        position={[0, 0, 0.001]}
        scale={[1.45, 0.25]}
        onClick={() => playPause("memories")}
      />
      <Image
        url={`./img/${isPlaying.prada ? "spstopprada" : "spprada"}.jpg`}
        position={[0, -0.3, 0.01]}
        scale={[1.45, 0.25]}
        onClick={() => playPause("prada")}
      />
    </group>
  );
}

export default Spotify;
