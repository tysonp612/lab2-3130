import {useNavigate,useLocation} from "react-router-dom";
import { useEffect } from "react";

 let hasIncremented = false;
function Home({count, setCount}) {
    const navigate = useNavigate();
    const pages = ["Contact","About"];
   
    useEffect(() => {
       if (!hasIncremented) {
           setCount(prevCount => prevCount + 1);
            hasIncremented = true;
        }else{
           hasIncremented = false;
        }
      
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
