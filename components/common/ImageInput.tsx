import { FC, InputHTMLAttributes, memo, forwardRef, LegacyRef } from "react";
import { FcUpload } from "react-icons/fc";

interface IImageInput extends InputHTMLAttributes<HTMLInputElement> {
  ref?: any;
  label: string;
  onChange?: any;
  name: string;
  showIcon: boolean;
}

const ImageInput: FC<IImageInput> = forwardRef(
  ({ name, label, showIcon, onChange, ...props }, ref) => {
    return (
      <>
        <label className="w-2/3 flex flex-col">
          <span className="flex items-center text-xs lg:text-sm font-semiBold text-[#1e2352] pb-2">
            {label}
          </span>
          <input
            className="hidden"
            name={name}
            type="file"
            onChange={onChange}
            ref={ref as LegacyRef<HTMLInputElement>}
            accept="image/*"
          />
          <FcUpload
            className={` w-8 h-8 cursor-pointer mr-2 self-center ${
              showIcon ? "inline-block" : "hidden"
            }`}
          />
        </label>
      </>
    );
  }
);

ImageInput.displayName = "CustomImageInput";

export default memo(ImageInput);
