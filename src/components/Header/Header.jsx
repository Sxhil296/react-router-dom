import { Link, useParams } from "react-router-dom";

const Header = () => {
  const {userId} = useParams()
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center">
        {/* Logo */}
        <img src="path/to/logo.png" alt="Logo" className="h-8 mr-4" />

        {/* Header Title */}
        <h1 className="text-white text-lg font-semibold">Your Website</h1>
      </div>

      <div className="flex items-center space-x-4">
        <Link to="/" className="text-white hover:text-gray-300">
          Home
        </Link>
        <Link to="/about" className="text-white hover:text-gray-300">
          About
        </Link>
        <Link to="/contact" className="text-white hover:text-gray-300">
          Contact
        </Link>
        <Link to={`/user/${userId}`} className="text-white hover:text-gray-300">
          User
        </Link>
      </div>
    </nav>
  );
};

export default Header;
