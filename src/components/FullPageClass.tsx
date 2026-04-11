"use client";

import { useEffect } from "react";

export default function FullPageClass() {
  useEffect(() => {
    document.documentElement.classList.add("fullpage");
    return () => document.documentElement.classList.remove("fullpage");
  }, []);
  return null;
}
