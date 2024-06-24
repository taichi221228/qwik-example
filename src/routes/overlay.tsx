import { component$, useSignal } from "@builder.io/qwik";
import {
  container,
  topLeft,
  bottomLeft,
  bottomRight,
  hamburger,
  leftMiddle,
} from "./styles";
import { VelvetBanana } from "~/components/velvet-banana/velvet-banana";

export const Overlay = component$(() => {
  const speed = useSignal(1);
  return (
    <>
      <div class={container}>
        <div class={topLeft}>
          <h1>
            LANDING
            <br />
            PAGES —
          </h1>
          <p>In React & Threejs —</p>
        </div>
        <div class={bottomLeft}>
          A runtime deconstruction of{" "}
          <a href="https://playful.software">playful.software</a>
        </div>
        <div class={bottomRight}>
          Inspiration and ideas
          <br />
          Fundamentals
          <br />
          Finding models
          <br />
          Preparing them for the web
          <br />
          Displaying and changing models
          <br />
          Animation fundamentals
          <br />
          Effects and making things look good
          <br />
          Performance and time to load
          <br />
        </div>
        <div class={hamburger}>
          <div />
          <div />
          <div />
        </div>
        <VelvetBanana />
      </div>
      <div class={leftMiddle}>
        <input
          type="range"
          min="0"
          max="10"
          value={speed.value}
          step="1"
          onChange$={(e) => {
            const element = e.target as HTMLInputElement | null;
            if (element) speed.value = Number(element.value);
          }}
        />
      </div>
    </>
  );
});
