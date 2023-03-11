import { InputProps } from "@/types";

export const PrimaryInput = ({ className, ...props }: InputProps) => {
  return (
    <div
      className={` flex  items-center border px-2 space-x-2 border-border 
    ${props.divClass}
    `}
    >
      {props?.leftIcon && <props.leftIcon />}
      <input
        className={` border-[0] w-full
       outline-none focus:border-primary
        ${className ?? className}`}
        {...props}
      />
      {props?.rightIcon && <props.rightIcon />}
    </div>
  );
};
