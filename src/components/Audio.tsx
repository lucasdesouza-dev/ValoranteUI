//hooks
import { useRef } from "react";
// Icons
import { BsVolumeUp } from "react-icons/bs";

const Audio = ({ audioUrl }: any) => {
  const audio: any = useRef();

  function playAudio() {
    audio.current.play();
  }

  return (
    <div>
      <audio ref={audio} id="audio" src={audioUrl}></audio>
      <button
        className="bg-neutral-900 text-white font-bold border-2 w-24 rounded-md p-2 flex justify-center items-center "
        onClick={playAudio}
      >
        <BsVolumeUp className="w-16 " /> Audio
      </button>
    </div>
  );
};

export default Audio;
