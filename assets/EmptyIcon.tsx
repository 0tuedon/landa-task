import * as React from "react";
import { SVGProps } from "react";
const EmptyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={66}
    height={66}
    viewBox="0 0 66 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={66} height={66} rx={33} fill="#EEF3FC" />
    <path
      d="m19.25 28.875 13.139-5.25 13.139 5.25-13.14 5.25-13.138-5.25Z"
      stroke="#004CCC"
      strokeWidth={2.4}
      strokeLinejoin="round"
    />
    <path
      d="M45.527 28.943v5.765M25.222 31.64v7.776s3.007 2.959 7.167 2.959 7.166-2.959 7.166-2.959V31.64"
      stroke="#004CCC"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default EmptyIcon;
