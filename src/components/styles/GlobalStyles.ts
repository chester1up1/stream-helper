import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }
  body{
    background-color: #222222;
    color:#ffffff;
    margin:0;
    height: 100vh;
    &>#root{
      height: 100%;
    }
  }
  .violet-letter {
    color: #cd00ff;
  }
  .green-letter {
    color: #1fff96;
  }
`;

/*
  colors:{
  violet: #cd00ff
  green: #1fff96
  }
*/
