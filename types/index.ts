import { NextPage } from "next";
import { DisclosureProps } from "@/hooks/";

type GetLayoutFunc = (page: React.ReactElement) => React.ReactElement;
export type NextPageWithLayout = NextPage & {
  getLayout?: GetLayoutFunc;
  requireLayout?: boolean;
};

export type MainLayoutProps = {
  children: React.ReactNode; //children
  title?: string;
};
type optionsType = {
  value: string;
  label: string;
  disabled?: boolean;
};

//primary buttons

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: any;
}
export interface SelectProps
  extends React.ButtonHTMLAttributes<HTMLSelectElement> {
  options: optionsType[];
  label?: string;
  initialPlaceholder?: string;
}

export interface IModal extends DisclosureProps {
  className?: string;
  setPopulated: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  leftIcon?: any;
  rightIcon?: any;
  textArea?: boolean;
}
