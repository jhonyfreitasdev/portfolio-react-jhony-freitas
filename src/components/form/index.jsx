import { useState } from "react";
import emailjs from "@emailjs/browser";

import "./index.sass";
 
export const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    
    const sendEmail = (e) => {
        e.preventDefault()

        if (name === '' || email === '' || message === '') {
            alert('Preencha todos os campos!!!')
            return
        }

        const params = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send("service_pf4mwlh", "template_b7xa9yn", params, "e6jdDDZ0cGipfnSCd")
            .then(result => {
                if ( result.status === 200 ){
                    alert('Obrigado pela sua mensagem, responderei assim que possível!')
                    setName('')
                    setEmail('')
                    setMessage('')
                } 
            }, err => {
                console.log(err);
            })
    }

    return(
        <>
            <from onSubmit={sendEmail} className="form"> 
                <input className="input" 
                    type="text"
                    placeholder="Digite seu nome"
                    onChange={e => setName(e.target.value)}
                    value={name}
                />
                
                <input className="input" 
                    type="text"
                    placeholder="Digite seu email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />

                <textarea className="textarea"
                    type="text"
                    placeholder="Digite sua mensagem..."
                    onChange={e => setMessage(e.target.value)}
                    value={message}
                />

                <input className="btn-submit" type="submit" value="Enviar" />
            </from>
        </>
    )
}