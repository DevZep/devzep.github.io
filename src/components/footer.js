import React from 'react'
import Link from 'gatsby-link'

const Footer = ({ data }) => (
  <div>
    <h1>© 2020 DevZep</h1>
    <p>DevZep is a technical team of passionate developers. We have a wide range of skills to build entire digital products for Web, 
       Mobile, Blockchian/Distributed Ledger Technology, DevOps Services and Artificial Intelligence (AI) / Machine Learning (ML) systems 
       for FinTech and IoT.
    </p>
  </div>
)

export default Footer

// import React from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

// const FooterPage = () => {
//   return (
//     <MDBFooter color="blue" className="font-small pt-4 mt-4">
//       <MDBContainer fluid className="text-center text-md-left">
//         <MDBRow>
//           <MDBCol md="6">
//             <h5 className="title">Footer Content</h5>
//             <p>
//               Here you can use rows and columns here to organize your footer
//               content.
//             </p>
//           </MDBCol>
//           <MDBCol md="6">
//             <h5 className="title">Home</h5>
//             <ul>
//               <li className="list-unstyled">
//                 <a href="#!">Service</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Contact</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Love</a>
//               </li>
//             </ul>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//       <div className="footer-copyright text-center py-3">
//         <MDBContainer fluid>
//           &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
//         </MDBContainer>
//       </div>
//     </MDBFooter>
//   );
// }

// export default FooterPage;