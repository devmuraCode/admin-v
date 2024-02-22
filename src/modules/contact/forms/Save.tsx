import React from 'react';
import { Form, Formik, FormikProps } from 'formik';
import { useMutation } from 'react-query';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

export type IFormValues = Types.IForm.Values;

type IChildren = FormikProps<IFormValues>;

interface IProps {
  values: Types.IForm.Values;
  onSuccess?: (data: Types.IEntity.Data) => void;
  onError?: (error: string) => void;
  onSettled?: () => void;
  children(props: IChildren): JSX.Element;
}

const Save: React.FC<IProps> = ({ values, onSuccess, onError, onSettled, children }) => {
  const mutation = useMutation<Types.IEntity.Data, string, IFormValues, any>(
    async values => {
      const { data } = await Api.Save({ values });

      return Mappers.getData(data && data.data);
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
        info: values.info,
        pageName: values.pageName,
      }}
      enableReinitialize
    >
        {/* @ts-ignore */}
      {(props: FormikProps<IFormValues>) => <Form>{children(props)}</Form>}
    </Formik>
  );
};

export default Save;
