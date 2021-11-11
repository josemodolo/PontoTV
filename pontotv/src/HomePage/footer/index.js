import FootImg from '../../img/imghome/footer/footer.png'
import styled from "styled-components";

const FooterDiv = styled.div`
width: 100%;
height: 0 auto;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
color: white;
text-align: center;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`

const TextArea = styled.div`
  position: absolute;   
  color: white; 
  display: flex;    
  width: 50vw;
  height: 0 auto;
  flex-direction: column;
`

const Ptext = styled.p`
  font-size: 1.3vw;
`

function Footer (){
  return(
    <FooterDiv>
      <Img src= {FootImg}/>
        <TextArea>
          <Ptext>pontotvpublicidade@gmail.com</Ptext>
          <Ptext> © Ponto TV Publicidade 2013 - 2021 | Todos os direitos reservados.</Ptext>
        </TextArea>
    </FooterDiv>
  )
}

export default Footer