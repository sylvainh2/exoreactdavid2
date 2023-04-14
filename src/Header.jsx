const Header = ()=>{
    return(
        <header>
            <nav className="headNav">
            <img className="logo" src="./logoexo.avif" alt="icone" width="180px"/>
                <ul className="headList">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Comment</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>           
        </header>
    )
}
export default Header;