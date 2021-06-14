[@bs.module "./button"] [@react.component]
external make:
  (
    ~id: string=?,
    ~onClick: ReactEvent.Synthetic.t => unit,
    ~children: React.element
  ) =>
  React.element =
  "Button";
