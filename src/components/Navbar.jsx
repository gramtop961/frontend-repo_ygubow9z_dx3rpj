import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition ${
      isActive ? 'text-white bg-[#057834]' : 'text-[#057834] hover:bg-[#E6F4EA]'
    }`;

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-[#057834]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <NavLink to="/" className="font-extrabold text-lg text-[#057834]">
          TrueMinds Innovations
        </NavLink>
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
          <NavLink to="/services" className={linkClass}>
            Services
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/community" className={linkClass}>
            Community
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>
        <NavLink to="/get-started" className="inline-flex items-center bg-[#057834] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#046a2f]">
          Get Started
        </NavLink>
      </div>
    </header>
  );
}
