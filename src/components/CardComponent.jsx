import React, { useState } from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import ReactSlider from 'react-slider';
const Root=styled.div`
    width: 300px;
    background-color: hsl(217, 28%, 15%);
    border-radius: 5px;
    color: white;
    padding: 20px;
`
const Slider=styled.div`
    margin: 20px 0px;

.horizontal-slider{
    width: 100%;
    height: 5px;
}
.example-track-0{
    background-color: green;
    height: 5px;

}
.example-track-1{
    background-color: grey;
    height: 5px;

}
.example-thumb{
    top: -8px;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    background-color: white;
    &:focus-visible{
        outline: none;
    }
}
    
`
const CheckContainer=styled.div`
.form-check-inline{
margin-bottom: 10px;
}
    
`
const Strength=styled.div`
height: 40px;
width: 100%;
background-color: black;
`

const Genbtn=styled.button`
width: 100%;
background-color: green;
border: none;
height: 40px;
margin-top: 20px;
`
const CharLength=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const random = (length = 8, uppercase,lowerCase,number,symbol) => {
    // Declare all characters
    const U= uppercase? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ':''
    const L= lowerCase?'abcdefghijklmnopqrstuvwxyz':''
    const N=number?'0123456789':''
    const S=symbol? '/?:;@#$%&*':''
    let chars = U+L+N+S;


    // if(uppercase){
    //     chars=U
    // }
    // else if(lowerCase){
    //     chars=L
    // }
    // else if(number){
    //     chars=N
    // }
    // else if(symbol){
    //     chars=S
    // }
    // else if(uppercase && lowerCase){
    //     chars=U+L
    // }
    // else if(uppercase && lowerCase && Number){
    //     chars=U+L+N
    // }
    // else if(uppercase && lowerCase && Number && Symbol){
    //     chars=U+L+N+S
    // }

    // Pick characers randomly
    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return str;

};


const CardComponent = ({result, setResult}) => {
    const [characterLength, setCharacterLength]=useState(0)
    const [upperCase, setUpperCase]=useState(false)
    const [lowerCase, setLowerCase]=useState(false)
    const [number, setNumber]=useState(false)
    const [symbol, setSymbol]=useState(false)

  return (
    <Root>
        <CharLength>
        <p>Character length</p>
        <span>{characterLength}</span>
        </CharLength>
        <Slider>
        <ReactSlider
    className="horizontal-slider"
    thumbClassName="example-thumb"
    trackClassName="example-track"
    renderThumb={(props, state) => <div {...props}></div>}
    onChange={(value)=>{setCharacterLength(value)}}
    max={20}
/>
        </Slider>
        <CheckContainer>
        <Form>
          <Form.Check
            inline
            label="Include Uppercase letters"
            //type={type}
            //id={`inline-${type}-1`}
            checked={upperCase}
            onChange={(e)=>setUpperCase(e.target.checked)}
          />
          <Form.Check
            inline
            label="Include Lowercase letters"
            //type={type}
            //id={`inline-${type}-2`}
            onChange={(e)=>setLowerCase(e.target.checked)}

          />
          <Form.Check
            inline
            label="Include Numbers"
            //type={type}
            //id={`inline-${type}-1`}
            onChange={(e)=>setNumber(e.target.checked)}

          />
          <Form.Check
            inline
            label="Include Symbols"
            // type={type}
            //id={`inline-${type}-1`}
            onChange={(e)=>setSymbol(e.target.checked)}

          />
    </Form>
        </CheckContainer>
        <Strength>

        </Strength>
        <Genbtn onClick={()=>{console.log({characterLength,upperCase,lowerCase,number,symbol}) ;
        setResult(random(characterLength,upperCase,lowerCase,number,symbol))
    } }>Generate</Genbtn>
      
    </Root>
  );
}

export default CardComponent;
