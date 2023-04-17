
import Header from './Header.jsx';
import Article from './Article.jsx';
import Footer from './Footer.jsx';
import Faq from './Faq.jsx';
import Profil from './Profil.jsx';

function App() {
  const user = {
    name: "John",
    surname: "Doe",
    age: 32,
    city: "Paris",
    isLogged: true,
  };
  console.log(user);
  return (
    <>
      <Header user={user}/>
      <Article />
      <Faq />
      <Profil user={user}/>
      <Footer />
    </>

  );
}

export default App;
