import { useEffect, useState } from "react";

import { ScreensMap } from "../../types";
import LoadingManager from "../../LoadingManager";

export default function useScreensMapChange(loadingManagerInstance: LoadingManager) {
  const [screensMap, setScreensMap] = useState<ScreensMap>(loadingManagerInstance.screensMap);

  useEffect(() => {
    loadingManagerInstance.onChange((generalScreensMap) => {
      setScreensMap({ ...generalScreensMap });
    });
  }, [loadingManagerInstance]);

  return { screensMap };
}
