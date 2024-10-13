import { MouseEvent, ReactNode } from "react";
import { useNavigate } from "../../providers";
import styles from "./Link.module.less";

interface ILinkProps {
  href: string;
  children: ReactNode;
}

export function Link({ href, children }: ILinkProps) {
  const navigate = useNavigate();

  const handleOnClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate(href);
  };

  return (
    <a onClick={handleOnClick} className={styles.Link__root}>
      {children}
    </a>
  );
}
