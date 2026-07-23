import BackgroundBase from "./BackgoundBase";
import GlowLayer from "../../common/GlowLayer";
import GradientMask from "../../common/GradientMask";
import GridLayer from "../../common/GridLayer";
import NoiseLayer from "../../common/NoiseLayer";

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
