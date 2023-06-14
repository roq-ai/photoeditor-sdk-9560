import * as yup from 'yup';

export const imageValidationSchema = yup.object().shape({
  url: yup.string().required(),
  project_id: yup.string().nullable().required(),
});
