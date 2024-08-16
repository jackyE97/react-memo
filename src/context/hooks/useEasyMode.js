import { useContext } from "react";
import { EasyModeContext } from "../../context/context";

export function useEasyMode() {
  return useContext(EasyModeContext);
}