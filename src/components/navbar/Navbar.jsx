import Links from "./Links";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="font-bold">Logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
