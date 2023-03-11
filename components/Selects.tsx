import { SelectProps } from "@/types";

export const PrimarySelect = ({
  options,
  className,
  label,
  ...rest
}: SelectProps) => {
  return (
    <select
      className={` border   border-b-primary 
       focus:border-b focus:border-primary   
         ${className}`}
      {...rest}
    >
      <option value="">{label}</option>
      {options.map((data) => (
        <option disabled={data.disabled} key={data.value}>
          {data.label}
        </option>
      ))}
    </select>
  );
};
