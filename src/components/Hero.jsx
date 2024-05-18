import { Field } from "formik";
import React from "react";
import RedErrorMsg from "./RedErrorMsg";
const Hero = (props) => {
  return (
    <div>
      <label htmlFor={props.item.htmlFor}>
        <Field
          type={props.item.type}
          id={props.item.id}
          name={props.item.name}
          className="field"
          placeholder={props.item.placeholder}
        />
      </label>
      <RedErrorMsg name={props.item.name} />
    </div>
  );
};

export default Hero;
