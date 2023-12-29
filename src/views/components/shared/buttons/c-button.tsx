import  { FC } from "react";
import "./styles.css";
import classNames from "classnames";

interface CButtonProps {
  label: string;
  onClick:any;
  type:
    | "default"
    | "primary"
    | "default"
    | "secondary"
    | "dark"
    | "addMore"
    | "addRound"
    | "remove"
    | "cancel"
    | "save"
    | "editRound"
    | "change"
    | "edit";
  disabled?: boolean;
}

export const CButton: FC<CButtonProps> = ({
  label,
  onClick,
  type,
  disabled,
}) => {
  const buttonClass = classNames({
    "inline-flex items-center px-4 tracking-wide py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 mx-1.5 focus:outline-none ":
      true,
    "text-gray-700 hover:bg-gray-50 border-gray-300 text-black":
      type === "default",
    "bg-indigo-600 hover:bg-indigo-700 text-white": type === "primary",
    "bg-red-600 hover:bg-red-700 text-white": type === "secondary",
    "bg-neutral-700 hover:bg-neutral-800 text-white": type === "dark",
    addMore: type === "addMore",
    addRound: type === "addRound",
    remove: type === "remove",
    cancel: type === "cancel",
    save: type === "save",
    edit: type === "edit",
    editRound: type === "editRound",
    change: type === "change",
    disabled: disabled === true,
  });

  return (
    <button
      type="button"
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
