export default function GlowLayer() {
  return (
    <>
      <div
        className="
          absolute
          left-1/2
          top-0
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/15
          blur-[140px]
        "
      />

      <div
        className="
          absolute
          right-0
          top-[35%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-blue-400/5
          blur-[160px]
        "
      />
    </>
  );
}
