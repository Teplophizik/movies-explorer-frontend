import { useState, useCallback } from "react";

export default function () {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    let error = "";

    if (value) {
      switch (name) {
        case "name":
          error = /^[a-zа-я\s-]+$/iu.test(value)
            ? ""
            : "Может содержать только буквы, пробелы и дефисы";
          break;
        case "email":
          error =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
              value
            )
              ? ""
              : "Некорректный адрес";
          break;
        default:
          break;
      }
    }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: error || target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm, setValues };
}
