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
