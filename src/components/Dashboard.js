// import React, { useEffect, useState } from "react";
// import './Dashboard.css';
// /*import { LoremIpsum } from 'react-lorem-ipsum';*/
// import { useNavigate } from "react-router-dom";
// // import {useJwt}  from 'react-jwt';
// // import jwt from "jsonwebtoken"
// import jwt_decode from "jwt-decode";


// ---------------------

// export default function Dashboard() {
//   const history = useNavigate()
//   const navigate = useNavigate()
//   const parseJwt = (token) => {
//     try {
//       return JSON.parse(atob(token.split(".")[1]));
//     } catch (e) {
//       return null;
//     }
//   };
//   const AuthVerify = (props) => {
//     props.history.listen(() => {
//       const user = JSON.parse(localStorage.getItem("user"));
//       if (user) {
//         const decodedJwt = parseJwt(user.accessToken);
//         if (decodedJwt.exp * 1000 < Date.now()) {
//           props.logOut();
//         }
//       }
//     });
//   const handleLogout = ()=>{
//     localStorage.removeItem('token');
//     window.location.href = '/Login'
//   }

// --------------------



  // const [quote, setQuote] = useState('')
  // const [tempQuote, setTempQuote] = useState('')
  // const jwt = useJwt()



  // async function populateQoute() {

  //   const req = await fetch('http://localhost:/1337/api/quote',
  //     {
  //       headers: {
  //         'x-access-token': localStorage.getItem('token'),
  //       },
  //     })
  //   const data = await req.json()
  //   if (data.status === 'ok') {
  //     console.log('all done')
  //   }
  //   else {
  //     alert(data.error)
  //   }
  // }



  // Imporant
