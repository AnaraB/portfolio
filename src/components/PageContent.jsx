// import React, { useEffect } from "react"
// import Container from "./Container";

// function PageContent(props) {
//    //useEffect takes in 2 arguments: first arg, is a func that runs at a specific time; 
//   //second arg is [], is a list of dependancies that are being watched, when they do, they call first argument's function
//   //dependancies are clicking the links:  Home, About Me, Projects, Contact 
//   useEffect(()=>{
//     //use web browser or DOM based code to update title and scroll the page to the top
//     //manually update the title of the page
//     document.title = `${props.title} | Aygerim`
//     //tell the browser to scroll up the page when page is open 
//     window.scrollTo(0, 0)
//   }, [])


//   return (
//     <Container >
//     {props.children}
//     </Container >
  
//   )
// }

// export default PageContent
