import react from "react";
import styled from "styled-components";
import emailjs from 'emailjs-com'

const FormDiv = styled.div`
  
  background-color: white;
  width: 50vw;
  height: 40vh;
  margin-top: 25px;
  margin-right: 20px;

`


const Mailer = () => {

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_mtbyfmf','template_0ldod4l',e.target,'user_cJxNni3aYaBfWmtphIclr').then(res=>{console.log(res)}).catch(err=> console.log(err));
  }

  return ( 
    <FormDiv>
      <h1>Contato</h1>
      <form onSubmit={sendEmail}>
        <label>Nome</label><br/>
        <input type='text' name='name'/><br/>
        <label>email</label><br/>
        <input type='email' name='user_email' /><br/>
        <label>Mensagem</label><br/>
        <textarea name='message' rows='4'/><br/>
        <input type='submit' value='Send'/>
      </form>
    </FormDiv>
  );
}

export default Mailer;