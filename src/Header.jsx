const Header = ({user})=>{
    return(
        <header>
            <nav className="headNav">
            <img className="logo" src="./logoexo.avif" alt="icone" width="180px"/>
                <ul className="headList">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Comment</a></li>
                    <li><a href="#">Contact</a></li>
                    {user.isLogged?(
                        <li>Voir mon Profil</li>
                    ):(
                        <li>Créer un compte</li>
                    )}
                </ul>
            </nav>           
        </header>
    )
}
export default Header;