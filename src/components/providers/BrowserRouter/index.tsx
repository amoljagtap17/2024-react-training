import { createContext, ReactElement, useEffect, useState } from "react";

const BrowserContext = createContext(null);

interface IBrowserRouterProps {
  children: ReactElement[];
}

export function BrowserRouter({ children }: IBrowserRouterProps) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // below is used to cause re-render
    const handlePopstateEvent = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopstateEvent);

    return () => {
      window.removeEventListener("popstate", handlePopstateEvent);
    };
  }, []);

  console.log("currentPath::", currentPath);

  return (
    <BrowserContext.Provider value={null}>{children}</BrowserContext.Provider>
  );
}
