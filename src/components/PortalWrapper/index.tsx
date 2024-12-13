import { createPortal } from 'react-dom';

import { PortalWrapperProps } from './types';

export function PortalWrapper({ children }: PortalWrapperProps) {
  return createPortal(<>{children}</>, document.body);
}
