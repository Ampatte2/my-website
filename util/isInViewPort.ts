export const isInViewportListenerBase = <K extends keyof WindowEventMap>(type: K) => (node: HTMLElement | null, onInView: () => void, onOutsideView: () => void, bottomOffset: number) => {
  globalThis.addEventListener(type, () => {
    if (node && node?.getBoundingClientRect().top - 100 < globalThis.innerHeight  && (node?.getBoundingClientRect().bottom + bottomOffset) < globalThis.innerHeight) {
      onInView();
    } else {
      onOutsideView();
    }
  });
}
export const isInViewportListener = (node: HTMLElement | null, onInView: () => void, onOutsideView: () => void, bottomOffset: number) => {
  isInViewportListenerBase("touchmove")(node, onInView, onOutsideView, bottomOffset);
  isInViewportListenerBase("scroll")(node, onInView, onOutsideView, bottomOffset);
}
