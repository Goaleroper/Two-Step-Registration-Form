import React, {
  FC,
  InputHTMLAttributes,
  memo,
  forwardRef,
  LegacyRef,
} from "react";
import { FcUpload } from "react-icons/fc";

interface IImageInput extends InputHTMLAttributes<HTMLInputElement> {
  ref?: any;
  label: string;
  onChange?: any;
  name: string;
  showIcon: boolean;
  error?: boolean;
  errorMessage?: string;
}

const ImageInput: FC<IImageInput> = forwardRef(
  ({ name, label, showIcon, onChange, error, errorMessage, ...props }, ref) => {
    return (
      <>
        <label className="w-2/3 flex flex-col cursor-pointer">
          <span className="flex items-center text-xs lg:text-sm text-darkBlue font-normal">
            {label}
          </span>
          <input
            className="hidden"
            name={name}
            type="file"
            onChange={onChange}
            ref={ref as LegacyRef<HTMLInputElement>}
            accept="image/*"
            {...props}
          />
          <FcUpload
            className={` w-8 h-8 mr-2 mt-3 self-center ${
              showIcon ? "inline-block" : "hidden"
            }`}
          />
          {error ? (
            <p className="text-xs text-red-600 pr-1 text-center pt-2">
              {errorMessage}
            </p>
          ) : (
            <></>
          )}
        </label>
      </>
    );
  }
);

ImageInput.displayName = "CustomImageInput";

export default memo(ImageInput);
