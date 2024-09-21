import { useState } from "react"

export const useForm = (initForm = {}) => {
  const [formValues, setFormValue] = useState(initForm);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValues,
      [name]: value,
    })
  }

  const handleArrayChange = (index, e, arrayName) => {
    const { name, value } = e.target;
    const updatedArray = formValues[arrayName].map((item, i) =>
      i === index ? { ...item, [name]: value } : item
    );

    setFormValue({
      ...formValues,
      [arrayName]: updatedArray,
    });
  };

  const resetForm = () => {
    setFormValue(initForm)
  }

  return {
    ...formValues,
    formValues,
    handleInputChange,
    resetForm,
    handleArrayChange
  }
}
