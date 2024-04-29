import React from "react";

export function withLayout<P extends object>(
  LayoutElement: (props?: P) => JSX.Element,
  layoutProps?: P
) {
  return (Component) =>
    React.memo(function Layout(props) {
      return (
        <LayoutElement {...(layoutProps as any)}>
          <Component {...props} />
        </LayoutElement>
      );
    });
}
