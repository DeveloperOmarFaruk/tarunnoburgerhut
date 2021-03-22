import styled from 'styled-components'
import ImgBg from '../../images/burger-2.jpg'
export const HeroContainer = styled.div `
background: linear-gradient( to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${ImgBg});
height: 100vh;
background-position: center;
background-size: cover;
`

export const HeroContent = styled.div `
height: calc(100vh -80px);
max-height: 100%; 
width: 90vw;
padding: 0rem calc((100vw - 1300px)/2);
`

export const HeroItems = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
height: 100vh;
max-height: 100%;
padding: 0 2rem;
width: 650px;
color: #fff;
line-height: 1;



@media screen and (max-width: 650px){
    width: 100%;
}
`

export const HeroH1 = styled.h1 `
font-size: clamp(2.5rem, 10vw, 4rem);
margin-bottom: 1rem;
box-shadow:  5px 5px  #ff7b00;
letter-spacing: 3px;
text-transform: uppercase;
`

export const HeroP = styled.p `
font-size: clamp(2rem, 2.5vw, 3rem);
margin-bottom: 2rem;
`

export const HeroBtn = styled.button `
font-size: 1.5rem;
padding: 1rem 2rem;
border: none;
background: #ff0000;
color: #fff;
transition: 0.2s ease-out;


&:hover{
    background: #ff7b00;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
}
`