import React from 'react';
import './FormPage.scss';
import Form from '../../molecules/Form/Form';

export default function FormPage(props) {
  return (
    <section className='form-wrapper'>
      <section className='header-wrapper'>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </section>
      <Form formInputs={props.formInputs} btnText={props.title} formSubmit={props.formSubmit} />
    </section>
  );
}
