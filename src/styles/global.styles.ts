import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
export default createGlobalStyle(
  ({
    theme: {
      common: { fontFamily, fontSize, backgroundColor, color }
    }
  }: any) => `
${normalize}

html {
  box-sizing: border-box;
}
body {
  font-family: ${fontFamily}, sans-serif;
  font-size:${fontSize};
  color: ${color};
  background-color: ${backgroundColor};
}
html, body,#root {
  margin: 0px;
  padding: 0px;
  border: 0px;
  height:100%;
  width:100%;  
}

*, *:before, *:after {
   -webkit-box-sizing: inherit;
    box-sizing: inherit;
    padding: 0;

}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
}
button:{
  outline:0;
}
  `
)
