import { Screen, ScreensMap } from "./types";

export default interface LoadingServiceValue {
  screensMap: ScreensMap;
  addLoadingScreen: (screen: Screen) => number;
  removeLoadingScreen: (id: number) => void;
}
