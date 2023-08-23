export type Screen =
  | "groups"
  | "templates"
  | "history"
  | "constraints"
  | "subGeneral"
  | "general"
  | "storages"
  | "total";

export type LoadingInstance = {
  readonly id: number;
  readonly screen: Screen;
};

export type ScreensMap = {
  [key in Screen]: boolean;
};
