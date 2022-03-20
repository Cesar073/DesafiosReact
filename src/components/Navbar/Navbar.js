import './Navbar.css';
function NavBar(){
    return <>
        <nav className='nav'>
            <h1 className='titleNav'>CompumundoHiperMegared</h1>
            <div>
            <button className='btnNav'>Products</button>
            <button className='btnNav'>Cart</button>
            <button className='btnNav'>Login</button>
            </div>
        </nav>
    </>
}
export default NavBar;