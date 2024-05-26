
import { useNavigate} from "react-router-dom";

function About({count}) {
    const navigate = useNavigate();
    const pages = ["Home","Contact"]
  return (

    <div className="About">
        <h1>ABOUT PAGE</h1>
        <div className="nav" style={{display:"flex"}}>
             {pages.map(el=><p key={el} style={{marginRight:"10px",cursor:"pointer" }} onClick={()=>navigate(`/${el.toLocaleLowerCase()}`)}>{el}</p>)}
        </div>
        <p>Welcome to About page</p>
        <p>Home page visited {`${count}`} times</p>
    </div>
  );
}

export default About;
