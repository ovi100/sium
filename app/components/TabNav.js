const TabNav = ({ navItems, active, setActive }) => {
  return (
    <>
      <div className="tabs-nav flex items-center md:justify-end justify-center gap-3">
        {navItems.map((item) => (
          <div
            className={`text-sm text-[#f5f5f5] text-center capitalize cursor-pointer transition-opacity ease-linear duration-300 ${
              active === item ? "opacity-100" : "opacity-50"
            }`}
            id={item}
            key={item}
            onClick={() => setActive(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default TabNav;
