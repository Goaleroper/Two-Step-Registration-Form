import React, { useState, useEffect, ChangeEvent } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "./common/Input";
import ImageInput from "./common/ImageInput";
import Button from "./common/Button";
import Image from "next/image";
import { useRouter } from "next/router";
import { useFormCtx } from "@/context/FormContext";
import { Maybe } from "@/types/data";
import { FcUpload } from "react-icons/fc";

const RegistrationOne = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState<Maybe<File>>(null);
  const router = useRouter();
  const formCTx = useFormCtx();
  const FILE_SIZE = 160 * 1024;
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
  ];

  useEffect(() => {
    previewImage(formCTx?.nextPageData.image);
  }, [formCTx?.nextPageData]);

  const formik = useFormik({
    initialValues: {
      first_name: formCTx?.nextPageData.first_name,
      last_name: formCTx?.nextPageData.last_name,
      image: formCTx?.nextPageData.image,
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .min(2, "حداقل دو کاراکتر مورد نیاز است")
        .required("لطفا فیلد را پر کنید"),
      last_name: Yup.string()
        .min(2, "Mininum 2 characters")
        .required("Required!"),
      image: Yup.mixed<File>()
        .required("آپلود عکس الزامی است")
        .test(
          "fileSize",
          "سایز فایل زیاداست",
          (value) => value && value.size <= FILE_SIZE
        )
        .test(
          "fileFormat",
          "فرمت عکس قابل قبول نیست",
          (value) => value && SUPPORTED_FORMATS.includes(value.type)
        ),
    }),
    onSubmit: (values) => {
      formCTx?.formSubmition(values);
      router.push({ pathname: "/stepTwo" });
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    let image = e.target.files && e.target.files[0];
    previewImage(image);
    formik.setFieldValue("image", image);
  };

  const previewImage = (image: Maybe<File> | undefined) => {
    if (image) {
      let reader = new FileReader();
      reader.onloadend = () => {
        let newUrl = reader.result?.toString() ?? "";
        setImageUrl(newUrl);
        setImage(image);
      };
      reader.readAsDataURL(image);
      console.log("test", image);
    }
  };

  return (
    <main className=" w-full h-full flex flex-col bg-white gap-12 items-center justify-center">
      <p className="font-bold text-lg text-darkBlue text-center">
        خوش آمدید، <br />
        لطفا فرم زیر را تکمیل کنید!
      </p>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full flex flex-col gap-6 items-center"
      >
        <Input
          name="first_name"
          onChange={formik.handleChange}
          type="text"
          value={formik.values.first_name ?? ""}
          label="نام خود را وارد کنید"
          error={!!formik.errors.first_name && !!formik.touched.first_name}
          errorMessage={formik.errors.first_name}
        />
        <Input
          name="last_name"
          onChange={formik.handleChange}
          type="text"
          value={formik.values.last_name ?? ""}
          label="نام خوانوادگی خود را وارد کنید"
          error={!!formik.errors.last_name && !!formik.touched.last_name}
          errorMessage={formik.errors.last_name}
        />
        <ImageInput
          name="image"
          label="عکس پروفایل خود را بارگذاری کنید"
          onChange={handleChange}
          showIcon={!image}
          error={!!formik.errors.image && !!formik.touched.image}
          errorMessage={formik.errors.image}
        />
        {image && image.type.includes("image") ? (
          <div className="flex flex-col">
            <div className="rounded-full flex justify-center items-center border-4 border-gray-400 w-36 h-36 overflow-hidden">
              <Image
                width={120}
                height={120}
                src={imageUrl}
                className="object-cover w-full h-full"
                alt="..."
              />
            </div>
            <p className="text-xs text-darkBlue pt-1 text-center">
              {image?.name ?? ""}
            </p>
          </div>
        ) : (
          <></>
        )}
        {image && !image.type.includes("image") ? (
          <div className="flex flex-col">
            <FcUpload className={` w-8 h-8 mr-2 mt-3 self-center `} />
            <p className="text-xs text-darkBlue pt-1 text-center">
              {image?.name ?? ""}
            </p>
          </div>
        ) : (
          <></>
        )}
        <Button type="submit" title="ادامه" />
      </form>
    </main>
  );
};

export default RegistrationOne;
