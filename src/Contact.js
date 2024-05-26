
import { useNavigate} from "react-router-dom";

function Contact({count}) {
    const navigate = useNavigate();
    const pages = ["Home","About"]
  return (

    <div className="Contact">
        <h1>CONTACT PAGE</h1>
        <div className="nav" style={{display:"flex"}}>
             {pages.map(el=><p key={el} style={{marginRight:"10px",cursor:"pointer" }} onClick={()=>navigate(`/${el.toLocaleLowerCase()}`)}>{el}</p>)}
        </div>
        <p>Welcome to Contact page</p>
        <p>Home page visited {`${count}`} times</p>
    </div>
  );
}

export default Contact;
