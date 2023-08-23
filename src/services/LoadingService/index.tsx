import { createContext, useContext, useCallback } from "react";

import LoadingServiceValue from "./LoadingServiceValue";
import LoadingManager from "./LoadingManager";
import { Screen } from "./types";

import GenericProps from "types/GenericProps";
import useScreensMapChange from "./hooks/useScreensMapChange";

const loadingManagerInstance = new LoadingManager();
const LoadingService = createContext<LoadingServiceValue | null>(null);

export const useLoadingService = () => {
  return useContext(LoadingService) as LoadingServiceValue;
};

export function LoadingServiceProvider({ children }: GenericProps) {
  const { screensMap } = useScreensMapChange(loadingManagerInstance);

  const addLoadingScreen = useCallback((screen: Screen) => {
    return loadingManagerInstance.addLoadingScreen(screen);
  }, []);

  const removeLoadingScreen = useCallback((id: number) => {
    return loadingManagerInstance.removeLoadingScreen(id);
  }, []);

  return (
    <LoadingService.Provider value={{ screensMap, addLoadingScreen, removeLoadingScreen }}>
      {children}
    </LoadingService.Provider>
  );
}
