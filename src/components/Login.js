// import React, { useState } from 'react'

// function Login() {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     async function loginUser(event) {
//         event.preventDefault()
//         const response = await fetch('http://localhost:1337/api/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 email,
//                 password,
//             }),
//         })
//         const data = await response.json()

//         if (data.user) {
// localStorage.setItem('token',data.user)
//             alert('login successfull')
//             window.location.href = '/Dashboard'

//         }
//         else {
//             alert('please check your username and password')
//             window.location.href = '/Login'
//         }

//     }
//     return (
//         <>
//             <div className='container col-md-4   my-5'>
//                 <form onSubmit={loginUser}>
//                     <h1>Login</h1>

//                     <div className='form-gorup my-2'>
//                         <span className='form-label'>Email</span>
//                         <input
//                             type="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className='form-control'
//                             placeholder='Enter Your Email' ></input>
//                     </div>
//                     <div className='form-gorup my-2'>
//                         <span className='form-label'>Password</span>
//                         <input type="password"
//                             value={password}
//                             className='form-control'
//                             onChange={(e) => setPassword(e.target.value)}
//                             placeholder='ENter Your Password' >
//                         </input>
//                     </div>
//                     <div className='form-gorup my-2'>
//                         <button
//                             className='btn btn-primary'
//                             value="Login"
//                         >Login</button>
//                     </div>
//                 </form>


//             </div>
//         </>
//     )
// }

// export default Login