function Header() {
    return (
        <header className="p-2" style={{ backgroundColor: "#FFBD38"}}>
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 text-secondary">Inicio</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">Quienes Somos</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">Blog</a></li>
                        <li><a href="#" className="nav-link px-2 text-white">Contacto</a></li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                        <input type="search" className="form-control form-control-dark" placeholder="Buscar..." aria-label="Search" />
                    </form>

                    <div className="text-end">
                        <button type="button" className="btn btn-primary me-2">Acceso</button>
                        <button type="button" className="btn btn-success">Sign-up</button>
                    </div>
                </div>
            </div>
            

        </header>
    );
}

export default Header;