import styles from './Form.module.css'
import { useState } from 'react'

function Form(props){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
  
    const [error, setError] = useState('')
    const [submitedValues, setSubmitedValues] = useState()
  
    function handleSubmit(e){
        e.preventDefault()
  
        name.trim
        email.trim
  
        if(name.length <= 5){
            setError('Error : La longitud mínima para el nombre debe ser 6 caracteres')
        }else{
            setSubmitedValues({
                name,
                email
            })
            setName('')
            setEmail('')
            setError()
        }
    }
  
    function handleChange(e){
        if(e.target.id==="name"){
            setName(e.target.value)
        }else if(e.target.id==="email"){
            setEmail(e.target.value)
        }
    }
  
    return(
        <>
            <div className={styles.container}>
                <form onSubmit={handleSubmit}>
                
                    <div className={styles.inputcontainer}>
                        <label className={styles.label} htmlFor='name'>Nombre : </label>
                        <input 
                            className={styles.inputcontainer}
                            id="name" 
                            placeholder='Ingrese su nombre'
                            value={name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>    
                        <label className={styles.label} htmlFor='email'>Email : </label>
                        <input 
                            className={styles.inputcontainer}
                            type="email"
                            id="email" 
                            placeholder='Ingrese su correo'
                            value={email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className={styles.error}>
                        {error ? <p>{error}</p>:undefined}
                    </div>

                    <div>
                        <button type='submit' className={styles.button}>Submit</button>
                    </div>
                
                </form>
            </div>

            <div>
                {submitedValues ? (
                    <p>Gracias {submitedValues.name}, te contactaremos por {submitedValues.email}</p>
                ):undefined}
            </div>
        </>
    )
}

export default Form