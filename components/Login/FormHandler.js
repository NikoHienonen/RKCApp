import { useState, useEffect } from 'react'

export default function FormHandler(initialState, validate) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(true);
  const [dbError, setDBError] = useState(null);

  useEffect(() => {
    console.log(isSubmitting)
    if(isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if(noErrors) {
        console.log(values);
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors]);

  function handleChange(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }

  function handleBlur() {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }

  function submit(e) {
    e.preventDefault();
    const validationErrors = validate(values);
    setSubmitting(true);
  }

  return { handleChange, handleBlur, submit, errors, values, isSubmitting };
}
