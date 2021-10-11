import FootImg from '../../img/imghome/footer/footer.png'
import styled from "styled-components";

const FooterDiv = styled.div`
background:url(${FootImg});
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 8vh;
background-size: 100%;
background-repeat: no-repeat;
color: white;
`

function Footer (){
  return(
    <FooterDiv>
      <p>pontotvpublicidade@gmail.com</p><br/>
      <p> © Ponto TV Publicidade 2013 - 2021 | Todos os direitos reservados.</p>
    </FooterDiv>
  )
}

export default Footer