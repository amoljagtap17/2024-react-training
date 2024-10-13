import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";

const BrowserContextCurrentPath = createContext<string | undefined>(undefined);
const BrowserContextNavigate = createContext<
  ((href: string) => void) | undefined
>(undefined);

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

  const navigate = (href: string) => {
    window.history.pushState({}, "", href);
    setCurrentPath(href);
  };

  return (
    <BrowserContextCurrentPath.Provider value={currentPath}>
      <BrowserContextNavigate.Provider value={navigate}>
        {children}
      </BrowserContextNavigate.Provider>
    </BrowserContextCurrentPath.Provider>
  );
}

export function useNavigate() {
  const context = useContext(BrowserContextNavigate);

  if (context === undefined) {
    throw new Error("useNavigate must be used within a BrowserContextNavigate");
  }

  return context;
}

export function useLocation() {
  const context = useContext(BrowserContextCurrentPath);

  if (context === undefined) {
    throw new Error(
      "useLocation must be used within a BrowserContextCurrentPath"
    );
  }

  return context;
}
