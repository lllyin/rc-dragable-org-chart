declare module '*.css';
// declare module '*.less';
declare module '*.less' {
  const resource: { [key: string]: string };
  export default resource;
}
declare module '*.svg' {
  import { ReactElement, SVGProps } from 'react';
  const content: (props: SVGProps<SVGElement>) => ReactElement;
  const ReactComponent: (props: SVGProps<SVGElement>) => ReactElement;
  export { ReactComponent };
  export default content;
}
