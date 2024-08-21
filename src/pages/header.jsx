import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link to="/">
          <img src="/logo.png" className="h-20" />
        </Link>
        <Button variant="outline">Login</Button>
      </nav>
    </>
  );
};

export default Header;
