import { useState } from "react"

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({target}) =>{
        const {name, value} = target

        // if(name === 'email' && formState.email.length < 2) {
        //     console.log('Faltan datos')
        // }

        setFormState({
            ...formState,
            [name]: value,  
        })
    }    
    
    const onResetForm = () => {
        setFormState(initialForm)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
