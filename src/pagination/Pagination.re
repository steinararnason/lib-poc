[@bs.module "./index"] [@react.component]
external make:
  (
    ~page: int,
    ~setPage: int => unit,
    ~nbPages: int,
  ) =>
  React.element =
  "Pagination";
