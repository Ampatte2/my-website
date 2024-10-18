export const isInViewportListenerBase = <K extends keyof WindowEventMap>(type: K) => (node: HTMLElement | null, onInView: () => void, onOutsideView: () => void, bottomOffset: number) => {
  globalThis.addEventListener(type, () => {
    if (node && node?.getBoundingClientRect().top < globalThis.innerHeight  && node?.getBoundingClientRect().bottom < globalThis.innerHeight) {
      console.log("isInView");
      onInView();
    } else {
      console.log("isOutside");
      onOutsideView();
    }
  });
}

export const isInViewportListener = (node: HTMLElement | null, onInView: () => void, onOutsideView: () => void, bottomOffset: number) => {
  isInViewportListenerBase("touchmove")(node, onInView, onOutsideView, bottomOffset);
  isInViewportListenerBase("scroll")(node, onInView, onOutsideView, bottomOffset);
}
