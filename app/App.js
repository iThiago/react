import React, { Component } from "react";
import ReactDOM from "react-dom";
import Menu from "./components/menu";

ReactDOM.render(<h1>teste 2</h1>,document.getElementById('app'));
ReactDOM.render(<Menu/>,document.getElementById('app'));



// class FormContainer extends Component {
//   constructor() {
//     super();
//     this.state = {
//       title: ""
//     };
//   }
//   render() {
//     return (
//       <h1>Teste</h1>
//     );
//   }
// }
// export default FormContainer;