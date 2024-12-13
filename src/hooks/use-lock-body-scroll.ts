import { useEffect } from 'react';

export function useLockBodyScroll() {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'visible';
    };
  }, []);
}
