function FooterMenu(props) {
    //console.log('>> FOOTER MENU PROPS', props)
  
    if ( props.loading === true) {
      return (
        <div className="col-6 col-md">
          <img src="images/loading.gif" />
        </div>
      )
    }
  
    const footerMenu = props.menu.map((item, index, arr) => {
      /*
      item = {
        title: "test",
        link: "#/about"
      }
      */
  
      return (
        <li className="mb-1" key={index}>
          <a className="link-secondary text-decoration-none" href={item.link}>
            {item.title}
          </a>
        </li>
      )
    })
  
    return (
      <div className="col-6 col-md">
        <h5>
          {props.title}
        </h5>
        <ul className="list-unstyled text-small">
          {footerMenu}
        </ul>
      </div>
    )
  }
  
  export default FooterMenu