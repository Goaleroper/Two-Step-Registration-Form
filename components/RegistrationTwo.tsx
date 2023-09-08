import React, { useState } from "react";
import { useFormik } from "formik";
import Button from "./common/Button";
import Input from "./common/Input";
import Image from "next/image";
import { useFormCtx } from "@/context/FormContext";
import { useMutation } from "react-query";
import { createUser } from "@/Services/useCreateUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import logo from "../assets/images/logo.jpg";

const RegistrationTwo = () => {
  const formCTx = useFormCtx();
  const [buttonStatus, setButtonStatus] = useState<boolean>(false);
  const notify = (text: string) => toast(text);
  const { mutate: createUserMutation } = useMutation(createUser, {
    onError: () => {
      let text = "خطایی رخ داد، دوباره تلاش کنید";
      notify(text);
    },
    onSuccess: () => {
      let text = "ثبت نام شما با موفقیت انجام شد";
      notify(text);
      setButtonStatus(true);
    },
  });

  const formik = useFormik({
    initialValues: {
      user_name: "",
      password: "",
      first_name: formCTx?.nextPageData?.first_name ?? "",
      last_name: formCTx?.nextPageData?.last_name ?? "",
      image: formCTx?.nextPageData?.image ?? null,
    },
    validationSchema: Yup.object({
      user_name: Yup.string()
        .min(2, "حداقل دو کاراکتر مورد نیاز است")
        .required("لطفا فیلد را پر کنید"),
      password: Yup.string()
        .min(8, "پسورد باید حداقل 8 کاراکتر باشد")
        .required("لطفا فیلد را پر کنید"),
    }),
    onSubmit: (values) => {
      createUserMutation(values);
      formik.setSubmitting(false);
    },
  });
  return (
    <main className=" w-full relative h-full flex flex-col bg-white gap-12 items-center justify-center">
      <ToastContainer />
      <Image
        loading="lazy"
        width={100}
        height={100}
        src={logo}
        alt="logo"
        className="object-center absolute top-32"
      />
      <form
        onSubmit={formik.handleSubmit}
        className="w-full flex flex-col gap-8 items-center"
      >
        <Input
          name="user_name"
          autoFocus={true}
          onChange={formik.handleChange}
          type="text"
          value={formik.values.user_name}
          label="نام کاربری را وارد کنید"
          error={!!formik.errors.user_name && !!formik.touched.user_name}
          errorMessage={formik.errors.user_name}
        />
        <Input
          name="password"
          autoFocus={false}
          onChange={formik.handleChange}
          type="password"
          value={formik.values.password}
          label="رمز عبور را وارد کنید"
          error={!!formik.errors.password && !!formik.touched.password}
          errorMessage={formik.errors.password}
        />
        <Button type="submit" title="ثبت نهایی" disabled={buttonStatus} />
      </form>
    </main>
  );
};
export default RegistrationTwo;
