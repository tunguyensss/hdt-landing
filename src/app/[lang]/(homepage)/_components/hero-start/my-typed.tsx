"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

interface MyTypedProps {
  typedStr: string;
}
export default function MyTyped({ typedStr }: MyTypedProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typedArr = typedStr.split("|");

    const typed = new Typed(ref.current, {
      strings: typedArr,
      typeSpeed: 200,
      backSpeed: 100,
      backDelay: 1e3,
      loop: !0,
    });

    return () => {
      typed.destroy();
    };
  }, [typedStr]);

  return <span ref={ref} className="text-blue-700" />;
}
