import './Navbar.css'
const Navbar = () => {
    return (
        <div className='nav'>
            <div className='nav-logo'>The M3 Evolution</div>
            <ul className='nav-menu'>
                <li className='home background1'>Home</li>
                <li className='explore background2'>Explore</li>
                <li className='about background3'>About</li>

            </ul>
        </div>
    )
}

export default Navbar
