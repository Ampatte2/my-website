export const isInViewportListener = (node: HTMLElement | null, onInView: () => void, onOutsideView: () => void, bottomOffset: number) => globalThis.addEventListener("scroll", () => {
  if (node?.getBoundingClientRect().top < globalThis.innerHeight  && (node?.getBoundingClientRect().bottom + bottomOffset) < globalThis.innerHeight) {
    onInView();
  } else {
    onOutsideView();
  }
});

