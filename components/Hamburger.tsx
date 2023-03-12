import * as React from "react";
import { SVGProps } from "react";
const HamburgerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={56}
    height={50}
    viewBox="0 0 56 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <path fill="#fff" d="M0 0h56v50H0z" />
      <path
        d="M28 20.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        fill="#000"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={0}
        y={0}
        width={56}
        height={50}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={-1} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 0.882353 0 0 0 0 0.890196 0 0 0 0 0.898039 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_1_218" />
      </filter>
    </defs>
  </svg>
);
export default HamburgerIcon;
