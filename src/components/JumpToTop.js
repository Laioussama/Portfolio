import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { AiOutlineArrowUp } from "react-icons/ai";

function JumpToTop({ showAfter = 300 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.pageYOffset > showAfter);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <Button
      onClick={scrollTop}
      title="Jump to top"
      aria-label="Jump to top"
      variant="primary"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        borderRadius: "50%",
        padding: "10px 12px",
        zIndex: 1100,
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AiOutlineArrowUp size={20} />
    </Button>
  );
}

export default JumpToTop;
