import React from 'react';
import { withFormik } from 'formik';
import { formik } from './Form.formik'
import DecrementSVG from './components/DecrementSVG'
import IncrementSVG from './components/IncrementSVG'
import Button from './components/Button';

const Form = (props) => {
  const {
    values: {
      name,
      email,
      stickers,
      description,
    },
    errors,
    touched,
    handleBlur,
    setFieldValue,
    handleSubmit,
    setSubmitting,
    isSubmitting,
    isValid,
    isFormReset,
    setFormReset
  } = props;

  const shouldShowMessage = isSubmitting && Object.keys(props.errors).length === 0;

  const handleCustomChange = (fieldName, newValue) => {
    setSubmitting(false);
    setFormReset(false);
    setFieldValue(fieldName, newValue);
  };

  return (
    <form
      autoComplete='off'
      noValidate
      onSubmit={handleSubmit}
    >
      <fieldset className="header">
        <legend className="title">
          Formulário<br />
          para compra de<br />
          <strong>Pacote de Stickers</strong>
        </legend>
      </fieldset>

      <fieldset className='form-field'>
        <label
          htmlFor="name"
        >
          Nome:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => {
            const { value } = event.target;
            handleCustomChange('name', value);
          }}
          onBlur={handleBlur}
        />
        {errors.name && touched.name && (
          <div className='error-message'>{errors.name}</div>
        )}
      </fieldset>

      <fieldset className='form-field'>
        <label
          htmlFor="email"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => {
            const { value } = event.target;
            handleCustomChange('email', value);
          }}
          onBlur={handleBlur}
          className='email'
        />
        {errors.email && touched.email && (
          <div className='error-message'>{errors.email}</div>
        )}
      </fieldset>

      <fieldset>
        <legend style={{ marginBottom: errors.stickers && touched.stickers ? '0' : '15px' }}>
          Selecione a quantidade de cada sticker que você quer:
        </legend>
        {errors.stickers && touched.stickers && (
          <div className='error-message' style={{ marginBottom: '15px' }}>{errors.stickers}</div>
        )}
        {stickers.map(({ framework, count }, index) => (
          <div className="counter" key={index}>
            <p>{framework}</p>
            <div className="actions">
              <Button
                ariaLabel={`Botão que diminui a quantidade de stickers de ${framework}`}
                dataTestid={`buttonDecrement${framework}`}
                onBlur={handleBlur('stickers')}
                disabledButton={count === 0}
                onClick={event => {
                  event.preventDefault();
                  handleCustomChange(`stickers[${index}].count`, count - 1);
                }}
                icon={<DecrementSVG ariaLabelledby={`Diminuir quantidade de stickers de ${framework}`} />}
              />
              <output
                name='count'
                aria-label={`Quantidade de ${count}`}
              >
                {count}
              </output>
              <Button
                ariaLabel={`Botão que aumenta a quantidade de stickers de ${framework}`}
                dataTestid={`buttonIncrement${framework}`}
                onBlur={handleBlur('stickers')}
                onClick={event => {
                  event.preventDefault();
                  handleCustomChange(`stickers[${index}].count`, count + 1);
                }}
                icon={<IncrementSVG ariaLabelledby={`Aumentar quantidade de stickers de ${framework}`} />}
              />
            </div>
          </div>
        ))}
      </fieldset>

      <fieldset>
        <legend>Observações (opcional):</legend>
        <textarea
          name='description'
          onChange={(event) => {
            const { value } = event.target;
            handleCustomChange('description', value);
          }}
          placeholder='Alguma dúvida? Recado?'
          value={description}
        />
      </fieldset>

      <footer
        className={shouldShowMessage ? 'footerWithMessage' : ''}
      >
        {shouldShowMessage && (
          <p>Formulário enviado com sucesso</p>
        )}
        <button
          disabled={!isValid || isFormReset}
          type="submit"
        >
          Enviar
        </button>
      </footer>
    </form >
  )
}

export default withFormik(formik)(Form);
