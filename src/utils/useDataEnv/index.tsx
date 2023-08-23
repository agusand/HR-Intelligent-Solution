import { useCallback, useEffect } from "react";

import { ENV_MAPPING } from "./constants";

function useDataEnv() {
  const setDataEnvToBody = useCallback(() => {
    const body = document.body;
    body.setAttribute("data-env", ENV_MAPPING[String(process.env.REACT_APP_ENV)] || "prod");
  }, []);

  useEffect(() => {
    setDataEnvToBody();
  }, [setDataEnvToBody]);
}

export default useDataEnv;
