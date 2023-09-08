import { FormDataT } from "@/types/data";
import axios from "axios";
export const createUser = async (formData: FormDataT) => {
  const response = await axios.post("http://localhost:3001/users", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log("ressss", response.data);
  return response.data;
};
