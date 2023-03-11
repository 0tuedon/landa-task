import { ButtonProps } from "@/types";

export const PrimaryButton = ({
  className,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={` bg-active_blue  hover:bg-active_blue/80
        items-center justify-center text-white text-sm  font-semibold
        min-w-[100px] flex
        ${className}
      `}
      {...rest}
    >
      {children}
    </button>
  );
};
