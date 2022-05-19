interface Props {
  children: React.ReactNode;
  layout: "sm" | "md" | "lg" | "full";
}

function Container({ children, layout }: Props) {
  let maxWidth = "";
  if (layout === "sm") {
    maxWidth = "max-w-4xl";
  } else if (layout === "md") {
    maxWidth = "max-w-6xl";
  } else if (layout === "lg") {
    maxWidth = "max-w-8xl";
  } else if (layout === "full") {
    maxWidth = "max-w-full !p-0";
  }
  return (
    <div className={`${maxWidth} mx-auto relative px-3 sm:px-6 lg:px-8`}>
      {children}
    </div>
  );
}

export default Container;
