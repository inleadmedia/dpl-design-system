type ContentIcon = {
  kind: "ICON";
  url: string;
  alt: string;
};

type ContentLabel = {
  kind: "LABEL";
  label: string;
};

type ContentChildren = {
  kind: "CHILDREN";
};

export type ButtonUIProps = {
  content: ContentIcon | ContentLabel | ContentChildren;
  children?: React.ReactNode;
  classes?: string;
  onClick?: () => void;
};

export const ButtonUI = (props: ButtonUIProps) => {
  const { content, classes, children } = props;

  const getChild = () => {
    if (content.kind === "LABEL") return content.label;

    if (content.kind === "ICON")
      return <img src={content.url} alt={content.alt} />;

    if (content.kind === "CHILDREN") return children;

    return null;
  };

  return (
    <button
      type="button"
      className={`button-ui ${classes || ""}`}
      onClick={props.onClick}
    >
      {getChild()}
    </button>
  );
};
