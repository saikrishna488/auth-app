import { Link } from "react-router-dom";

const Nav = ({info}) => {
    const onClick = ()=>{
      sessionStorage.removeItem('username')
      sessionStorage.removeItem('password')
    }
  return (
    <div className="nav">
        <ul>
            <li>{info.username}</li>
            <Link to={'/'} style={{ textDecoration: 'none' }} > <li onClick={onClick}>Logout</li> </Link>
        </ul>
    </div>
  )
}

export default Nav
