import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <>
        <nav style={{display: 'flex', alignItems: 'center'}}>
        <img src="src/assets/Images/IronNanny_logo_2.png" alt="IronNanny logo" className="ironnannyLogo"/>
            <div>
                <Link to='/'>
                    <button>HomePage</button>
                </Link>
                <Link to='/babysitters'>
                    <button>Find a nanny</button>
                </Link>
                <Link to='/babysitters/new'>
                    <button>Register</button>
                </Link>

                <Link to='/aboutus'>
                <button>About us</button>
                </Link>
            </div>
        </nav>
        
        </>
    )
}

export default Navbar