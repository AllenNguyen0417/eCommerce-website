import React, { Component } from "react";
import { useState } from "react";
import Axios from "axios";
import { Link, Outlet } from "react-router-dom";
import Login from "./Login";

export function Users() {
  return <Login></Login>;
}

// export function Users() {
//   const [usernameRegistration, setUsernameRegistration] = useState("");
//   const [emailRegistration, setEmailRegistration] = useState("");
//   const [firstNameRegistration, setFirstNameRegistration] = useState("");
//   const [lastNameRegistration, setLastNameRegistration] = useState("");
//   const [passwordRegistration, setPasswordRegistration] = useState("");
//   const [phoneNumberRegistration, setPhoneNumberRegistration] = useState("");

//   const [username, setUsername] = useState("");
//   const [userPassword, setUserPassword] = useState("");

//   const register = () => {
//     Axios.post("http://localhost:8080/api/user/register", {
//       username: usernameRegistration,
//       email: emailRegistration,
//       firstName: firstNameRegistration,
//       lastName: lastNameRegistration,
//       password: passwordRegistration,
//       phoneNumber: phoneNumberRegistration,
//     }).then((response) => {
//       console.log(response);
//     });
//   };

//   const login = () => {
//     Axios.post("http://localhost:8080/api/login", {
//       email: emailRegistration,
//       firstName: firstNameRegistration,
//       lastName: lastNameRegistration,
//       userPassword: passwordRegistration,
//       phoneNumber: phoneNumberRegistration,
//     }).then((response) => {
//       console.log(response);
//     });
//   };

//   return (
//     <div>
//       <div className="registration">
//         <h1>Registration</h1>
//         <label>Username</label>
//         <input
//           type="text"
//           onChange={(e) => {
//             setUsernameRegistration(e.target.value);
//           }}
//         />
//         <label>Email</label>
//         <input
//           type="text"
//           onChange={(e) => {
//             setEmailRegistration(e.target.value);
//           }}
//         />
//         <label>First name</label>
//         <input
//           type="text"
//           onChange={(e) => {
//             setFirstNameRegistration(e.target.value);
//           }}
//         />
//         <label>Last name</label>
//         <input
//           type="text"
//           onChange={(e) => {
//             setLastNameRegistration(e.target.value);
//           }}
//         />
//         <label>Password</label>
//         <input
//           type="text"
//           onChange={(e) => {
//             setPasswordRegistration(e.target.value);
//           }}
//         />
//         <label>Phone number</label>
//         <input
//           type="text"
//           onChange={(e) => {
//             setPhoneNumberRegistration(e.target.value);
//           }}
//         />

//         <button onClick={register}>
//           <Link to="/">Register</Link>
//         </button>
//       </div>
//       <div classname="login">
//         <h1>Login</h1>
//         <label>Username</label>
//         <input
//           type="text"
//           onChange={(e) => {
//             setUsername(e.target.value);
//           }}
//         />
//         <label>Password</label>
//         <input
//           type="text"
//           onChange={(e) => {
//             setUserPassword(e.target.value);
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// export default class Users extends Component {
// constructor(props) {
//   super(props);
//   this.state = {
//     users: [],
//   };
// }
// componentDidMount() {
//   fetch("http://localhost:8080/api/users")
//     .then((response) => response.json())
//     .then((data) => this.setState({ users: data }));
// }
// render() {
//   return (
//     <div>
//       <div className="row">
//         <CreateUser></CreateUser>
//       </div>
//       <div className="row">
//         {this.state.users.map((item) => (
//           <SingleUser key={item.userId} item={item}></SingleUser>
//         ))}
//       </div>
//     </div>
//   );
// }
// }
