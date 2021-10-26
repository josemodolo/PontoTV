import styled from "styled-components";
import emailjs from 'emailjs-com'
import { React } from 'react'

const FormDiv = styled.div`  
  background-color: #526898;
  width: 50vw;
  height: 45vh;
  margin-top: 16px;
  margin-right: 20px;  
  text-align: center;
  color: white;
  
`

const TextBox = styled.textarea`
  width: 40vw;
  height: 12vh;
  border-radius: 10px;
`

const Bttn = styled.input`
  padding: 10px;
  background-color: transparent;
  border: 5px solid transparent;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  outline: none;
  background-color: #e8952b;
  border-radius: 3px;
  width: 10vw;
  font-weight: bold;
  font-size: 15px;
  &:hover{
    border: 5px solid #0071c0;
    background-color: #0071c0;
  }
`

const InputDiv = styled.input`
  border-radius: 15px;
  padding: 1%;
  border: none;
  width: 35vw;
  margin-top: 1%;
  margin-bottom: 1%;
`

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  
`

const Mailer = () => {

  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_mtbyfmf','template_0ldod4l',e.target,'user_cJxNni3aYaBfWmtphIclr').then(res=>{console.log(res)}).catch(err=> console.log(err));
  }
  
  const userAlert = () => {
    alert ('Mensagem enviada com sucesso')
  }

 

  return ( 
    <FormDiv>     
        <FormStyle onSubmit={sendEmail}>                
            <label>Nome</label>
            <InputDiv type='text' name='name' placeholder='Coloque seu nome' required/>
            <label>E-mail</label>
            <InputDiv type='email' name='user_email' placeholder='Coloque seu e-mail' required/>
            <label for='phone'>What'sApp</label>
            <InputDiv type="tel" id="phone" name="phone" maxlength="12" placeholder='Exemplo: (11)1234-5678'
            pattern="\([0-9]{2}\)[(0-9)]{2}-[0-9]{4}-[0-9]{4}"
            required
            //  onChange={ (event) => {setTelefone(event.target.value) } }
            />     
            <label>Mensagem</label>
            <TextBox name='message' rows='4'/>
            <Bttn type='submit' value='ENVIAR' onclick={userAlert}/>                  
        </FormStyle>      
    </FormDiv>
  );
}

export default Mailer;