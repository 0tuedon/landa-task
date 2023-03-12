import * as React from "react";
import { SVGProps } from "react";
const CarretDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={10}
    viewBox="0 0 16 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16 1.88 14.12 0 8 6.107 1.88 0 0 1.88l8 8 8-8Z" fill="#222" />
  </svg>
);
export default CarretDown;
