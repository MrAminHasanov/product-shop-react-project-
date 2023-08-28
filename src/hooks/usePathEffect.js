import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const usePathEffect = (funct) => {
  const path = useLocation().pathname;
  useEffect(() => funct(), [path]);
};
