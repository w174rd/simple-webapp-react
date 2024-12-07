import * as Yup from "yup";

export const validationSchemaCreate = Yup.object({
    name: Yup.string()
      .required("Name is required"),
    email: Yup.string()
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  export const validationSchemaUpdate = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
});