import React from 'react';
import styled from "styled-components"
import Fade from 'react-reveal/Fade'

function Section(props) {
  console.log(props)
  return (
    <Wrap bgImage={props.backgroundImg}>
      <Fade bottom>
        <ItemText>
        <h1>{props.title}</h1>
          <p>{props.description} </p>
        </ItemText>
        </Fade>
          <Buttons>
          <Fade bottom>

          
        <ButtonGroup>
          <LeftButton>{props.leftbtntext}</LeftButton>
          
          {props.rightbtntext && 
          <RightButton>
          {props.rightbtntext}
          </RightButton>
}
         

        </ButtonGroup>
        </Fade>

        <DownArrow src="images/down-arrow.svg"/>
        </Buttons>
    </Wrap>
  
  );
}


const Wrap= styled.div`

width:100vw;
height:100vh;

background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-image:${props=>`url("images/${props.bgImage}")`}
`
export default Section;

const ItemText=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
text-align:center;
padding-top:15vh;

`
const ButtonGroup=styled.div`
display:flex;
align-items:center;
margin-bottom:30px;
@media only screen and (max-width:768px){
flex-direction:column;
}

`
const LeftButton=styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:8px;

`
const RightButton=styled(LeftButton)`
background:white;
opacity:0.65;
color:black;
`
const DownArrow=styled.img`

height:40px;
animation:animateDown infinite 1.5s;
overflow-x:hidden;
`
const Buttons=styled.div`
display:flex;
align-items:center;
flex-direction:column;
`