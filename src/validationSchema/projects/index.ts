import * as yup from 'yup';
import { imageValidationSchema } from 'validationSchema/images';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  designer_id: yup.string().nullable().required(),
  client_id: yup.string().nullable().required(),
  image: yup.array().of(imageValidationSchema),
});
