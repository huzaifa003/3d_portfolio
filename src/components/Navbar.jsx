import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-1g bg-white items-center justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text"> Moby </p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to ="/about" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                About
            </NavLink>
            <NavLink to ="/projects" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Projects
            </NavLink>
            <a href="/src/assets/Mobeen Resume.pdf" download className="text-black hover:text-blue-500">
  My Resume
</a>
        </nav>
    </header>
  )
}

export default Navbar