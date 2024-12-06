
import * as Yup from "yup";

export const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });