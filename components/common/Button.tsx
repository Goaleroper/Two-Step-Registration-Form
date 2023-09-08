import { ButtonHTMLAttributes, FC, memo } from "react";
import cn from "classnames";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  ref?: any;
  title: string;
}

const Button: FC<IButton> = ({ className, disabled, title, ...props }) => {
  return (
    <button
      className={cn(
        `w-1/4 flex items-center justify-center h-[3.25rem] rounded-xl p-4 text-white text-lg font-bold ${disabled ? "!bg-gray-300" : "bg-grayGreen"}`,
        className
           )}
           disabled={disabled}
      {...props}
    >
      {title}
    </button>
  );
};

export default memo(Button);
