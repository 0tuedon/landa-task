import { InputProps } from "@/types";

export const PrimaryInput = ({ className, ...props }: InputProps) => {
  return (
    <div className="flex w-full">
      {props?.leftIcon && <props.leftIcon />}
      <input
        className={` border border-border w-full
       outline-none focus:border-primary
        ${className ?? className}`}
        {...props}
      />
      {props?.rightIcon && <props.rightIcon />}
    </div>
  );
};
