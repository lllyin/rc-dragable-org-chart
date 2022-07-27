export function throttle(fn: Function, delay: number): Function {
  let timer: any;
  // @ts-ignore
  let context = this;

  return function () {
    const args = Array.prototype.slice.call(arguments);

    if (timer) {
      return;
    }

    timer = setTimeout(() => {
      fn.apply(context, args);
      clearTimeout(timer);
      timer = null;
    }, delay);
  };
}

export function injectStyle(animations: string[] = []) {
  const styleEl = document.createElement('style');
  const r = Math.random().toString(36).substring(2);
  const result = genKeyframes(animations, `node-animation__${r}`);

  if (!result) return null;

  const { name: animationName, style } = result;

  styleEl.id = `node-inject-style_${r}`;
  styleEl.innerHTML = style;
  document.head.appendChild(styleEl);

  return {
    el: styleEl,
    styleId: styleEl.id,
    animationName,
  };
}

export function genKeyframes(animations: string[] = [], name?: string) {
  if (animations.length === 0) return null;
  if (animations.length === 1) {
    animations.push(animations[0]);
  }
  const step = 100 / (animations.length - 1);
  const r = Math.random().toString(36).substring(2);
  const frames = animations
    .map((animation, index) => {
      return `${index * step}% {
      transform: ${animation}
    }`;
    })
    .join('\n');
  const keyName = name || `node-animation_${r} `;
  const style = `
    @keyframes ${keyName} {
      ${frames}
    }
  `;

  return {
    name: keyName,
    style,
  };
}