// -----------------------
  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   if (token) {
  //     const user = jwt_decode(token, { header: true });
  //     console.log(user)
  //     if (!user) {
  //       localStorage.removeItem('token')
  //       history.replace('/login')
  //     }
  //     else {
        
  //       // populateQoute()
  //     }
  //   }
  // }, [])

// ---------------






  // async function updateQuote(event) {
  //   event.preventDefault()
  //   const req = await fetch('http://localhost:/1337/api/quote',
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'x-access-token': localStorage.getItem('token'),
  //       },
  //       body: JSON.stringify({
  //         quote: tempQuote,
  //       }),
  //     })
  //   const data = await req.json()
  //   if (data.status === 'ok') {
  //     setTempQuote('')
  //     setQuote(tempQuote)
  //   }
  //   else {
  //     alert(data.error)
  //   }
  // }
// ----
  // }
  // -----
  // ---------
// return (
  

// <>
//   <div className="header">
//     <nav>
//       <div className="container-xxl">
//         <div className="row pt-3">

//           <div className=" col-sm-3 col-md-4 col-lg col-xl-4 ">
//             <a href="#">
//               <img className="logo my-3" src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa-Webshop_CA-smb-responsive/en_US/Sowa.png" /></a>
//             <span className="logo-title">TOOLING YOUR WORLD</span>
//           </div>
//           <div className=" col-sm-9 col-md-8 col-lg col-xl-8  ">
//             <div className="row float-end">
//               <div className="container-xxl">
//                 <input type="" id="form1" className=" input-prp" />
//                 <a href="#">
//                   <button type="button" className="btn  bg-white srch-btn  mt-0 me-4">
//                     <i className="bi bi-search"></i>
//                   </button>
//                 </a>
//                 <a href="#">
//                   <i id="#" className="bi bi-people user-icon mx-1"></i></a>
//                 <a href="#">
//                 <span className="user-p mx-2" onClick={handleLogout}>Logout</span>
//                   {/* <span className="user-p mx-2" onClick={() => { navigate("/Login") }}>Logout</span> */}
//                 </a>
//                 <a href="#">
//                   <i id="#" className="bi bi-sliders2-vertical slider mx-2"></i>
//                 </a>
//                 <a href="#">
//                   <i className="bi bi-suit-heart heart mx-2"></i></a>
//                 <a href="#">
//                   <i className="bi bi-bag icon-bag "></i></a>
//                 <span className=" text-white mx-2">0</span>
//                 <a href="#">
//                   <i className="bi bi-text-right text-white"></i></a>
//                 <a href="#">
//                   <img className=" img-fluid mx-3" src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/-/en_US/img/countrycanada.png"></img></a>
//                 <div className="row">
//                   <div className=" mt-1 mb-2">
//                     <span className="phone">1-800-265-8221</span>
//                     <a href="#">
//                       <span className="web ">sales@sowatool.com</span></a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   </div>


//   <nav className="navbar navbar-expand-lg navbar-light nav-bar py-0">
//     <div className="container-fluid ms-5">
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav me-auto  mb-lg dropdown-menus">
//           <li className="nav-item dropdown ">
//             <a className="nav-link active " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//               Shop All Products
//             </a>
//             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//               <li>
//                 <a className="dropdown-item" href="#">Submenu item 3 &raquo; </a>
//                 <ul className="dropdown-menu dropdown-submenu">
//                   <li>
//                     <a className="dropdown-item" href="#">Multi level 1</a>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="#">Multi level 2</a>
//                   </li>
//                   <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <li>
//                       <a className="dropdown-item" href="#">Submenu item 3 &raquo; </a>
//                       <ul className="dropdown-menu dropdown-submenu">
//                         <li>
//                           <a className="dropdown-item" href="#">Multi level 1</a>
//                         </li>
//                         <li>
//                           <a className="dropdown-item" href="#">Multi level 2</a>
//                         </li>
//                       </ul>
//                     </li>

//                   </ul>
//                 </ul>
//               </li>

//             </ul>
//           </li>
//           <li className="nav-item dropdown">
//             <a className="nav-link active " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//               Shop By Brand
//             </a>
//             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//               <li><a className="dropdown-item" href="#">Action</a></li>
//               <li><a className="dropdown-item" href="#">Another action</a></li>
//               <li><hr className="dropdown-divider" /></li>
//               <li><a className="dropdown-item" href="#">Something else here</a></li>
//             </ul>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link active" href="#">Download Centre</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link active" href="#">Contact Us</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link active" href="#">About Us</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link active" href="#" id="box">Careers</a>
//           </li>
//           <li className="nav-item dropdown">
//             <a className="nav-link active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//               Support
//             </a>
//             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//               <li><a className="dropdown-item" href="#">Contact US</a></li>
//               <li><a className="dropdown-item" href="#">Request Information</a></li>
//               <li><a className="dropdown-item" href="#">Return Policy</a></li>
//               <li><a className="dropdown-item" href="#">Ordering,Shiping and Payment</a></li>
//               <li><a className="dropdown-item" href="#">Safety,Security & Privacy</a></li>
//               <li><a className="dropdown-item" href="#">Frequently Asked Question</a></li>


//             </ul>
//           </li>
//           <li className="nav-item dropdown order-item">
//             <a className="nav-link active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//               Quick Order
//             </a>
//             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">



//             </ul>
//           </li>


//         </ul>

//       </div>
//     </div>
//   </nav>
//   <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
//     <div className="carousel-indicators">
//       <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//       <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//       <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//     </div>
//     <div className="carousel-inner">
//       <div className="carousel-item active">
//         <img src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/homepage/New-Catalogue.jpg" className="d-block w-100" alt="..." />
//       </div>
//       <div className="carousel-item">
//         <img src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/homepage/Were-Hiring.jpg" className="d-block w-100" alt="..." />
//       </div>
//       <div className="carousel-item">
//         <img src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/homepage/NEW-STM-Holders.jpg" className="d-block w-100" alt="..." />
//       </div>
//     </div>
//     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//       <span className="visually-hidden">Previous</span>
//     </button>
//     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//       <span className="carousel-control-next-icon" aria-hidden="true"></span>
//       <span className="visually-hidden">Next</span>
//     </button>
//   </div>

//   <section>

//     <div className="text-center container-xl py-2">
//       <h2 className="product-heading pb-5 ">Top Product Categories</h2>
//       <div className="row">
//         <div className="col-lg col-md-6 mb-4">
//           <div className="card-prop">
//             <div className="card">
//               <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
//                 data-mdb-ripple-color="light">
//                 <img src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/category/Drilling-L1.jpg"
//                   className="w-100" />
//                 <a href="#!">
//                   <div className="mask">
//                   </div>
//                   <div className="hover-overlay">
//                     <div className="mask"></div>
//                   </div>
//                 </a>
//               </div>
//             </div>
//             <span className="card-text">Drilling & Holemaking</span>
//           </div>
//         </div>
//         <div className="col-lg col-md-6 mb-4">
//           <div className="card-prop">
//             <div className="card">
//               <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
//                 data-mdb-ripple-color="light">
//                 <img src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/category/Indexable-L1.jpg"
//                   className="w-100" />
//                 <a href="#!">
//                   <div className="mask">
//                   </div>
//                   <div className="hover-overlay">
//                     <div className="mask"></div>
//                   </div>
//                 </a>
//               </div>
//             </div>
//             <span className="card-text">Indexable Cutting Tools</span>
//           </div>
//         </div>
//         <div className="col-lg col-md-6 mb-4">
//           <div className="card-prop">
//             <div className="card">
//               <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
//                 data-mdb-ripple-color="light">
//                 <img src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/category/Measuring-L1.jpg"
//                   className="w-100" />
//                 <a href="#!">
//                   <div className="mask">
//                   </div>
//                   <div className="hover-overlay">
//                     <div className="mask"></div>
//                   </div>
//                 </a>
//               </div>
//             </div>
//             <span className="card-text">Measuring & Inspecting</span>
//           </div>
//         </div>
//         <div className="col-lg col-md-6 mb-4">
//           <div className="card-prop">
//             <div className="card">
//               <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
//                 data-mdb-ripple-color="light">
//                 <img src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/category/Milling-L1.jpg"
//                   className="w-100" />
//                 <a href="#!">
//                   <div className="mask">
//                   </div>
//                   <div className="hover-overlay">
//                     <div className="mask"></div>
//                   </div>
//                 </a>
//               </div>
//             </div>
//             <span className="card-text">Minning</span>
//           </div>
//         </div>
//         <div className="col-lg col-md-6 mb-4">
//           <div className="card-prop">
//             <div className="card">
//               <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
//                 data-mdb-ripple-color="light">
//                 <img src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/category/Threading-L1.jpg"
//                   className="w-100" />
//                 <a href="#!">
//                   <div className="mask">
//                   </div>
//                   <div className="hover-overlay">
//                     <div className="mask"></div>
//                   </div>
//                 </a>
//               </div>
//             </div>
//             <span className="card-text">Threading & Tapping</span>
//           </div>
//         </div>
//         <div className="col-lg col-md-6 mb-4">
//           <div className="card-prop">
//             <div className="card">
//               <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
//                 data-mdb-ripple-color="light">
//                 <img src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/category/ToolHolding-L1.jpg"
//                   className="w-100" />
//                 <a href="#!">
//                   <div className="mask">
//                   </div>
//                   <div className="hover-overlay">
//                     <div className="mask"></div>
//                   </div>
//                 </a>
//               </div>
//             </div>
//             <span className="card-text">Tool Holding</span>
//           </div>
//         </div>
//         <div className="col-lg col-md-6 mb-4">
//           <div className="card-prop">
//             <div className="card">
//               <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
//                 data-mdb-ripple-color="light">
//                 <img src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/category/Workholding-L1.jpg"
//                   className="w-100" />
//                 <a href="#!">
//                   <div className="mask">
//                   </div>
//                   <div className="hover-overlay">
//                     <div className="mask"></div>
//                   </div>
//                 </a>
//               </div>
//             </div>
//             <span className="card-text">Workholding, Clamping and Fixturing</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>

//   <section>
//     <div className="container-xxl align-content-start py-3">
//       <div className="row">
//         <div className="col-lg-6 col-md-12  ">
//           <div className="card-big">
//             <img src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/homepage/Website-Launch-Post.jpg" className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title card-head">Welcome to the New SowaTool.com!</h5>
//               <p className="card-text card-para">Before you can get online there are a couple of steps you need to take. But rest assured, these are still the same product you know and love.</p>
//               <a href="#" /><button className=" card-btn">Setup Account</button>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-6 col-md-12">
//           <div className="card-big">
//             <img src="https://www.sowatool.com/INTERSHOP/static/WFS/Sowa-Webshop_CA-Site/-/Sowa/en_US/homepage/Sowa-to-GS-Post.jpg" className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title card-head">Sowa To GS Tooling Endmill Rebrand</h5>
//               <p className="card-text card-para">Our premium carbide end mills will now be sold under the GS Tooling brand. But rest assured, these are still the same product you know and love.</p>
//               <a href="#" /><button className="  card-btn">Learn More</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//   </section>
//   </>
 


// );


// }
// ---------
