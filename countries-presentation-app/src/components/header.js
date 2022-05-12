import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../style/components/_header.scss'

const Header = ({getTheme}) => {

  const navigate = useNavigate();
  
  const [theme, setTheme] = useState(false);

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
            <p>{theme ? <span><i className="fa-solid fa-moon"></i> Dark  Mode</span> : <span><i className="fa-solid fa-sun"></i> Light  Mode</span>}</p>
        </div>
        </div>
    </div>
  )
}

export default Header