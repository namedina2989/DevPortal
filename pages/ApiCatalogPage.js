"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiCatalogPage = void 0;
var react_1 = require("react");
var constants_1 = require("../constants");
var ApiCard_1 = require("../components/ApiCard");
var Icons_1 = require("../components/Icons");
var UseCaseModal_1 = require("../components/UseCaseModal");
var PageBanner = function () { return (<div className="relative py-24 bg-gray-100">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://picsum.photos/seed/apicatalog/1920/400')" }}></div>
        <div className="relative container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold text-gray-900">API Catalog</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Explore all our APIs or search for the ones that meet your specific needs. Learn more.
            </p>
        </div>
    </div>); };
var ApiClassificationTabs = function (_a) {
    var activeCategory = _a.activeCategory, onSelectCategory = _a.onSelectCategory;
    return (<div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {constants_1.API_CATEGORIES.map(function (category) { return (<button key={category} onClick={function () { return onSelectCategory(category); }} className={"whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ".concat(activeCategory === category
                ? 'border-bpi-red text-bpi-red'
                : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300')}>
                    {category}
                </button>); })}
        </nav>
    </div>);
};
var ApiCatalogPage = function (_a) {
    var setCurrentPage = _a.setCurrentPage;
    var _b = (0, react_1.useState)('All'), activeCategory = _b[0], setActiveCategory = _b[1];
    var _c = (0, react_1.useState)(''), searchQuery = _c[0], setSearchQuery = _c[1];
    var _d = (0, react_1.useState)('grid'), displayMode = _d[0], setDisplayMode = _d[1];
    var _e = (0, react_1.useState)(null), activeUseCase = _e[0], setActiveUseCase = _e[1];
    var filteredApis = (0, react_1.useMemo)(function () {
        return constants_1.APIS.filter(function (api) {
            var matchesCategory = activeCategory === 'All' || api.category === activeCategory;
            var matchesSearch = api.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                api.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);
    var handleLearnMore = function (api) {
        if (api.id === '1') {
            setActiveUseCase('bills-payment');
        }
        else if (api.id === '3') {
            setActiveUseCase('fund-transfer');
        }
        else if (api.pageLink) {
            setCurrentPage(api.pageLink);
        }
    };
    return (<main className="bg-white">
            <PageBanner />
            <div className="container mx-auto px-6 py-12">
                <ApiClassificationTabs activeCategory={activeCategory} onSelectCategory={setActiveCategory}/>

                <div className="flex justify-between items-center my-8">
                    <p className="text-gray-500 text-sm">Showing {filteredApis.length} results out of {constants_1.APIS.length} items</p>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <input type="text" placeholder="Search" value={searchQuery} onChange={function (e) { return setSearchQuery(e.target.value); }} className="bg-white border border-gray-300 rounded-md py-2 pl-10 pr-4 text-gray-900 placeholder-gray-500 focus:ring-bpi-red focus:border-bpi-red"/>
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Icons_1.SearchIcon className="w-5 h-5 text-gray-400"/>
                            </div>
                        </div>
                        <div className="flex items-center bg-white border border-gray-300 rounded-md">
                            <button onClick={function () { return setDisplayMode('grid'); }} className={"p-2 rounded-l-md ".concat(displayMode === 'grid' ? 'bg-gray-200 text-gray-800' : 'text-gray-500 hover:bg-gray-100')}>
                                <Icons_1.GridIcon className="w-5 h-5"/>
                            </button>
                             <button onClick={function () { return setDisplayMode('list'); }} className={"p-2 rounded-r-md ".concat(displayMode === 'list' ? 'bg-gray-200 text-gray-800' : 'text-gray-500 hover:bg-gray-100')}>
                                <Icons_1.ListIcon className="w-5 h-5"/>
                            </button>
                        </div>
                    </div>
                </div>

                {displayMode === 'grid' ? (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredApis.map(function (api) { return (<ApiCard_1.ApiCard key={api.id} api={api} setCurrentPage={function (_page) { return handleLearnMore(api); }}/>); })}
                    </div>) : (<div className="space-y-4">
                        {/* List view can be implemented here, for now using grid card */}
                         {filteredApis.map(function (api) { return (<ApiCard_1.ApiCard key={api.id} api={api} setCurrentPage={function (_page) { return handleLearnMore(api); }}/>); })}
                    </div>)}

                {filteredApis.length === 0 && (<div className="text-center py-16">
                        <h3 className="text-2xl font-bold">No APIs Found</h3>
                        <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria.</p>
                    </div>)}
            </div>
            <UseCaseModal_1.UseCaseModal isOpen={activeUseCase !== null} onClose={function () { return setActiveUseCase(null); }} useCase={activeUseCase}/>
        </main>);
};
exports.ApiCatalogPage = ApiCatalogPage;
