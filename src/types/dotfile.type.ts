export type DotfileNode = {
  name: string;
  path?: string;
  size?: number;
  children?: DotfileNode[];
};
