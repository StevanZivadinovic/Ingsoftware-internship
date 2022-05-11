import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './../style/components/_header.scss'

const Header = ({getTheme}) => {

  const navigate = useNavigate();
  const [theme, setTheme] = useState(true);

  useEffect(() => {
  
    if(theme){
      getTheme('light')
    }
    else{
      getTheme('dark');
    }
  }, [theme])

  
  

  return (
    <div className={`headerMain ${theme ? 'light':'dark'}`}>
        <div className="mainDivHeader">
 
      <h3 onClick={()=>{navigate('/')}}>Where in the world?</h3>
    
        <div className="rightSubmenu" onClick={()=>setTheme(!theme)}>
            <p><span><i className="fa-solid fa-moon"></i></span> Dark  Mode</p>
        </div>
        </div>
    </div>
  )
}

export default Header