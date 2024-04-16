import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

export interface PortalProps {
  children: ReactNode;
  element?: HTMLElement;
}

export const Portal: FC<PortalProps> = ({
  children,
  element = document.body,
}) => createPortal(children, element);
