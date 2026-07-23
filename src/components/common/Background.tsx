import BackgroundBase from "./BackgoundBase";
import GlowLayer from "./GlowLayer";
import GradientMask from "./GradientMask";
import GridLayer from "./GridLayer";
import NoiseLayer from "./NoiseLayer";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <BackgroundBase />

      <GridLayer />

      <GlowLayer />

      <NoiseLayer />

      <GradientMask />
    </div>
  );
}
