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
        `transition-all w-1/4  relative flex items-center justify-center h-[3.25rem] rounded-xl p-4 bg-[#577987] text-white text-lg font-bold `,
        className
      )}
      {...props}
    >
      {title}
    </button>
  );
};

export default memo(Button);
