export default function classnames(styles: any) {
  return function (className: string, commonClassName: string = '') {
    const classList = className.split(/\s+/);

    return classList.map((name) => styles[name]).join(' ') + ' ' + commonClassName;
  };
}
