import { useState } from 'react'

export default function useForm(initial = {}) {
    const [inputs, setInputs] = useState(initial)
    function handleChange(e) {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        })
    }

    function clearForm() {
        const emptyState = Object.fromEntries(
          Object.entries(inputs).map(([key, value]) => [key, ''])
        )
        setInputs(emptyState)
    }

    return {
        inputs,
        handleChange,
        clearForm,
    }
}