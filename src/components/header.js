import BootstrapLogo from "../svg/bootstrap.svg";

function Header() {
  return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center text-dark text-decoration-none"
        >
          <img src={BootstrapLogo} />
          &nbsp;
          <span className="fs-4">Hizmet Bulma Uygulaması</span>
        </a>

        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <a href="#/login" className="btn btn-primary me-2">
            Login
          </a>
          <a href="#/register" className="btn btn-primary me-2">
            Register
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
