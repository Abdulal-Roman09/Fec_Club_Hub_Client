const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-white/70 backdrop-blur-lg border-b border-gray-200 shadow-md">
      <div className="container mx-auto flex items-center justify-between  py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img className="h-12 w-12 object-contain" src="/logo.png" alt="logo" />
          <h1 className="font-header font-extrabold md:text-3xl text-2xl text-primary hover:text-primary-dark transition-colors duration-200 ease-in-out">
            ClubHub
          </h1>
        </div>

        {/* Search + Theme toggle */}
        <div className="flex gap-4 items-center">
          {/* Search Box */}
          <label className="relative flex items-center bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-200 px-3 py-2 min-w-[220px]">
            <input
              id="club_search"
              type="search"
              placeholder="Search for a club"
              className="bg-transparent outline-none text-gray-700 placeholder-gray-500 w-full"
            />
          </label>

          {/* Theme toggle */}
          <label className="swap swap-rotate bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors duration-200 cursor-pointer">
            <input type="checkbox" className="theme-controller" value="synthwave" />

            {/* Sun icon */}
           

            {/* Moon icon */}
           
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
