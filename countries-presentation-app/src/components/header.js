import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './../style/components/_header.scss'

const Header = ({getTheme}) => {

  const navigate = useNavigate();
  const [theme, setTheme] = useState(true);


  const handleTheme=(theme) =>{
    setTheme(!theme);
    if(theme){
      getTheme('light')
    }
    else{
      getTheme('dark');
    }
  }

  return (
    <div className="headerMain">
        <div className="mainDivHeader">
 
      <h3 onClick={()=>{navigate('/')}}>Where in the world?</h3>
    
        <div className="rightSubmenu" onClick={()=>handleTheme(theme)}>
            <p><span><i className="fa-solid fa-moon"></i></span> Dark  Mode</p>
        </div>
        </div>
    </div>
  )
}

export default Header