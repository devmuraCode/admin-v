import { storage } from "@/services";
import { Dispatch, SetStateAction, useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      return storage.local.get(key) || initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue: Dispatch<SetStateAction<T>> = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);
      storage.local.set(key, valueToStore);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue] as const;
}

export default useLocalStorage;
