import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import { logo } from "../assets";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img scr={logo} alt="logo" />
      </Link>

      <Link
        to="/create-post"
        className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
      >
        <CiCirclePlus /> Create
      </Link>
    </header>
  );
};

export default Header;
