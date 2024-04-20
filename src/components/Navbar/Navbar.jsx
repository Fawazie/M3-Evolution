import './Navbar.css'
const Navbar = () => {
    return (
        <div className='nav'>
            <div className='nav-logo'>The M3 Evolution</div>
            <ul className='nav-menu'>
                <li className='home'>Home</li>
                <li className='explore'>Explore</li>
                <li className='about'>About</li>
                <li className='nav-contact'>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar
