import styled from "styled-components";
import emailjs from 'emailjs-com'

const FormDiv = styled.div`  
  background-color: white;
  width: 50vw;
  height: 42vh;
  margin-top: 16px;
  margin-right: 20px;
  
  text-align: center;
`

const TextBox = styled.textarea`
  width: 40vw;
  height: 12vh;
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

const Mailer = () => {

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_mtbyfmf','template_0ldod4l',e.target,'user_cJxNni3aYaBfWmtphIclr').then(res=>{console.log(res)}).catch(err=> console.log(err));
  }

  return ( 
    <FormDiv>
      <h1>Contato</h1><br/>      
        <form onSubmit={sendEmail}>                
            <label>Nome</label>
            <input type='text' name='name' placeholder='Coloque seu nome'/>
            <label>Email</label>
            <input type='email' name='user_email' placeholder='Coloque seu e-mail'/>            
            <label>Mensagem</label><br/><br/>
            <TextBox name='message' rows='4'/><br/>
            <Bttn type='submit' value='ENVIAR'/>                  
        </form>      
    </FormDiv>
  );
}

export default Mailer;