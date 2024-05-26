import {useNavigate,useLocation} from "react-router-dom";
import { useEffect } from "react";

 let hasIncremented = false;
function Home({setCount}) {
    const navigate = useNavigate();
    const pages = ["Contact","About"];
   
    useEffect(() => {
         setCount(prevCount => prevCount + 1);
    
    }, []);

  return (  
    <div className="Home">
        <h1>HOME PAGE</h1>
        <div className="nav" style={{display:"flex"}}>
             {pages.map(el=><p key={el} style={{marginRight:"10px",cursor:"pointer" }} onClick={()=>navigate(`/${el.toLocaleLowerCase()}`)}>{el}</p>)}
        </div>
        <p>Banner: B00934148</p>
       
       
    </div>
  );
}

export default Home;
