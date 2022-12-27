// TODO: import types of unified.
import type { Node, TransformCallback } from "unified";
import type { VFile } from "vfile";

// remark transformer.
export default function remarkFrontmatter<
  Input extends Node = Node,
  // Output extends Node = Input
>(
  node: Input,
  file: VFile,
  next: TransformCallback
): Promise<any, any>;

interface Frontmatter {
  [key: string]: number | string;
}
