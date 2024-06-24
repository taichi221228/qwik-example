import { css } from "~/styled-system/css";
import { defineKeyframes } from "@pandacss/dev";

defineKeyframes({
  fade: {
    from: { opacity: 1 },
    to: { opacity: 0 },
  },
});

export const fadeIn = css({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none",
  background: "#ffd863",
  animation: "fade 4s normal forwards ease-in-out",
});

export const container = css({
  fontFamily: "Inter",
  fontSize: "16px",
  "& h1": {
    padding: 0,
    margin: "0 0 0.05em 0",
    fontFamily: "Ayer Poster, serif",
    fontWeight: 400,
    fontSize: "min(18vw, 14em)",
    lineHeight: "0.85em",
  },
});

export const topLeft = css({
  position: "absolute",
  top: "5vw",
  left: "5vw",
});

export const bottomLeft = css({
  position: "absolute",
  bottom: "5vw",
  left: "5vw",
  width: "30ch",
  maxWidth: "40%",
});

export const bottomRight = css({
  position: "absolute",
  bottom: "5vw",
  right: "5vw",
  width: "35ch",
  maxWidth: "40%",
  lineHeight: "1em",
  letterSpacing: "-0.01em",
  textAlign: "right",
});

export const hamburger = css({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  top: "5vw",
  right: "5vw",
  "& > div": {
    position: "relative",
    width: "24px",
    height: "2px",
    background: "#252525",
    marginBottom: "6px",
  },
});

export const leftMiddle = css({
  position: "absolute",
  bottom: "50%",
  right: "5vw",
  fontFamily: "Inter",
  fontWeight: 400,
  lineHeight: "1em",
  letterSpacing: "-0.01em",
  fontSize: "12px",
  transform: "rotate(90deg) translate3d(50%, 0, 0)",
  transformOrigin: "100% 50%",
});
