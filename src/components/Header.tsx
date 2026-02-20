import { ShoppingBag, UserCircle } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between py-10">
      <div>
        <img src="/redbuffalo.svg" />
      </div>
      <div className="flex text-white gap-5">
        <ShoppingBag />
        <UserCircle />
      </div>
    </div>
  );
};

export default Header;
