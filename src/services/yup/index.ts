import { i18n } from 'i18next';
import * as Yup from 'yup';

export const init = (i18n: i18n) => {
  Yup.setLocale({
    mixed: {
      default: i18n.t('validation_default'),
      required: i18n.t('validation_required'),
      oneOf: ({ values }): string => i18n.t('validation_one_of', { values }),
      notOneOf: ({ values }): string => i18n.t('validation_not_one_of', { values }),
      notType: ({ type }): string => i18n.t('validation_not_type', { type }),
    },
    string: {
      length: ({ length }): string => i18n.t('validation_length', { length }),
      min: ({ min }): string => i18n.t('validation_min', { min }),
      max: ({ max }): string => i18n.t('validation_max', { max }),
      matches: ({ regex }): string => i18n.t('validation_matches', { regex }),
      email: i18n.t('validation_email'),
      url: i18n.t('validation_url'),
      trim: i18n.t('validation_trim'),
      lowercase: i18n.t('validation_lowercase'),
      uppercase: i18n.t('validation_uppercase'),
    },
    number: {
      min: ({ min }): string => i18n.t('validation_min', { min }),
      max: ({ max }): string => i18n.t('validation_max', { max }),
      lessThan: ({ less }): string => i18n.t('validation_less_than', { less }),
      moreThan: ({ more }): string => i18n.t('validation_more_than', { more }),
      positive: i18n.t('validation_positive'),
      negative: i18n.t('validation_negative'),
      integer: i18n.t('validation_integer'),
    },
    date: {
      min: ({ min }): string => i18n.t('validation_min', { min }),
      max: ({ max }): string => i18n.t('validation_max', { max }),
    },
    object: {
      noUnknown: ({ path }): string => i18n.t('validation_no_unknown', { path }),
    },
    array: {
      min: ({ min }): string => i18n.t('validation_min', { min }),
      max: ({ max }): string => i18n.t('validation_max', { max }),
    },
  });
};
