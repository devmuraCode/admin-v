import React from 'react';
import { Form, Formik, FormikProps } from 'formik';
import { useMutation } from 'react-query';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

export type IFormValues = Types.IForm.Login;

type IChildren = FormikProps<IFormValues>;

interface IProps {
  onSuccess?: (data: Types.IEntity.Token) => void;
  onError?: (error: string) => void;
  onSettled?: () => void;
  children(props: IChildren): JSX.Element;
}

const Login: React.FC<IProps> = ({ onSuccess, onError, onSettled, children }) => {
  const mutation = useMutation<Types.IEntity.Token, string, IFormValues, any>(
    async values => {
      const { data } = await Api.Login({ values });

      return Mappers.Token(data && data.data);
    },
    {
      onSuccess,
      onError,
      onSettled,
    },
  );

  const handleSubmit = (
    values: IFormValues,
    { isSubmitting, setSubmitting }: FormikProps<IFormValues>,
  ) => {
    if (!isSubmitting) {
      setSubmitting(true);
      mutation.mutate(values, {
        onError: () => setSubmitting(false),
      });
    }
  };

  return (
    <Formik<IFormValues>
      onSubmit={handleSubmit}
      initialValues={{
        username: '',
        password: '',
      }}
      enableReinitialize
    >
      {(props: FormikProps<IFormValues>) => <Form>{children(props)}</Form>}
    </Formik>
  );
};

export default Login;
