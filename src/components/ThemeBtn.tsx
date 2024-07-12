import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";

export default function ThemeBtn() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (theme === "dark") {
    return <AiOutlineMoon size={23} onClick={() => setTheme("light")} />;
  } else if (theme === "light") {
    return <AiOutlineSun size={23} onClick={() => setTheme("dark")} />;
  }
}
