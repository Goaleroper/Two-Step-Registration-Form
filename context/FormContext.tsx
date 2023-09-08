import { FormDataT, Maybe, nextPageDataT } from "@/types/data";
import { createContext, useState, ReactNode, useContext } from "react";

type formContextT = {
  formSubmition: (formData: FormDataT) => void;
  nextPageData: nextPageDataT;
  imageUrl: Maybe<string>;
};
type FormProviderT = {
  children: ReactNode;
};
const FormContext = createContext<formContextT | null>(null);

export default function FormProvider({ children }: FormProviderT) {
  const [nextPageData, setnextPageData] = useState<nextPageDataT>({});
  const [imageUrl, setImageUrl] = useState<string>("");
  const formSubmition = (formData: FormDataT) => {
    if (formData) {
      setnextPageData(formData);
    }
  };

  return (
    <FormContext.Provider value={{ nextPageData, imageUrl, formSubmition }}>
      {children}
    </FormContext.Provider>
  );
}
export function useFormCtx() {
  return useContext(FormContext);
}
