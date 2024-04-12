import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const usePathEffect = (funct, funcValue) => {
  const path = useLocation().pathname;

  useEffect(() => {
    return funct(funcValue);
  }, [path, funct, funcValue]);
};
