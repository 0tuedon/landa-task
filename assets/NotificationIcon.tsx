import * as React from "react";
import { SVGProps } from "react";
const NotificationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 20.125v-2.25h2.25V10c0-1.556.469-2.94 1.406-4.149.938-1.209 2.157-2.001 3.657-2.376v-.788c0-.468.164-.866.492-1.194A1.625 1.625 0 0 1 12 1c.469 0 .867.164 1.195.493.328.327.492.726.492 1.194v.788c1.5.375 2.72 1.167 3.657 2.376.937 1.21 1.406 2.593 1.406 4.149v7.875H21v2.25H3Zm9 3.375c-.619 0-1.148-.22-1.588-.66a2.168 2.168 0 0 1-.662-1.59h4.5a2.17 2.17 0 0 1-.66 1.59 2.17 2.17 0 0 1-1.59.66Zm-4.5-5.625h9V10c0-1.238-.44-2.297-1.322-3.178C14.297 5.94 13.238 5.5 12 5.5s-2.297.44-3.178 1.322C7.94 7.703 7.5 8.762 7.5 10v7.875Z"
      fill="#222"
    />
  </svg>
);
export default NotificationIcon;
