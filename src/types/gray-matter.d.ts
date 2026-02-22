declare module 'gray-matter' {
  import { GrayMatterFile, GrayMatterOption, Input } from 'gray-matter/gray-matter';

  function matter<I extends Input, O extends GrayMatterOption<I, O>>(
    input: I | { content: I },
    options?: O
  ): GrayMatterFile<I>;

  namespace matter {
    export function stringify<O extends GrayMatterOption<string, O>>(
      file: string | { content: string },
      data: object,
      options?: GrayMatterOption<string, O>
    ): string;

    export function read<O extends GrayMatterOption<string, O>>(
      fp: string,
      options?: GrayMatterOption<string, O>
    ): GrayMatterFile<string>;

    export function test<O extends GrayMatterOption<string, O>>(
      str: string,
      options?: GrayMatterOption<string, O>
    ): boolean;

    export function language<O extends GrayMatterOption<string, O>>(
      str: string,
      options?: GrayMatterOption<string, O>
    ): { name: string; raw: string };
  }

  export = matter;
}
