import React from "react";
import classes from "./FormTemplateWrapper.module.scss";

function FormTemplateWrapper({ title, description, children, onSubmit }) {
  return (
    <section className={classes.formContainer}>
      <div className={classes.description}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <form onSubmit={onSubmit} className={classes.form} noValidate>
        {children}
      </form>
    </section>
  );
}

export default FormTemplateWrapper;
