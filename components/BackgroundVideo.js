import { useEffect, useRef } from "react";

function BackgroundVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const playVideo = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {
          // autoplay might fail silently, ignore
        });
      }
    };

    // Play initially
    playVideo();

    // Restart if video ends
    video.addEventListener("ended", playVideo);

    // Resume when tab becomes active again
    const handleVisibility = () => {
      if (!document.hidden) {
        playVideo();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      video.removeEventListener("ended", playVideo);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="bg-video"
      muted
      loop
      playsInline
      preload="auto"
    >
      <source src="/video/bg.mp4" type="video/mp4" />
    </video>
  );
}

export default BackgroundVideo;
