declare module '*.css';
// declare module '*.less';
declare module '*.less' {
  const resource: { [key: string]: string };
  export default resource;
}
