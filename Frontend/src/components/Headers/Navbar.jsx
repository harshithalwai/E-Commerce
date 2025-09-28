import { TopNavbar, MidNavbar, BotNavbar } from "../index.js";

const Navbar = () => {
  return (
    <>
      <div className="bg-white">
        <TopNavbar />
        <div className="sticky top-0 left-0 z-50 bg-white shadow-sm">
          <MidNavbar />
        </div>
        <BotNavbar />
      </div>
    </>
  );
};

export default Navbar;