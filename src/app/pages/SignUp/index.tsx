/**
 *
 *
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import { Grid } from '@mui/material';
import { Formik, FormikHelpers, FormikProps, Form, Field } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components/macro';

import { CustomContainer } from 'app/components/Container';
import { Button } from 'app/components/Button';

import { TextField } from 'app/components/TextField';
interface Props {}

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// the Formik component supports yup validation out-of-the-box via the `validationSchema` prop
const validationSchema = yup.object().shape({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  email: yup.string().email().required('Required'),
  password: yup
    .string()
    .required('No password provided.')
    .min(6, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    .matches(/[0-9]/, 'Password can only contain number.'),
  confirmPassword: yup
    .string()
    .required('No password provided.')
    .oneOf([yup.ref('password')], 'Your passwords do not match.'),
});

interface Props {}

export const SignUp = memo((props: Props) => {
  return (
    <Wrapper>
      <CustomContainer>
        <Helmet>
          <title>SignUp</title>
          <meta name="description" content="A Boilerplate application SignUp" />
        </Helmet>
        <Row>
          <Span>
            <H1>Signup</H1>
            <Description>
              We donot share your personal details with anyone.
            </Description>
          </Span>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(
              values: FormValues,
              formikHelpers: FormikHelpers<FormValues>,
            ) => {
              alert(JSON.stringify(values, null, 2));
              formikHelpers.setSubmitting(false);
            }}
          >
            {(formikProps: FormikProps<FormValues>) => (
              <Form noValidate autoComplete="off">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      name="firstName"
                      label="First Name"
                      type="text"
                      component={TextField}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      name="lastName"
                      label="Last Name"
                      type="text"
                      component={TextField}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      name="email"
                      label="Email"
                      type="text"
                      component={TextField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="password"
                      label="Password"
                      type="password"
                      component={TextField}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      component={TextField}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      size="large"
                      color="primary"
                      disabled={formikProps.isSubmitting}
                      label="Signup"
                    />
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Row>
      </CustomContainer>
    </Wrapper>
  );
});

const Span = styled.span`
  width: 50%;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  margin-top: 40px;
  justify-content: space-between;
`;

const H1 = styled.h1`
  color: black;
`;
const Description = styled.p`
  color: black;
`;
