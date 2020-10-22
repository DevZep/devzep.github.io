import React, { useImperativeHandle, useRef } from "react"

import { Link } from "gatsby"

{/* <link rel="shortcut icon" type="image/x-icon" href="https://images.squarespace-cdn.com/content/v1/5e8d5cf82d0d814ac22025e5/1586323343824-HOFKTSVBILTL3VK4CO7I/ke17ZwdGBToddI8pDm48kOzkioyX4ZTGoTFKjBcljv5Zw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7a3IG1vtna7BEUjBtarIuouoqEZUYS5_i5Qdg3itgBFIdk4wN1-qYwswegTI_5v9Rg/favicon.ico?format=100w"/> */}
class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  render() {
    return (
      <div
        role="button"
        tabIndex="0"
        // className={`${styles.menu} ${this.state.open ? `${styles.open}` : ""}`}
        onClick={() => this.close()}
        onKeyDown={() => this.close()}
      >
        <Link to="/"><h1>Home</h1></Link>
        <Link to="/portfolio"><h1>Portfolio</h1></Link>
        <Link to="/service"><h1>Services</h1></Link>
        <Link to="/contact"><h1>Contact</h1></Link>
        <h1>DevZep is a collective of the best developers and technology specialists from around the globe.</h1>
        <h1>We’d love to work with you.</h1>
        <h1>Where we make it happen (mostly)</h1>
        <p>
        DevZep Villa</p>

        <p>Villa # 2C,</p>
        <p>Street 490,
        Sangkat Phsar Deum Thkov,
        Khan Cham Kamorn,
        Phnom Penh.
        12307,
        Cambodia

        Phone
        (+855) 99 999 426
        (+855) 85 390 565
                </p>
       
      </div>
      
    )
  }
  

  close() {
    this.setState({ open: false })
  }

  open() {
    this.setState({ open: true })
  }
}

export default React.forwardRef((props, ref) => {
  const menuRef = useRef()

  useImperativeHandle(ref, () => ({
    open() {
      menuRef.current.open()
    },
  }))

  return <Menu ref={menuRef} {...props} />
})

