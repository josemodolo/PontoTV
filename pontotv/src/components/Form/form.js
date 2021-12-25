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
    height: 35%;
  }
  
`

// const FormDivMob = styled.div`
//   color: white;
//   display: flex;
//   align-items: center;
//   flex-direction: row-reverse;
//   position: absolute;
//   width: 40%;
//   height: 0 auto;
//   margin-right: 12vw;
//     @media (max-width: 490px){
      
//     }
// `

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
      width: 81vw;
      height: 2.8vw;
      font-size: 3vw;
    }
`

const Label = styled.label`
  margin-top: 1vw;
  font-size: 1.3vw;
  @media (max-width: 490px){
    font-size: 3vw;
  }
`

const TextBox = styled.textarea`
  border-radius: 0.2vw;
  width: 32vw;
  height: 0 auto;
  @media (max-width: 490px){
    width: 82vw;
    height: 11vw;
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
  font-size: 1.3vw;
   &:hover{
     background-color: blue;
   }
   margin-top: 1vw;
   width: 15vw;
   height: 0 auto;
`

const Select = styled.select`
  border-radius: 1vw;
  width: 32vw;
  padding: 0.5vw;
  font-size: 1.3vw;
  @media (max-width: 490px){
    width: 82vw;
    height: 2.8vh;
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

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_mtbyfmf','template_0ldod4l',e.target,'user_cJxNni3aYaBfWmtphIclr').then(res=>{console.log(res)}).catch(err=> console.log(err));
  }

  return (
    <FormDiv>
      <FormStyle onSubmit={sendEmail} >
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