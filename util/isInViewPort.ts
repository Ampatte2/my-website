export const isInViewportListener = (node: HTMLElement | null, onInView: () => void, onOutsideView: () => void, bottomOffset: number) => globalThis.addEventListener("scroll", () => {
  if (node && node?.getBoundingClientRect().top - 100 < globalThis.innerHeight  && (node?.getBoundingClientRect().bottom + bottomOffset) < globalThis.innerHeight) {
    onInView();
  } else {
    onOutsideView();
  }
});

