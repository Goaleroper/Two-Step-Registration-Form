import { FC, ReactElement } from "react";
import Image from "next/image";
import trainPic from "../assets/images/trainPic.jpg";
type ScreenLayoutT = {
  children: ReactElement[] | ReactElement;
};
const ScreenLayout: FC<ScreenLayoutT> = ({ children }) => {
  return (
    <div className="w-full h-screen flex ">
      <div className="relative h-full w-full">
        <Image
          loading="lazy"
          src={trainPic}
          alt="banner"
          className="h-full w-full object-center"
        />
      </div>
      <div className="w-1/2 bg-gray-100">{children}</div>
    </div>
  );
};

export default ScreenLayout;