import { useState, useEffect } from "react";
import draw from "./draw";

const useAudio = (guid: string): boolean => {
  const [audio, setAudio] = useState(false);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: false,
      })
      .then(
        stream => {
          const canvas =
            document.getElementById(`mc-${guid}`) as HTMLCanvasElement;
          if (canvas) {
            setAudio(true);
            draw(stream, canvas);
          }
        },
        () => {
          alert("发生错误：获取音频失败");
        }
      );
  }, [guid]);

  return audio;
};

export default useAudio;
