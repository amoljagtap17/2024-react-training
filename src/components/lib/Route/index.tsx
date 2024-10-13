import { ReactElement } from "react";
import { useLocation } from "../../providers";

interface IRouteProps {
  path: string;
  element: ReactElement;
}

export function Route({ path, element }: IRouteProps) {
  const location = useLocation();

  if (path === location) {
    return element;
  }

  return null;
}
