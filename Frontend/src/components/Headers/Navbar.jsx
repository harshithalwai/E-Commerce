import { TopNavbar, MidNavbar, BotNavbar } from "../index.js";

const Navbar = () => {
  return (
    <>
      <div className="bg-white relative">
        <TopNavbar />
        <div className="sticky top-0 z-40 backdrop-blur-sm">
          <MidNavbar />
        </div>
        <BotNavbar />
      </div>
    </>
  );
};

export default Navbar;
