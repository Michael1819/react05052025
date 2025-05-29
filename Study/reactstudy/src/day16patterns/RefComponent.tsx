import { useEffect, useRef, useState } from "react";

export default function RefComponent() {
  const [showTopButton, setShowTopButton] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 300 && lastScrollY.current <= 300) {
        setShowTopButton(true);
      } else if (currentScrollY <= 300 && lastScrollY.current > 300) {
        setShowTopButton(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div style={{ height: "1500px", padding: "20px" }}>
        Scroll down to see the "Back to Top" button.
        {showTopButton && <button style={{ position: "fixed", bottom: "20px" }}>⬆ Back to Top</button>}
      </div>
    </>
  );
}
