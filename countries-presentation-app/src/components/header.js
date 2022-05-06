import { useNavigate, Link } from 'react-router-dom';
import './../style/components/_header.scss'

const Header = () => {

  const navigate = useNavigate();

  return (
    <div className="headerMain">
        <div className="mainDivHeader">
 
      <h3 onClick={()=>{navigate('/')}}>Where in the world?</h3>
    
        <div className="rightSubmenu">
            <p><span><i className="fa-solid fa-moon"></i></span> Dark  Mode</p>
        </div>
        </div>
    </div>
  )
}

export default Header