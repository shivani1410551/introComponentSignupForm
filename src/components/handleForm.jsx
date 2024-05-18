import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FieldData from "./Data";
import Hero from "./Hero";
const HandleForm = () => {
  const FormSchema = Yup.object({
    firstName: Yup.string()
      .min(3)
      .max(20)
      .required("First Name cannot be empty"),
    lastName: Yup.string().min(3).max(20).required("Last Name cannot be empty"),
    email: Yup.string()
      .email()
      .required("Looks like this is not a valid email "),
    password: Yup.string()
      .required("Password cannot be empty")
      .matches(
        /^[@#](?=.{7,13}$)(?=\w{7,13})(?=[^aeiou_]{7,13})(?=.*[A-Z])(?=.*\d)/
      ),
  });
  const field = FieldData.map((item) => {
    let random = Math.random(); //
    return <Hero key={random} item={item} />;
  });
  return (
    <div className="formWrapper">
      <p className="tag">
        <strong>Try it free 7 days</strong> then $20/mo. thereafter
      </p>
      <Formik
        validationSchema={FormSchema}
        initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
        onSubmit={(values, action) => {
          console.log(values);
          action.resetForm();
        }}
      >
        <Form>
          {field}
          <button type="submit">Claim your free trial</button>
          <p className="footerText">
            By clicking the button, you are agreeing to our
            <span> Terms and Services</span>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default HandleForm;
