import { FC, SVGProps } from 'react';

declare module '*.jpg';
declare module '*.png';
declare module '*.webp';

declare module '*.webm' {
  const path: string;
  export default path;
}

declare module '*.svg' {
  const ReactComponent: FC<SVGProps<SVGSVGElement>>;
  const content: string;

  export { ReactComponent };
  export default content;
}

declare namespace Cypress {
  interface Chainable {
    login(name: string): void;
  }
}
