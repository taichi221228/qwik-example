import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Overlay } from "./overlay";
import { Bananas$ } from "~/integrations/react/bananas";

export default component$(() => {
  return (
    <>
      <Bananas$ speed={1} />
      <Overlay />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
