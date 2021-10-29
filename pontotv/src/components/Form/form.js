import styled from "styled-components";
import emailjs from 'emailjs-com'
import React, { useState } from 'react'

const FormDiv = styled.div`  
 // background-color: #526898;
  //width: 50vw;
  //height: max-content;
  //overflow: hidden;
  //margin-top: 16px;
  //margin-right: 20px;  
  background-color: yellow;
  text-align: center;
  color: white;
  //padding: 50px;
  
`

const TextBox = styled.textarea`
  //width: 40vw;
  height: 12vh;
  border-radius: 10px;
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
 // width: 10vw;
  font-weight: bold;
  font-size: 15px;
  
`

const InputDiv = styled.input`
  border-radius: 15px;
  padding: 1%;
  border: none;
  //width: 35vw;
  margin-top: 1%;
  margin-bottom: 1%;
`

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  //height: 40vh;
  color: white;
  overflow: hidden;
  background-color: transparent;
  padding: 10px;
  overflow: hidden;
  
`

const Mailer = () => {

  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_mtbyfmf','template_0ldod4l',e.target,'user_cJxNni3aYaBfWmtphIclr').then(res=>{console.log(res)}).catch(err=> console.log(err));
  }
  
  const userAlert = () => {
    alert ('Mensagem enviada com sucesso')
  }

  const formatPhone = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?$/, '$1')
  }
 
  const [ telefone, setTelefone ] = useState ("");

  return ( 
    <FormDiv>     
        <FormStyle onSubmit={sendEmail}>                
            <label>Nome</label>
            <InputDiv type='text' name='name' placeholder='Coloque seu nome' required/>
            <label>E-mail</label>
            <InputDiv type='email' name='user_email' placeholder='Coloque seu e-mail' required/>
            <label for='phone'>What'sApp</label>
            <InputDiv type="tel" id="phone" value={telefone}  name="phone" maxlength="12" placeholder='Exemplo: (11)1234-5678'
            
            required
            onChange={ (event) => {const newValue = formatPhone(event.target.value)
              setTelefone(newValue) } }
            />     
            <label>Mensagem</label>
            <TextBox name='message' rows='4'/>
            <Bttn type='submit' value='ENVIAR' onclick={userAlert}/>                  
        </FormStyle>      
    </FormDiv>
  );
}

export default Mailer;