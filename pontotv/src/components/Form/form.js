import styled from "styled-components";
import emailjs from 'emailjs-com'
import React, { useState } from 'react'

const FormDiv = styled.div`
  text-align: center;
  color: white;
`

const TextBox = styled.textarea`
  border-radius: 10px;
  margin-bottom: 8px;
`

const Bttn = styled.input`
  background-color: transparent;
  border: 5px solid transparent;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  outline: none;
  background-color: #e8952b;
  border-radius: 3px;
  font-weight: bold;
  font-size: 15px;
`

const InputDiv = styled.input`
  border-radius: 15px;
  padding: 8px;
  border: none;
`

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 10px;
`

const formatPhone = (value) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
    .replace(/(-\d{4})\d+?$/, '$1')
}

const userAlert = () => {
  alert('Mensagem enviada com sucesso')
}

const Mailer = () => {
  const [telefone, setTelefone] = useState (""); // estados sempre no inicio

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_mtbyfmf','template_0ldod4l',e.target,'user_cJxNni3aYaBfWmtphIclr').then(res=>{console.log(res)}).catch(err=> console.log(err));
  }

  return (
    <FormDiv>
      <FormStyle onSubmit={sendEmail}>
        <label>Nome</label>
        <InputDiv type='text' name='name' placeholder='Nome' required/>
        <label>E-mail</label>
        <InputDiv type='email' name='user_email' placeholder='E-mail' required/>
        <label for='phone'>WhatsApp</label>
        <InputDiv
          type="tel"
          id="phone"
          value={telefone}
          name="phone"
          maxlength="12"
          placeholder='(11) 01234-5678'
          required
          onChange={(event) => {
            const newValue = formatPhone(event.target.value)
            setTelefone(newValue)
          }}
        />
        <label>Mensagem</label>
        <TextBox name='message' rows='4'/>
        <Bttn type='submit' value='ENVIAR' onclick={userAlert}/>
      </FormStyle>
    </FormDiv>
  );
}

export default Mailer;