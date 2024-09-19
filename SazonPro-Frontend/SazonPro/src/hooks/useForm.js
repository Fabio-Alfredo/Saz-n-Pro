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

  const resetForm = () => {
    setFormValue(initForm)
  }

  return {
    ...formValues,
    formValues,
    handleInputChange,
    resetForm
  }
}
