import { createContext, useContext, useState, useCallback } from "react";

import AlertServiceValue from "./AlertServiceValue";
import { SetSpecificMessageMethod, SetTemporalMessageMethod } from "./types";

import { ColorCode } from "components/Alert/types";

import GenericProps from "types/GenericProps";

import useClearTimeout from "utils/useClearTimeout";

const AlertService = createContext<AlertServiceValue | null>(null);

export const useAlertService = () => {
  return useContext(AlertService) as AlertServiceValue;
};

export function AlertServiceProvider({ children }: GenericProps) {
  const [message, setMessage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [colorCode, setColorCode] = useState<ColorCode | null>(null);
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  const setTemporalMessage = useCallback<SetTemporalMessageMethod>(
    ({ message, timeout = 3000, messageType }) => {
      setIsVisible(true);
      setMessage(message);
      setColorCode(messageType);

      const timeoutTimer = setTimeout(() => {
        setIsVisible(false);
        setMessage(null);
        setColorCode(null);
      }, timeout);

      setTimer(timeoutTimer);
    },
    [],
  );

  const setErrorMessage = useCallback<SetSpecificMessageMethod>(
    ({ message, timeout }) => {
      setTemporalMessage({ message, timeout, messageType: "error" });
    },
    [setTemporalMessage],
  );

  const setInfoMessage = useCallback<SetSpecificMessageMethod>(
    ({ message, timeout }) => {
      setTemporalMessage({ message, timeout, messageType: "info" });
    },
    [setTemporalMessage],
  );

  const setSuccessMessage = useCallback<SetSpecificMessageMethod>(
    ({ message, timeout }) => {
      setTemporalMessage({ message, timeout, messageType: "success" });
    },
    [setTemporalMessage],
  );

  const setWarningMessage = useCallback<SetSpecificMessageMethod>(
    ({ message, timeout }) => {
      setTemporalMessage({ message, timeout, messageType: "warning" });
    },
    [setTemporalMessage],
  );

  useClearTimeout(timer);

  return (
    <AlertService.Provider
      value={{
        isVisible,
        colorCode,
        message,
        setErrorMessage,
        setInfoMessage,
        setSuccessMessage,
        setWarningMessage,
      }}
    >
      {children}
    </AlertService.Provider>
  );
}
