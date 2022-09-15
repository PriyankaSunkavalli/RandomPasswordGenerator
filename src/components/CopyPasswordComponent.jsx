import React from 'react';
import styled from 'styled-components';

const Root=styled.div`
    height: 50px;
    width: 300px;
    background-color: hsl(217, 28%, 15%);
    margin-bottom: 20px;
    border-radius: 5px;
    color: white;

`

const CopyPasswordComponent = ({result, setResult}) => {
  return (
    <Root>
      {result}
    </Root>
  );
}

export default CopyPasswordComponent;
