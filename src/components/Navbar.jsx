import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <>
        <nav style={{display: 'flex', alignItems: 'center'}} className="navBar">
        <div>
          <img src="src/assets/Images/IronNanny_logo_3.png" alt="IronNanny logo" className="logo"/>
                <Link to='/'>
                    <button className="btnNav">Home</button>
                </Link>
                <Link to='/babysitters'>
                    <button className="btnNav">Find a Nanny</button>
                </Link>
                <Link to='/babysitters/new'>
                    <button className="btnNav">Register</button>
                </Link>

                <Link to='/aboutus'>
                <button className="btnNav">About Us</button>
                </Link>
        </div>
        </nav>
        
        </>
    )
}

export default Navbar