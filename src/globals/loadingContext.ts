import { useContext, createContext } from "react";

const initial = (state:boolean) => 0

export const AppContext = createContext(initial);

export function useAppContext() {
  return useContext(AppContext);
}