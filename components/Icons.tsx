
import React, { SVGProps } from 'react';

const createIcon = <T,>(Component: React.FC<SVGProps<SVGSVGElement>>) => (props: SVGProps<SVGSVGElement>) => (
  <Component
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  />
);

export const Leaf = createIcon((props) => (
  <svg {...props}>
    <path d="M11 20A7 7 0 0 1 4 13V6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1h1a1 1 0 0 1 1 1v1h1a1 1 0 0 1 1 1v7h-4a1 1 0 0 1-1-1v-1H9v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a7 7 0 0 1 14 0v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1h-1a1 1 0 0 1-1-1v-1h-1a1 1 0 0 1-1-1v-1h-1a1 1 0 0 1-1-1z" />
  </svg>
));

export const ScrollText = createIcon((props) => (
  <svg {...props}>
    <path d="M8 21h12a2 2 0 0 0 2-2v-2h-3" />
    <path d="M8 3h12a2 2 0 0 1 2 2v2h-3" />
    <path d="M21 12H3" />
    <path d="M3 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M3 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </svg>
));

export const Heart = createIcon((props) => (
  <svg {...props}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
));

export const Shield = createIcon((props) => (
  <svg {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
));

export const Droplet = createIcon((props) => (
  <svg {...props}>
    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
  </svg>
));

export const Sun = createIcon((props) => (
  <svg {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
));

export const Moon = createIcon((props) => (
  <svg {...props}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
));

export const Zap = createIcon((props) => (
  <svg {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
));

export const Loader2 = createIcon((props) => (
  <svg {...props}>
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
));

export const Package = createIcon((props) => (
  <svg {...props}>
    <path d="M16.5 9.4a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
    <path d="M12 14.6a7.5 7.5 0 0 1 0-10.2" />
    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    <path d="M12 21a9 9 0 0 0 9-9" />
    <path d="M12 3a9 9 0 0 0-9 9" />
  </svg>
));

export const Camera = createIcon((props) => (
  <svg {...props}>
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
));
