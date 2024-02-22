import * as yup from 'yup';

export const validateMultiLangField = yup.object().shape({
  uz: yup.string().required(),
  oz: yup.string().required(),
  ru: yup.string().required(),
});
