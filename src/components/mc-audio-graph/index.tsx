import "./index.css";
import React, { FC } from "react";
import useAudio from "./use-audio";
import useGuid from "hooks/use-guid";

const McAudioGraph: FC = () => {
  const guid = useGuid();
  const audio = useAudio(guid);

  return (
    <div className="mc-audio-graph">
      <canvas id={`mc-${guid}`} className="mc-audio-graph__canvas" />
      <div className="mc-audio-graph__status">
        {audio ? "有音频输入" : "无音频输入"}
      </div>
    </div>
  );
};

export default McAudioGraph;
