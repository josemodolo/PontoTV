import FootImg from '../../img/imghome/footer/footer.png'
import styled from "styled-components";

const FooterDiv = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
color: white;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`

const TextArea = styled.p`
  position: absolute;   
  color: white; 
  display: flex;    
  width: 50%;
  height: 0 auto;
  flex-direction: column;
`

function Footer (){
  return(
    <FooterDiv>
      <Img src= {FootImg}/>
        <TextArea>
          <p>pontotvpublicidade@gmail.com</p>
          <p> © Ponto TV Publicidade 2013 - 2021 | Todos os direitos reservados.</p>
        </TextArea>
    </FooterDiv>
  )
}

export default Footer