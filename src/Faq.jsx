import {useState} from 'react';
 
const Faq = ()=>{
    const [isShown, setIsShown] = useState(false);

    const questionClic = ()=>{
        setIsShown(!isShown);
    }
    return(
        <div className="faqContain">
            <p onClick={questionClic}>Quelle est la couleur des oranges??</p>
            {isShown &&
            <p>He oui elles sont <span>ORANGES</span></p>
            }
        </div>
    )
}

export default Faq;