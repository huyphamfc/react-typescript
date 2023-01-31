class FadeInAnimation {
  node?: HTMLElement;
  duration?: number;
  startTime?: number;
  frameId?: number;

  constructor(node: HTMLElement) {
    this.node = node;
  }

  start(duration: number) {
    this.duration = duration;

    if (this.duration === 0) {
      this.onProgress('1'); // jump to end immediately
    } else {
      this.onProgress('0');
      this.startTime = performance.now(); // start animating
      this.frameId = requestAnimationFrame(() => this.onFrame());
    }
  }

  onFrame() {
    if (!this.startTime || !this.duration) return;

    const timePassed = performance.now() - this.startTime;
    const progress = Math.min(timePassed / this.duration, 1);

    if (progress < 1) {
      this.frameId = requestAnimationFrame(() => this.onFrame()); // we still have more frames to paint
    }

    this.onProgress(progress.toString());
  }

  onProgress(progress: string) {
    if (this.node) this.node.style.opacity = progress;
  }

  stop() {
    if (!this.frameId) return;

    cancelAnimationFrame(this.frameId);
    this.startTime = undefined;
    this.frameId = undefined;
    this.duration = 0;
  }
}

export default FadeInAnimation;
