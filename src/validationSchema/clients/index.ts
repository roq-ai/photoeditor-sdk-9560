import * as yup from 'yup';
import { projectValidationSchema } from 'validationSchema/projects';

export const clientValidationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  designer_id: yup.string().nullable().required(),
  project: yup.array().of(projectValidationSchema),
});
