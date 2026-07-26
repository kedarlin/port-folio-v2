"use client";

interface IntroMaskProps {
  text: string;
}

export default function IntroMask({ text }: IntroMaskProps) {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <mask id="intro-mask">
          <rect width="100%" height="100%" fill="black" />

          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="700"
            fontWeight="900"
            fill="white"
            fontFamily="Inter, sans-serif"
          >
            {text}
          </text>
        </mask>
      </defs>

      <rect width="100%" height="100%" fill="white" mask="url(#intro-mask)" />
    </svg>
  );
}
