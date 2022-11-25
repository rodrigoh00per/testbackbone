const breakpoints = {
  xxs: "320px",
  xs: "375px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px"
};
// UP
//greater than certain value
/* example
  |@media(min-width:768px){
    //style
  }
  */
const up = (breakpoint: string, vertical = false) =>
  `@media (min-${vertical ? "height" : "width"}: calc(${breakpoint} + 0.02px))`;

// down
//les than certain value
/* ejemplo 
  |@media(max-width:768px){
    //style
  }
  */
const down = (breakpoint: string, vertical = false) =>
  `@media (max-${vertical ? "height" : "width"}: ${breakpoint})`;

// between
//between two values
/* example 
  |@media(min-width:300px) and  (max-width:850px){
    //style
  }
  */
const between = (
  breakpointMin: string,
  breakpointMax: string,
  vertical = false
) =>
  `@media (min-${
    vertical ? "height" : "width"
  }: calc(${breakpointMin} + 0.02px)) and  (max-${
    vertical ? "height" : "width"
  }: ${breakpointMax})`;

export { up, down, between, breakpoints };
