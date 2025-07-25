"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Up from "./Up";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    visible && (
      <Button
        className="rounded-full"
        onClick={scrollToTop}
        aria-label="Volver arriba"
      >
        <Up />
      </Button>
    )
  );
};
export default ScrollToTopButton;
