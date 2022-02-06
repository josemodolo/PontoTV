import styled from "styled-components";
import emailjs from 'emailjs-com'
import React, { useState } from 'react'

const FormDiv = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 40%;
  height: 0 auto;
  margin-right: 12vw;
  @media only screen and (max-width: 769px){
    margin-bottom: 4vw;
    margin-left: 13vw;
  }
  
`

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;  
  height: 0 auto;
  
`

const InputDiv = styled.input`
  border-radius: 1vw;
  border: none;
  width: 32vw;
  padding: 0.5vw;
  height: 2.1vw;
  font-size: 1.3vw;
  @media (max-width: 490px){
      width: 82vw;
      padding: 3vw;
      height: 2.8vw;
      font-size: 3vw;
    }
`

const Label = styled.label`
  margin-top: 1vw;
  font-size: 1.3vw;
  @media (max-width: 490px){
    font-size: 3.7vw;
  }
`

const TextBox = styled.textarea`
  border-radius: 0.2vw;
  width: 32vw;
  height: 0 auto;
  @media (max-width: 490px){
    width: 82vw;
    height: 20vw;
  }
  
`

const Bttn = styled.input`
  background-color: transparent;
  border: 5px solid transparent;
  border-radius: 0.5vw;
  color: white;
  cursor: pointer;
  outline: none;
  background-color: #e8952b;  
  font-weight: bold;
   &:hover{
     background-color: blue;
   }
   margin-top: 2vw;
   width: 19vw;
   height: 4vw;
   font-size: 2vw;
   @media (max-width: 490px){
      background-color: transparent;
      border: 5px solid transparent;
      border-radius: 0.5vw;
      color: white;
      cursor: pointer;
      outline: none;
      background-color: #e8952b;  
      font-weight: bold;
      
      &:hover{
        background-color: blue;
      }
      margin-top: 2vw;
      width: 50vw;
      height: 10vw;
      font-size: 5vw;
  }
`

const Select = styled.select`
  border-radius: 1vw;
  width: 32vw;
  padding: 0.5vw;
  font-size: 1.3vw;
  @media (max-width: 490px){
    width: 82vw;
    height: 8vw;
    font-size: 3vw;
  }
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

  const clearInput = () => {
    document.getElementById("myForm").reset();
  }

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_mtbyfmf','template_0ldod4l',e.target,'user_cJxNni3aYaBfWmtphIclr').then(res=>{console.log(res)}).catch(err=> console.log(err));
    clearInput()
    setTelefone()
  }

  return (
    <FormDiv>
      <FormStyle onSubmit={sendEmail} id="myForm">
        <Label>Nome</Label>
        <InputDiv type='text' name='name' placeholder='Nome' required/>
        <Label>E-mail</Label>
        <InputDiv type='email' name='user_email' placeholder='E-mail' required/>
        <Label for='phone'>WhatsApp</Label>
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
        <Label for="Select">Assunto</Label>
          <Select id="select" name="select">
            <option value="QUERO ANUNCIAR">QUERO ANUNCIAR</option>
            <option value="QUERO SABER SOBRE A FRANQUIA">QUERO SABER SOBRE A FRANQUIA</option>
            <option value="OUTROS">OUTROS</option>            
          </Select>
        <Label>Mensagem</Label>
        <TextBox name='message' rows='4'/>
        <Bttn type='submit' value='ENVIAR' onClick={userAlert}/>
      </FormStyle>
    </FormDiv>
  );
}

export default Mailer;