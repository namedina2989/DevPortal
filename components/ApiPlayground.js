"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiPlayground = void 0;
var react_1 = require("react");
var Icons_1 = require("./Icons");
var mockApiResponse = {
    ok: {
        status: 200,
        statusText: 'OK',
        time: 89,
        contentType: 'application/json',
        contentLength: '208 bytes',
        body: "{\n  \"id\": \"pay_9876543210\",\n  \"status\": \"pending\",\n  \"amount\": 1500,\n  \"currency\": \"PHP\",\n  \"from_account\": \"acc_1234567890\",\n  \"to_account\": \"acc_0987654321\",\n  \"description\": \"Payment for services\",\n  \"created_at\": \"2025-01-15T10:30:00Z\"\n}"
    }
};
var defaultRequestBody = "{\n  \"from_account\": \"acc_1234567890\",\n  \"to_account\": \"acc_0987654321\",\n  \"amount\": 1500.00,\n  \"currency\": \"PHP\",\n  \"description\": \"Payment for services\"\n}";
var Dropdown = function (_a) {
    var label = _a.label, options = _a.options, selected = _a.selected, onSelect = _a.onSelect;
    return (<div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
            <div className="relative">
                <select value={selected} onChange={function (e) { return onSelect(e.target.value); }} className="w-full appearance-none bg-gray-100 border border-gray-200 text-gray-800 py-3 px-4 pr-8 rounded-lg focus:outline-none focus:bg-white focus:border-gray-500">
                    {options.map(function (option) { return <option key={option} value={option}>{option}</option>; })}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <Icons_1.ChevronDownIcon />
                </div>
            </div>
        </div>);
};
var ResponseInfo = function (_a) {
    var responseData = _a.responseData;
    return (<div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Response Info</h3>
        {responseData ? (<div className="space-y-3 text-sm">
                <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="font-medium text-green-600">{responseData.status} {responseData.statusText}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Response Time:</span>
                    <span className="font-medium text-gray-800">{responseData.time}ms</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Content-Type:</span>
                    <span className="font-medium text-gray-800">{responseData.contentType}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Content-Length:</span>
                    <span className="font-medium text-gray-800">{responseData.contentLength}</span>
                </div>
            </div>) : (<p className="text-sm text-gray-500">Execute a request to see response info.</p>)}
    </div>);
};
var ApiPlayground = function () {
    var _a = (0, react_1.useState)('Payment APIs'), apiCategory = _a[0], setApiCategory = _a[1];
    var _b = (0, react_1.useState)('POST /api/v1/payments'), endpoint = _b[0], setEndpoint = _b[1];
    var _c = (0, react_1.useState)(defaultRequestBody), requestBody = _c[0], setRequestBody = _c[1];
    var _d = (0, react_1.useState)(null), responseData = _d[0], setResponseData = _d[1];
    var _e = (0, react_1.useState)(false), isLoading = _e[0], setIsLoading = _e[1];
    var _f = (0, react_1.useState)(''), copySuccess = _f[0], setCopySuccess = _f[1];
    (0, react_1.useEffect)(function () {
        // Reset response when endpoint changes
        setResponseData(null);
    }, [apiCategory, endpoint]);
    var handleExecute = function () {
        setIsLoading(true);
        setResponseData(null);
        setTimeout(function () {
            setResponseData(mockApiResponse.ok);
            setIsLoading(false);
        }, 1200);
    };
    var copyToClipboard = function () {
        if (responseData === null || responseData === void 0 ? void 0 : responseData.body) {
            navigator.clipboard.writeText(responseData.body).then(function () {
                setCopySuccess('Copied!');
                setTimeout(function () { return setCopySuccess(''); }, 2000);
            }, function () {
                setCopySuccess('Failed to copy');
                setTimeout(function () { return setCopySuccess(''); }, 2000);
            });
        }
    };
    return (<div className="bg-gray-50 py-12 rounded-b-lg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900">API Playground</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Test BPI APIs with real mock responses. Experiment with different endpoints and see how they work.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* API Request Panel */}
                    <div className="bg-white p-8 rounded-lg border border-gray-200 space-y-6">
                        <h2 className="text-2xl font-semibold text-gray-900">API Request</h2>
                        <Dropdown label="API Category" options={['Payment APIs', 'Account APIs', 'Transfer APIs']} selected={apiCategory} onSelect={setApiCategory}/>
                        <Dropdown label="Endpoint" options={['POST /api/v1/payments', 'GET /api/v1/accounts', 'POST /api/v1/transfers']} selected={endpoint} onSelect={setEndpoint}/>
                        <div className="bg-gray-50 p-3 rounded-lg flex items-center space-x-3">
                            <span className="text-xs font-bold bg-red-100 text-bpi-red px-2 py-1 rounded">POST</span>
                            <span className="text-sm font-mono text-gray-700">https://api.bpi.com.ph/v1/api/v1/payments</span>
                        </div>
                        <div>
                            <label htmlFor="request-body" className="block text-sm font-medium text-gray-700 mb-2">Request Body</label>
                            <textarea id="request-body" rows={10} value={requestBody} onChange={function (e) { return setRequestBody(e.target.value); }} className="w-full font-mono text-sm bg-gray-100 border border-gray-200 rounded-lg p-4 focus:outline-none focus:bg-white focus:border-gray-500"/>
                        </div>
                         <button onClick={handleExecute} disabled={isLoading} className="w-full bg-bpi-red text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center space-x-2 disabled:bg-gray-400">
                            {isLoading ? (<>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Executing...</span>
                                </>) : (<>
                                    <Icons_1.PlayTriangleIcon className="w-5 h-5"/>
                                    <span>Execute Request</span>
                                </>)}
                        </button>
                    </div>

                    {/* API Response Panel */}
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-lg border border-gray-200">
                             <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold text-gray-900">API Response</h3>
                                {responseData && (<div className="flex items-center space-x-3">
                                        <span className={"text-xs font-medium transition-opacity ".concat(copySuccess ? 'opacity-100' : 'opacity-0')}>{copySuccess}</span>
                                        <button onClick={copyToClipboard} className="text-gray-500 hover:text-gray-800" aria-label="Copy response">
                                            <Icons_1.ClipboardDocumentIcon className="w-5 h-5"/>
                                        </button>
                                        <button className="text-gray-500 hover:text-gray-800" aria-label="Download response">
                                            <Icons_1.ArrowDownTrayIcon className="w-5 h-5"/>
                                        </button>
                                    </div>)}
                             </div>
                            
                            {responseData && (<div className="flex items-center space-x-2 mb-4">
                                    <span className="text-sm font-bold bg-green-100 text-green-800 px-3 py-1 rounded-full">{responseData.status} {responseData.statusText}</span>
                                    <span className="text-sm text-gray-500">Response time: {responseData.time}ms</span>
                                </div>)}

                            <div className="bg-[#0d1117] rounded-lg p-4 font-mono text-sm text-white overflow-x-auto">
                                <pre><code>{responseData ? responseData.body : (isLoading ? 'Loading...' : 'Response will appear here...')}</code></pre>
                            </div>
                        </div>
                        <ResponseInfo responseData={responseData}/>
                    </div>
                </div>
            </div>
        </div>);
};
exports.ApiPlayground = ApiPlayground;
