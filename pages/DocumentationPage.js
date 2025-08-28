"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentationPage = void 0;
var react_1 = require("react");
var constants_1 = require("../constants");
var Icons_1 = require("../components/Icons");
var DocumentationPage = function (_a) {
    var setCurrentPage = _a.setCurrentPage;
    var _b = (0, react_1.useState)(0), currentIndex = _b[0], setCurrentIndex = _b[1];
    var goToNext = function () {
        setCurrentIndex(function (prevIndex) { return (prevIndex + 1) % constants_1.APIS.length; });
    };
    var goToPrevious = function () {
        setCurrentIndex(function (prevIndex) { return (prevIndex - 1 + constants_1.APIS.length) % constants_1.APIS.length; });
    };
    var getApiForOffset = function (offset) {
        var index = (currentIndex + offset + constants_1.APIS.length) % constants_1.APIS.length;
        return constants_1.APIS[index];
    };
    return (<main className="bg-white text-bpi-dark-blue py-20 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        {/* Top Section */}
        <div className="flex flex-col items-center">
          <Icons_1.EndpointsIcon className="w-20 h-20 text-bpi-red"/>
          <h1 className="text-4xl font-bold mt-4">Endpoints</h1>
          <p className="mt-2 text-gray-600 max-w-2xl">
            Learn how to use your access credentials to create an application and call APIs with Postman.
          </p>
          <div className="flex justify-center space-x-2 mt-6">
            {constants_1.APIS.map(function (_, index) { return (<button key={index} onClick={function () { return setCurrentIndex(index); }} className={"w-2.5 h-2.5 rounded-full transition-colors ".concat(currentIndex === index ? 'bg-bpi-red' : 'bg-gray-300 hover:bg-gray-400')} aria-label={"Go to API ".concat(index + 1)}/>); })}
          </div>
        </div>

        {/* Carousel Section */}
        <div className="mt-12 relative h-[400px] flex items-center justify-center">
          {/* Previous Button */}
          <button onClick={goToPrevious} className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-gray-100 transition-all" aria-label="Previous slide">
            <Icons_1.ChevronLeftIcon className="w-8 h-8 text-gray-700"/>
          </button>
          
          {/* Carousel Items */}
          <div className="relative w-full h-full">
            {[-2, -1, 0, 1, 2].map(function (offset) {
            var api = getApiForOffset(offset);
            var isActive = offset === 0;
            var isSide = Math.abs(offset) === 1;
            var isDistant = Math.abs(offset) === 2;
            var transform = '';
            var zIndex = 0;
            var opacity = 0;
            if (isActive) {
                transform = 'translateX(0) scale(1)';
                zIndex = 20;
                opacity = 1;
            }
            else if (isSide) {
                transform = "translateX(".concat(offset * 45, "%) scale(0.8)");
                zIndex = 10;
                opacity = 0.4;
            }
            else if (isDistant) {
                transform = "translateX(".concat(offset * 70, "%) scale(0.65)");
                zIndex = 5;
                opacity = 0.1;
            }
            var cardStyle = {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: "translate(-50%, -50%) ".concat(transform),
                zIndex: zIndex,
                opacity: opacity,
                transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
            };
            return (<div key={api.id} style={cardStyle} className={"w-72 h-80 rounded-3xl transition-shadow duration-500 ".concat(isActive ? 'shadow-2xl' : 'shadow-lg')}>
                  <div className={"w-full h-full rounded-3xl flex flex-col items-center justify-between p-6 transition-colors duration-500 ".concat(isActive ? 'bg-bpi-red' : 'bg-gray-100')}>
                    <div className="flex-grow flex flex-col items-center justify-center text-center">
                      {react_1.default.cloneElement(api.icon, { className: "w-16 h-16 transition-colors duration-500 ".concat(isActive ? 'text-white' : 'text-bpi-red') })}
                      <h3 className={"font-bold text-xl mt-4 ".concat(isActive ? 'text-white' : 'text-bpi-dark-blue')}>
                        {api.name}
                      </h3>
                    </div>
                    {isActive && (<button onClick={function () { return api.pageLink && setCurrentPage(api.pageLink); }} className="w-full mt-4 bg-white text-bpi-red font-semibold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled={!api.pageLink}>
                         <span>LEARN MORE</span>
                         <Icons_1.ArrowRightIcon className="w-5 h-5"/>
                       </button>)}
                  </div>
                </div>);
        })}
          </div>

          {/* Next Button */}
          <button onClick={goToNext} className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-gray-100 transition-all" aria-label="Next slide">
            <Icons_1.ChevronRightIcon className="w-8 h-8 text-gray-700"/>
          </button>
        </div>
      </div>
    </main>);
};
exports.DocumentationPage = DocumentationPage;
