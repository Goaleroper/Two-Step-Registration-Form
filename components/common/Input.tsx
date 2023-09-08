import cn from "classnames";
import { FC, InputHTMLAttributes, memo, ChangeEventHandler } from "react";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  autoFocus?: boolean;
  touched?: boolean;
  onChange?: ChangeEventHandler;
  value?: string;
  error?: boolean;
  errorMessage?: string;
}

const Input: FC<IInput> = ({
  className,
  autoFocus,
  touched,
  label,
  onChange,
  value,
  error,
  errorMessage,
  ...props
}) => {
  return (
    <label className="w-2/3">
      <span className="flex items-center text-xs lg:text-sm text-darkBlue pb-2 font-normal">
        {label}
      </span>
      <input
        className={cn([
          "w-full border border-lightBlue text-darkGray h-12 rounded-lg px-4 outline-0 focus:!border-2",
          className,
        ])}
        onChange={onChange}
        value={value}
        {...props}
      />
      {error ? (
        <p className="text-xs text-red-600 pr-1">{errorMessage}</p>
      ) : (
        <></>
      )}
    </label>
  );
};

Input.displayName = "CustomInput";

export default memo(Input);