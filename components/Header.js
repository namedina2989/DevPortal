"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var react_1 = require("react");
var constants_1 = require("../constants");
var Icons_1 = require("./Icons");
var BpiLogo = function () { return (<div className="flex items-center space-x-2">
   
    
    <a href="https://www.bpi.com.ph/" className="font-medium hover:underline ml-1">
         <img src="../bpi.jpg" alt="BPI Logo" className="font-medium hover:underline ml-1" width="40" height="40" border-radius="50px"/>
     </a>
    
  </div>); };
var UserMenu = function (_a) {
    var onSignOut = _a.onSignOut, setCurrentPage = _a.setCurrentPage;
    var _b = (0, react_1.useState)(false), isOpen = _b[0], setIsOpen = _b[1];
    var handleNavigation = function (page) {
        if (page) {
            setCurrentPage(page);
        }
        setIsOpen(false);
    };
    return (<div className="relative">
            <button onClick={function () { return setIsOpen(!isOpen); }} className="flex items-center space-x-2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <span className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center font-bold text-white">U</span>
                <Icons_1.ChevronDownIcon className="text-gray-600"/>
            </button>
            {isOpen && (<div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    {constants_1.LOGGED_IN_MENU.map(function (item) { return (<a key={item.name} href={item.href} onClick={function (e) {
                    e.preventDefault();
                    handleNavigation(item.href);
                }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            {item.name}
                        </a>); })}
                    <div className="border-t border-gray-200 my-1"></div>
                    <button onClick={onSignOut} className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Sign Out
                    </button>
                </div>)}
        </div>);
};
var Header = function (_a) {
    var isLoggedIn = _a.isLoggedIn, onSignOut = _a.onSignOut, setCurrentPage = _a.setCurrentPage, currentPage = _a.currentPage;
    return (<header className="bg-white/80 backdrop-blur-sm sticky top-0 z-40 border-b border-gray-200">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <BpiLogo />
            <nav className="hidden md:flex items-center space-x-8">
              {constants_1.NAV_LINKS.map(function (link) { return (<a key={link.name} href="#" onClick={function (e) { e.preventDefault(); setCurrentPage(link.href); }} className={"text-sm font-medium transition-colors ".concat(currentPage === link.href ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900')}>
                  {link.name}
                  {currentPage === link.href && <div className="h-0.5 w-full bg-bpi-red mt-1 rounded-full"></div>}
                </a>); })}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-900 transition-colors">
              <Icons_1.SearchIcon className="w-5 h-5"/>
            </button>
            {isLoggedIn ? (<UserMenu onSignOut={onSignOut} setCurrentPage={setCurrentPage}/>) : (<button onClick={function () { return setCurrentPage('register'); }} className="bg-bpi-red text-sm font-medium px-5 py-2 rounded-md hover:bg-opacity-80 transition-colors text-white">
                Register
              </button>)}
          </div>
        </div>
      </div>
    </header>);
};
exports.Header = Header;
