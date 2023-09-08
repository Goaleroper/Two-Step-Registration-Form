import React, {
  FC,
  InputHTMLAttributes,
  memo,
  forwardRef,
  LegacyRef,
} from "react";
import { FcUpload } from "react-icons/fc";
import Image from "next/image";

interface IImageInput extends InputHTMLAttributes<HTMLInputElement> {
  ref?: any;
  label: string;
  onChange?: any;
  name: string;
  showImage: boolean;
  error?: boolean;
  errorMessage?: string;
  src?: string;
  fileTitle?: string;
}

const ImageInput: FC<IImageInput> = forwardRef(
  (
    {
      name,
      label,
      onChange,
      error,
      errorMessage,
      showImage,
      src,
      fileTitle,
      ...props
    },
    ref
  ) => {
    return (
      <>
        <label className="w-2/3 flex flex-col cursor-pointer">
          <span className="flex items-center text-xs lg:text-sm text-darkBlue font-normal">
            {label}
          </span>
          <input
            className="hidden"
            type="file"
            onChange={onChange}
            ref={ref as LegacyRef<HTMLInputElement>}
            accept="image/*"
            {...props}
          />
          <>
            {showImage ? (
              <div className="flex flex-col">
                <div className="rounded-full flex justify-center items-center self-center mt-2 border-4 border-gray-400 w-36 h-36 overflow-hidden">
                  <Image
                    width={120}
                    height={120}
                    src={src ?? ""}
                    className="object-cover w-full h-full"
                    alt="..."
                  />
                </div>
              </div>
            ) : (
              <FcUpload className={` w-8 h-8 mr-2 mt-3 self-center `} />
            )}
          </>
          <p className="text-xs text-darkBlue pt-1 text-center">
                  {fileTitle}
            </p>
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
