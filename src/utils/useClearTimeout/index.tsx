import { useEffect } from "react";

export default function useClearTimeout(timer?: NodeJS.Timeout) {
  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, [timer]);
}
