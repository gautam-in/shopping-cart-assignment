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
  email: string;
  password: string;
}

// the Formik component supports yup validation out-of-the-box via the `validationSchema` prop
const validationSchema = yup.object().shape({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  email: yup.string().required('Required'),
  password: yup.string().required('Required'),
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
              email: '',
              password: '',
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
                      variant="outlined"
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
