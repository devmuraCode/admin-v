import React from 'react';
import { Form, Formik, FormikProps } from 'formik';
import { useMutation } from 'react-query';

import { STATUS } from '@/helpers/enums';
import { objectMultiLangField } from '@/helpers/objects';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

export type IFormValues = Types.IForm.Values;

type IChildren = FormikProps<IFormValues>;

interface IProps {
  onSuccess?: (data: Types.IEntity.Data) => void;
  onError?: (error: string) => void;
  onSettled?: () => void;
  children(props: IChildren): JSX.Element;
}

const Create: React.FC<IProps> = ({ onSuccess, onError, onSettled, children }) => {
  const mutation = useMutation<Types.IEntity.Data, string, IFormValues, any>(
    async values => {
      const { data } = await Api.Create({ values });

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
        name: objectMultiLangField,
        salary: 10000,
        description: objectMultiLangField,
        photoId: '',
        status: STATUS.ACTIVE,
      }}
      enableReinitialize
    >
      {(props: FormikProps<IFormValues>) => <Form>{children(props)}</Form>}
    </Formik>
  );
};

export default Create;
