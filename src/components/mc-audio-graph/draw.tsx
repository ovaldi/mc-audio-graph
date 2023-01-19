const draw = (stream: MediaStream, canvas: HTMLCanvasElement): void => {
  const audio = new AudioContext();
  const source = audio.createMediaStreamSource(stream);
  const analyser = audio.createAnalyser();
  const context = canvas.getContext("2d");
  source.connect(analyser);

  if (context) {
    const width = canvas.width;
    const height = canvas.height;
    const count = width / 5;
    const voice = new Uint8Array(analyser.frequencyBinCount);
    const color = context.createLinearGradient(0, 0, 0, height);
    color.addColorStop(0, "#000");
    color.addColorStop(0.4, "#41f8e6");
    color.addColorStop(0.7, "#9c2e4a");
    color.addColorStop(1, "#fefdfd");

    const _draw = () => {
      window.requestAnimationFrame(_draw);
      analyser.getByteFrequencyData(voice);
      context.clearRect(0, 0, width, height);

      const step = Math.floor(voice.length / count);
      const unit = height / 255;
      for (let i = 0; i < count; i++) {
        const freq = voice[step * i];
        context.fillStyle = color;
        context.fillRect(i * 5, height, 3, -freq * unit);
      }
    };

    _draw();
  }
};

export default draw;
