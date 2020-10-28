import React from 'react'
import Link from 'gatsby-link'

const ContactPage = ({ data }) => (
  <div>
    <h2>Please fill out the form below to request a quote for a project, inquire about a collaboration, or simply say hello.</h2>

    <form>
      <h4>Name *</h4>
        <label>
          First name
          <input type="text" name="firstName" />
        </label><br></br><br></br>
        <label>
          Last name
          <input type="text" name="lastName" />
        </label><br></br><br></br>
        <label>
          Email *
          <input type="text" name="email" />
        </label><br></br><br></br>
        <label>
          Subject *
          <input type="text" name="subject" />
        </label><br></br><br></br>
        <label>
        Tell us about yourself and your ideas! *
          <input type="text" name="ideas" />
        </label><br></br><br></br>
        {/* <button type="submit">Submit</button> */}
      </form>
      <button>Say Hello!</button>
    <h3>Careers</h3>
    <h2>jobs@devzep.com</h2>
    <h3>New Business</h3>
    <h2>hello@devzep.com</h2>
  </div>
)


// export default class ContactPage extends React.Component {
//   state = {
//     firstName: "",
//     lastName: "",
//   }
//   render() {
//     return (
//       <form>
//         <label>
//           First name
//           <input type="text" name="firstName" />
//         </label>
//         <label>
//           Last name
//           <input type="text" name="lastName" />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     )
//   }
// }

export default ContactPage
