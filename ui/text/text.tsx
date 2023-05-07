type TextElements =
  | "blockquote"
  | "div"
  | "dt"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "legend"
  | "p"
  | "q"
  | "small"
  | "span"
  | "strong"
  | "label";

const Text = <T extends TextElements>(
  props: { as?: T } & JSX.IntrinsicElements[T]
) => {
  const Comp = (props.as as string) ?? "p";
  return <Comp {...(props as any)} />;
};

export { Text };
