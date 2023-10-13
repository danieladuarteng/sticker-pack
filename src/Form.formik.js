import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  email: yup.string().email('Email inválido').required('O email é obrigatório'),
  stickers: yup.array().of(
    yup.object().shape({
      framework: yup.string().required(),
      count: yup.number().integer().min(0).required(),
    })
  ).test('at-least-one-count', 'Deve ser selecionado pelo menos um sticker', function (value) {
    const atLeastOneCountGreaterThanZero = value.some(item => item.count > 0);
    return atLeastOneCountGreaterThanZero;
  }),
  description: yup.string(),
});

const initialData = {
  name: '',
  email: '',
  stickers: [
    {
      framework: "React",
      count: 0
    },
    {
      framework: "Vue",
      count: 0
    },
    {
      framework: "Angular",
      count: 0
    },
  ],
  description: ''
};

const mapDataToValues = data => ({
  name: data.name,
  email: data.email,
  stickers: data.stickers,
  description: data.description
});

const mapValuesToData = values => ({
  name: values.name,
  email: values.email,
  stickers: values.stickers,
  description: values.description
});

export const formik = {
  displayName: "FormStickes",
  handleSubmit: (values, formProps) => {
    const data = mapValuesToData(values);
    formProps.props.handleSubmit(data);
    formProps.setSubmitting(true)

    setTimeout(() => {
      formProps.resetForm();
      formProps.setSubmitting(false); 
    }, 5000); 
  },
  validateOnMount: () => formSchema,
  enableReinitialize: true,
  mapPropsToValues: props => {
    if (!props.initialData) return initialData;
    return mapDataToValues(props.initialData);
  },
  validationSchema: () => formSchema
};
