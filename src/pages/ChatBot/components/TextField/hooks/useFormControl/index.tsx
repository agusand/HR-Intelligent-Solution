import { useState, useCallback } from "react";

import { OnChangeEventListener, OnSubmitEventListener } from "../../types";

export default function useFormControl(onSubmit: OnSubmitEventListener) {
  const [inputText, setInputText] = useState("");

  const onInputChange = useCallback<OnChangeEventListener>((event) => {
    setInputText(event.target.value);
  }, []);

  const onFormSubmit = useCallback<OnSubmitEventListener>(
    (event) => {
      onSubmit(event);

      setInputText("");
    },
    [onSubmit],
  );

  return { inputText, onInputChange, onFormSubmit };
}
