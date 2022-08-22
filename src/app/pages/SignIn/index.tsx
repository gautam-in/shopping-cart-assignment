/**
 *
 *
 *
 */

import React, { memo } from 'react';
import { Grid } from '@mui/material';
import { Formik, FormikHelpers, FormikProps, Form, Field } from 'formik';
import * as yup from 'yup';

import { Helmet } from 'react-helmet-async';
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
  email: yup.string().required('Required'),
  password: yup.string().required('Required'),
});

export const SignIn = memo((props: Props) => {
  return (
    <Wrapper>
      <CustomContainer>
        <Helmet>
          <title>SignIn</title>
          <meta name="description" content="A Boilerplate application SignIn" />
        </Helmet>
        <Row>
          <span>
            <H1>Login</H1>
            <Description>
              Get access to your Orders, Wishlist and Recommendations
            </Description>
          </span>
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
                    <Button
                      type="submit"
                      variant="outlined"
                      size="large"
                      color="primary"
                      disabled={formikProps.isSubmitting}
                      label="login"
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
