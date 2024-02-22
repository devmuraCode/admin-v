import React from 'react';
import { Form, Formik, FormikProps } from 'formik';
import { useMutation } from 'react-query';
import * as yup from 'yup';

import { STATUS } from '@/helpers/enums';
import { objectMultiLangField } from '@/helpers/objects';
import { validateMultiLangField } from '@/helpers/validations';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';
import * as Constants from '../constants';

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

  const validationSchema = yup.object().shape({
    name: validateMultiLangField,
    title: validateMultiLangField,
    description: validateMultiLangField,
  });

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
        title: objectMultiLangField,
        description: objectMultiLangField,
        photoId: '',
        type: Constants.BLOG_TYPE.NEW,
        status: STATUS.ACTIVE,
      }}
      enableReinitialize
      {...{ validationSchema }}
    >
      {(props: FormikProps<IFormValues>) => <Form>{children(props)}</Form>}
    </Formik>
  );
};

export default Create;
