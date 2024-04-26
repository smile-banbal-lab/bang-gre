function Header() {

	return (
        <div id="Header">
            <img className="main-logo-img" src={process.env.PUBLIC_URL + '/images/bang-gre-logo.png'} alt="Main Front Text" />
        </div>
    );
}

export default Header;