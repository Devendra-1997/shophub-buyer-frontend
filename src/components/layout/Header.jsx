import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setUser } from "../../redux/slice/UserSlice";

const navigation = [
  { name: "Categories", to: "/categories", current: false },
  { name: "About Us", to: "/about", current: false },
  { name: "Contact Us", to: "/contact", current: false },
  { name: "Home", to: "/", current: true },
];

const customClassNames = (...classes) => classes.filter(Boolean).join(" ");

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleOnLogout = () => {
    dispatch(setUser({}));
  };

  const itemCount = 5; // Example item count

  return (
    <Disclosure as="nav" className="bg-purple-800 dark:bg-gray-800">
      <div className="mx-auto max-w-[1440px] px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between min-h-[100px]">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700">
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link
              to="/"
              className="flex items-center text-white font-semibold text-xl"
            >
              LuxeDrive
            </Link>
            <div className="hidden sm:block sm:flex-1 sm:justify-center">
              <div className="flex space-x-4 justify-center">
                {navigation.map((item) => {
                  const isCurrent = location.pathname === item.to;
                  return (
                    <Link key={item.name} to={item.to}>
                      <DisclosureButton
                        aria-current={isCurrent ? "page" : undefined}
                        className={customClassNames(
                          isCurrent
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block rounded-md px-3 py-2 text-base font-medium"
                        )}
                      >
                        {item.name}
                      </DisclosureButton>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 gap-1 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white"
            >
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white"
            >
              <ShoppingCartIcon aria-hidden="true" className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 text-xs font-bold text-white bg-red-600 border-2 border-white rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            {user ? (
              <Menu as="div" className="relative">
                <MenuButton className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white">
                  <UserCircleIcon aria-hidden="true" className="h-6 w-6" />
                </MenuButton>
                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                  <MenuItem>
                    {({ active }) => (
                      <button
                        onClick={handleOnLogout}
                        className={`${
                          active ? "bg-gray-100" : ""
                        } block w-full px-4 py-2 text-sm text-gray-700`}
                      >
                        Logout
                      </button>
                    )}
                  </MenuItem>
                </MenuItems>
              </Menu>
            ) : (
              <Link to="/login">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white"
                >
                  <UserCircleIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Link key={item.name} to={item.to}>
              <DisclosureButton
                aria-current={
                  location.pathname === item.to ? "page" : undefined
                }
                className={customClassNames(
                  location.pathname === item.to
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Header;
