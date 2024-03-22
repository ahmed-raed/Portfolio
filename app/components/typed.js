"use client";

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = ({ strings }) => {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedTextRef.current, {
      strings: strings,
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [strings]);

  return <span ref={typedTextRef} />;
};

export default TypedText;
