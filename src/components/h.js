import { useEffect, useState } from "react";

function Hero() {
  const fullText = "Hi, I’m Jay";
  const [count, setCount] = useState(0);
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    const typing = setInterval(() => {
      setCount((prev) => {
        if (prev < fullText.length) {
          return prev + 1;
        } else {
          clearInterval(typing);
          setTimeout(() => setShowSubtitle(true), 400);
          return prev;
        }
      });
    }, 120);

    return () => clearInterval(typing);
  }, []);

  return (
    <div className="hero">
      <h1 className="typing">
        {fullText.slice(0, count)}
        <span className="cursor">|</span>
     </h1>


      {showSubtitle && (
        <p className="subtitle fire-reveal">
          BTech ICT Student | Going Beyond
        </p>
      )}
    </div>
  );
}

export default Hero;
