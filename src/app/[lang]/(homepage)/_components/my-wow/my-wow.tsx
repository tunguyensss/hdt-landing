"use client";

import { useEffect } from "react";
import { default as WOW } from "wowjs";

interface MyWowProps {}
export default function MyWow(props: MyWowProps) {
  useEffect(() => {
    new WOW().init();
  }, []);

  return null;
}
