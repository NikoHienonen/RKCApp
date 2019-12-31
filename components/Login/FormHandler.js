import { useState, useEffect } from 'react'

export default function FormHandler(initialState, validate, navigate, userLogin) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);
  const [dbError, setDBError] = useState(null);

  useEffect(() => {
    if(isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      console.log(noErrors)
      if(noErrors) {
        login();
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors]);

  function login() {
    const referee = {
      username: values.username,
      password: values.password
    }
    userLogin(referee);
  }

  function handleChange(text, name) {
    setValues({
      ...values,
      [name]: text
    });
  }

  function handleBlur() {
    const validationErrors = validate(values);
  }

  function submit(e) {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  }

  return { handleChange, handleBlur, submit, errors, values, isSubmitting };
}
