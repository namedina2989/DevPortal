"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundTransferPage = void 0;
var react_1 = require("react");
var Icons_1 = require("../components/Icons");
var ApiPlayground_1 = require("../components/ApiPlayground");
var endpointsData = {
    getTransactionalAccounts: {
        label: 'GET /transactionalAccounts',
        jsonSample: "// This endpoint does not have a JSON request body.",
        curlSample: "curl --request GET \\\n  --url https://{REPLACE_WITH_ADDRESS}/bpi/api/transactionalAccounts \\\n  --header 'Authorization: Bearer {REPLACE_WITH_ACCESS_TOKEN}' \\\n  --header 'Content-Type: application/json' \\\n  --header 'x-ibm-client-id: {REPLACE_THIS_KEY}' \\\n  --header 'x-ibm-client-secret: {REPLACE_THIS_KEY}'",
        response200: "{\n  \"status\": \"success\",\n  \"code\": \"0\",\n  \"description\": \"Success\",\n  \"body\": {\n    \"transactionalAccounts\": [\n      {\n        \"accountNumber\": \"533XXXXX7899\",\n        \"accountNumberToken\": \"933ef8e8722b0761cdc8efba0dd40b9a\",\n        \"displayOrder\": \"001\",\n        \"accountPreferredName\": \"MY CHECKING ACCOUNT\",\n        \"institution\": \"BPI\",\n        \"accountType\": \"CHECKING ACCOUNT\"\n      },\n      {\n        \"accountNumber\": \"533XXXXX3362\",\n        \"accountNumberToken\": \"233eca40ff303ba15bf39052ca3102c6\",\n        \"displayOrder\": \"002\",\n        \"accountPreferredName\": \"MY SAVINGS ACCOUNT\",\n        \"institution\": \"BPI\",\n        \"accountType\": \"SAVINGS ACCOUNT\"\n      }\n    ]\n  }\n}",
        response400: "{\n  \"errors\": [\n    {\n      \"code\": \"400\",\n      \"message\": \"Bad Request\",\n      \"description\": \"The request could not be understood by the server due to malformed syntax.\"\n    }\n  ]\n}",
    },
    initiate: {
        label: 'POST /initiate',
        jsonSample: "{\n  \"merchantTransactionReference\": \"MY-UNIQUE-ID-123\",\n  \"accountNumberToken\": \"f83df477843a93be1440b95ba29127f8091bd3fad4f0f6bed7529504fa93b1a08b8a381548d0b36947dece006b588\",\n  \"amount\": \"500\",\n  \"remarks\": \"Load funds to wallet\"\n}",
        curlSample: "curl --request POST \\\n  --url https://{REPLACE_WITH_ADDRESS}/bpi/api/fundTopUp/initiate \\\n  --header 'Authorization: Bearer {REPLACE_WITH_ACCESS_TOKEN}' \\\n  --header 'Content-Type: application/json' \\\n  --header 'x-ibm-client-id: {REPLACE_THIS_KEY}' \\\n  --header 'x-ibm-client-secret: {REPLACE_THIS_KEY}' \\\n  --header 'x-partner-id: {REPLACE_THIS_KEY}' \\\n  --data '{\"merchantTransactionReference\":\"MY-UNIQUE-ID-123\",\"accountNumberToken\":\"f83df477843a93be1440b95ba29127f8091bd3fad4f0f6bed7529504fa93b1a08b8a381548d0b36947dece006b588\",\"amount\":\"500\",\"remarks\":\"Load funds to wallet\"}'",
        response200: "{\n  \"headers\": {\n    \"transactionId\": \"12027c4f-5146-4bfd-b563-1887104a96\"\n  },\n  \"body\": {\n    \"status\": \"success\",\n    \"code\": \"0\",\n    \"description\": \"Success\",\n    \"body\": {\n      \"mobileNumber\": \"917XXXXX34\",\n      \"mobileNumberToken\": \"8abffd6338d58192ac7b638bbfa2d842\"\n    }\n  }\n}",
        response400: "{\n  \"errors\": [\n    {\n      \"code\": \"400\",\n      \"message\": \"Bad Request\"\n    }\n  ]\n}"
    },
    saveDetails: {
        label: 'POST /saveDetails',
        jsonSample: "{\n  \"geolocation\": \"Philippines\",\n  \"deviceName\": \"iPhone 12\",\n  \"deviceModel\": \"A2403\",\n  \"deviceSystemName\": \"iOS 14.5\",\n  \"beneficiaryName\": \"Juan Dela Cruz\",\n  \"beneficiaryAccountNumber\": \"1234567\",\n  \"beneficiaryBank\": \"ABC Bank\",\n  \"transactionType\": \"Pay to Biller\",\n  \"accountCountry\": \"PHL\",\n  \"accountCountryDestination\": \"PHL\",\n  \"transferMediumType\": \"BILLPAY_ELEC\"\n}",
        curlSample: "curl --request POST \\\n  --url https://{REPLACE_WITH_ADDRESS}/bpi/api/fundTopUp/saveDetails \\\n  --header 'Content-Type: application/json' \\\n  --header 'x-ibm-client-id: {REPLACE_THIS_KEY}' \\\n  --header 'x-ibm-client-secret: {REPLACE_THIS_KEY}' \\\n  --header 'Authorization: Bearer {REPLACE_WITH_ACCESS_TOKEN}' \\\n  --header 'transactionId: {REPLACE_WITH_TRANSACTIONID}' \\\n  --data '{\"geolocation\":\"Philippines\",\"deviceName\":\"iPhone 12\",\"deviceModel\":\"A2403\",\"deviceSystemName\":\"iOS 14.5\",\"beneficiaryName\":\"Juan Dela Cruz\",\"beneficiaryAccountNumber\":\"1234567\",\"beneficiaryBank\":\"ABC Bank\",\"transactionType\":\"Pay to Biller\",\"accountCountry\":\"PHL\",\"accountCountryDestination\":\"PHL\",\"transferMediumType\":\"BILLPAY_ELEC\"}'",
        response200: "{\n  \"status\": \"success\",\n  \"code\": \"0\",\n  \"description\": \"Success\"\n}",
        response400: "{\n  \"errors\": [\n    {\n      \"code\": \"400\",\n      \"message\": \"Bad Request\"\n    }\n  ]\n}"
    },
    otp: {
        label: 'POST /otp',
        jsonSample: "{\n  \"mobileNumberToken\": \"8abffd6338d58192ac7b638bbfa2d842\"\n}",
        curlSample: "curl --request POST \\\n  --url https://{REPLACE_WITH_ADDRESS}/bpi/api/fundTopUp/otp \\\n  --header 'Content-Type: application/json' \\\n  --header 'x-ibm-client-id: {REPLACE_THIS_KEY}' \\\n  --header 'x-ibm-client-secret: {REPLACE_THIS_KEY}' \\\n  --header 'Authorization: Bearer {REPLACE_WITH_ACCESS_TOKEN}' \\\n  --header 'transactionId: {REPLACE_WITH_TRANSACTIONID}' \\\n  --data '{\"mobileNumberToken\": \"8abffd6338d58192ac7b638bbfa2d842\"}'",
        response200: "{\n  \"headers\": {\n    \"transactionId\": \"12027c4f-5146-4bfd-b563-1887104a9\"\n  },\n  \"body\": {\n    \"status\": \"success\",\n    \"code\": \"0\",\n    \"description\": \"Success\",\n    \"body\": {\n      \"otpValidUntil\": \"Thu Sep 28 2019 15:09:36 GMT+0800 (DST)\"\n    }\n  }\n}",
        response400: "{\n  \"errors\": [\n    {\n      \"code\": \"400\",\n      \"message\": \"Bad Request\"\n    }\n  ]\n}"
    },
    process: {
        label: 'POST /process',
        jsonSample: "{\n  \"otp\": \"123456\"\n}",
        curlSample: "curl --request POST \\\n  --url https://{REPLACE_WITH_ADDRESS}/bpi/api/fundTopUp/process \\\n  --header 'Content-Type: application/json' \\\n  --header 'x-ibm-client-id: {REPLACE_THIS_KEY}' \\\n  --header 'x-ibm-client-secret: {REPLACE_THIS_KEY}' \\\n  --header 'Authorization: Bearer {REPLACE_WITH_ACCESS_TOKEN}' \\\n  --header 'transactionId: {REPLACE_WITH_TRANSACTIONID}' \\\n  --data '{\"otp\": \"123456\"}'",
        response200: "{\n  \"status\": \"success\",\n  \"code\": \"0\",\n  \"description\": \"Success\",\n  \"body\": {\n    \"confirmationNumber\": \"123456789\",\n    \"transactionTimeStamp\": \"Thu Sep 28 2019 15:09:36 GMT+0800 (DST)\"\n  }\n}",
        response400: "{\n  \"errors\": [\n    {\n      \"code\": \"400\",\n      \"message\": \"Bad Request\"\n    }\n  ]\n}"
    },
    status: {
        label: 'GET /status',
        jsonSample: "// This endpoint does not have a JSON request body.",
        curlSample: "curl --request GET \\\n  --url https://{REPLACE_WITH_ADDRESS}/bpi/api/fundTopUp/status \\\n  --header 'Authorization: Bearer {REPLACE_WITH_ACCESS_TOKEN}' \\\n  --header 'x-ibm-client-id: {REPLACE_THIS_KEY}' \\\n  --header 'x-ibm-client-secret: {REPLACE_THIS_KEY}' \\\n  --header 'transactionId: {REPLACE_WITH_TRANSACTIONID}'",
        response200: "{\n  \"status\": \"success\",\n  \"code\": \"0\",\n  \"description\": \"Success\",\n  \"body\": {\n    \"status\": \"S\",\n    \"statusDesc\": \"Success\",\n    \"merchantTransactionReference\": \"MY-UNIQUE-ID-123\",\n    \"bpiTransactionReference\": \"123456789\",\n    \"transactionTimeStamp\": \"Thu Sep 28 2019 15:09:36 GMT+0800 (DST)\"\n  }\n}",
        response400: "{\n  \"errors\": [\n    {\n      \"code\": \"400\",\n      \"message\": \"Bad Request\"\n    }\n  ]\n}"
    },
    reversal: {
        label: 'POST /reversal',
        jsonSample: "{\n  \"merchantTransactionReference\": \"MY-UNIQUE-ID-123\"\n}",
        curlSample: "curl --request POST \\\n  --url https://{REPLACE_WITH_ADDRESS}/bpi/api/fundTopUp/reversal \\\n  --header 'Authorization: Bearer {REPLACE_WITH_ACCESS_TOKEN}' \\\n  --header 'x-ibm-client-id: {REPLACE_THIS_KEY}' \\\n  --header 'x-ibm-client-secret: {REPLACE_THIS_KEY}' \\\n  --header 'transactionId: {REPLACE_WITH_TRANSACTIONID}' \\\n  --data '{\"merchantTransactionReference\": \"MY-UNIQUE-ID-123\"}'",
        response200: "{\n  \"status\": \"success\",\n  \"code\": \"0\",\n  \"description\": \"Success\",\n  \"body\": {\n    \"status\": \"S\",\n    \"statusDesc\": \"Success\",\n    \"reversalTimeStamp\": \"Thu Sep 28 2019 15:10:36 GMT+0800 (DST)\"\n  }\n}",
        response400: "{\n      \"errors\": [\n        {\n          \"code\": \"400\",\n          \"message\": \"Bad Request\"\n        }\n      ]\n    }"
    },
};
var ParameterRow = function (_a) {
    var name = _a.name, type = _a.type, _b = _a.required, required = _b === void 0 ? false : _b, description = _a.description, children = _a.children, _c = _a.isCollapsible, isCollapsible = _c === void 0 ? false : _c, _d = _a.level, level = _d === void 0 ? 0 : _d;
    var _e = (0, react_1.useState)(false), isOpen = _e[0], setIsOpen = _e[1];
    return (<div>
            <div className="grid grid-cols-12 gap-4 py-3 border-b border-gray-200 text-sm">
                <div className="col-span-4" style={{ paddingLeft: "".concat(level * 24, "px") }}>
                    <div className="flex items-center">
                        {isCollapsible ? (<button onClick={function () { return setIsOpen(!isOpen); }} className="mr-1 text-gray-500">
                                <Icons_1.ChevronDownIcon className={"w-3 h-3 transition-transform ".concat(isOpen ? 'rotate-0' : '-rotate-90')}/>
                            </button>) : (<span className="w-4 inline-block mr-1 text-gray-400">{level > 0 && '└'}</span>)}
                        <span className="font-mono text-gray-700 font-medium">{name}</span>
                    </div>
                </div>
                <div className="col-span-3 text-gray-500 font-mono">{type} {required && <span className="text-red-500 font-bold ml-2">Required</span>}</div>
                <div className="col-span-5 text-gray-600">
                    {description}
                </div>
            </div>
            {isCollapsible && isOpen && <div className="border-l border-gray-200">{children}</div>}
        </div>);
};
var ResponseBlock = function (_a) {
    var statusCode = _a.statusCode, statusText = _a.statusText, color = _a.color, children = _a.children;
    var _b = (0, react_1.useState)(true), isOpen = _b[0], setIsOpen = _b[1];
    var colorClasses = {
        green: 'bg-green-50 text-green-800',
        red: 'bg-red-50 text-red-800'
    };
    return (<div>
            <button onClick={function () { return setIsOpen(!isOpen); }} className={"w-full flex items-center justify-between p-3 rounded-t-md ".concat(colorClasses[color])}>
                <div className="flex items-center font-bold">
                    <Icons_1.ChevronDownIcon className={"w-4 h-4 mr-3 transition-transform ".concat(isOpen ? 'rotate-0' : '-rotate-90')}/>
                    <span>{statusCode} {statusText}</span>
                </div>
            </button>
            {isOpen && (<div className="border border-t-0 border-gray-200 rounded-b-md p-4">
                    {children}
                </div>)}
        </div>);
};
var CodeSamplePanel = function () {
    var _a = (0, react_1.useState)('json'), activeRequestTab = _a[0], setActiveRequestTab = _a[1];
    var _b = (0, react_1.useState)('200'), activeResponseTab = _b[0], setActiveResponseTab = _b[1];
    var _c = (0, react_1.useState)('getTransactionalAccounts'), selectedEndpoint = _c[0], setSelectedEndpoint = _c[1];
    var currentEndpoint = endpointsData[selectedEndpoint];
    return (<div className="sticky top-24 bg-[#2d3748] text-white rounded-lg p-6">
            <div>
                <div className="flex justify-between items-center mb-4">
                    <select value={selectedEndpoint} onChange={function (e) { return setSelectedEndpoint(e.target.value); }} className="bg-gray-800 border border-gray-600 rounded-md py-2 px-3 text-sm w-full focus:ring-bpi-red focus:border-bpi-red">
                        {Object.entries(endpointsData).map(function (_a) {
            var key = _a[0], value = _a[1];
            return (<option key={key} value={key}>{value.label}</option>);
        })}
                    </select>
                </div>
                <h3 className="font-bold text-lg">Request Sample</h3>
                <div className="mt-2 flex space-x-1 bg-gray-900 p-1 rounded-md">
                    <button onClick={function () { return setActiveRequestTab('json'); }} className={"w-full text-center text-sm font-semibold py-1.5 rounded ".concat(activeRequestTab === 'json' ? 'bg-red-600 text-white' : 'text-gray-300 hover:bg-gray-700')}>JSON</button>
                    <button onClick={function () { return setActiveRequestTab('curl'); }} className={"w-full text-center text-sm font-semibold py-1.5 rounded ".concat(activeRequestTab === 'curl' ? 'bg-yellow-500 text-black' : 'text-gray-300 hover:bg-gray-700')}>cURL</button>
                </div>
                <div className="mt-2 bg-black rounded p-4 text-xs font-mono overflow-x-auto max-h-80">
                    <pre><code>{activeRequestTab === 'json' ? currentEndpoint.jsonSample : currentEndpoint.curlSample}</code></pre>
                </div>
            </div>

            <div className="mt-8">
                <h3 className="font-bold text-lg">Response Sample</h3>
                <div className="mt-2 flex space-x-1 bg-gray-900 p-1 rounded-md">
                    <button onClick={function () { return setActiveResponseTab('200'); }} className={"w-full text-center text-sm font-semibold py-1.5 rounded ".concat(activeResponseTab === '200' ? 'bg-red-600 text-white' : 'text-gray-300 hover:bg-gray-700')}>200</button>
                    <button onClick={function () { return setActiveResponseTab('400'); }} className={"w-full text-center text-sm font-semibold py-1.5 rounded ".concat(activeResponseTab === '400' ? 'bg-yellow-500 text-black' : 'text-gray-300 hover:bg-gray-700')}>400</button>
                </div>
                <div className="mt-2 bg-black rounded p-4 text-xs font-mono overflow-x-auto max-h-60">
                    <pre><code>{activeResponseTab === '200' ? currentEndpoint.response200 : currentEndpoint.response400}</code></pre>
                </div>
            </div>
        </div>);
};
var FundTransferDocumentation = function () {
    var _a = (0, react_1.useState)(false), isExpanded = _a[0], setIsExpanded = _a[1];
    return (<div className="container mx-auto px-6 py-12">
            <div className="lg:grid lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-7">
                    <div className={"relative transition-all duration-700 ease-in-out ".concat(isExpanded ? 'max-h-[9999px]' : 'max-h-[1600px] overflow-hidden')}>
                        {/* Header */}
                        <section>
                             <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
                                <div className="flex items-center">
                                    <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-md mr-2">GET</span>
                                    <span className="text-gray-800 font-semibold">/transactionalAccounts, /status</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-md mr-2">POST</span>
                                    <span className="text-gray-800 font-semibold">/initiate, /saveDetails, /otp, /process, /reversal</span>
                                </div>
                            </div>
                            <h1 className="text-4xl font-bold text-red-600 mt-6">Fund Top Up API</h1>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                            The Fund Top Up API allows partners to initiate fund transfers from a customer's BPI account to top up an e-wallet. This documentation provides a detailed overview of the available endpoints and their functionalities, covering the entire fund transfer process from fetching accounts to transaction completion and status checks.
                            </p>
                        </section>

                        {/* Authentication & Flow */}
                        <section className="mt-12">
                            <h2 className="text-3xl font-bold mb-4">Authentication &amp; API Flow</h2>
                            <p className="text-gray-600 leading-relaxed">All endpoints require a valid <code className="bg-gray-200 text-sm p-1 rounded">Authorization: Bearer &lt;token&gt;</code> header. The typical flow is as follows:</p>
                            <ol className="list-decimal pl-5 mt-2 space-y-2 text-sm text-gray-600 leading-relaxed">
                                <li><strong>Get Transactional Accounts:</strong> Fetch the user's available source accounts.</li>
                                <li><strong>Initiate Transfer:</strong> Start the fund transfer process with transaction details.</li>
                                <li><strong>Save Beneficiary Details (Optional):</strong> Save beneficiary information for future use.</li>
                                <li><strong>Request OTP:</strong> Trigger an OTP to be sent to the user's registered mobile number for verification.</li>
                                <li><strong>Process Transaction:</strong> Finalize the transfer using the received OTP.</li>
                                <li><strong>Check Status:</strong> Inquire about the status of a transaction.</li>
                                <li><strong>Reverse Transaction (if necessary):</strong> Initiate a reversal for a failed or erroneous transaction.</li>
                            </ol>
                        </section>

                        {/* Endpoints */}
                        <section className="mt-12">
                            <h2 className="text-3xl font-bold mb-4">Endpoints</h2>

                            {/* GET /transactionalAccounts */}
                            <div id="get-accounts" className="mt-8 border-t pt-8">
                                <h3 className="text-2xl font-semibold text-gray-800">GET /transactionalAccounts</h3>
                                <p className="mt-2 text-gray-600">Retrieve a list of the user's BPI accounts that can be used for fund transfers.</p>
                                <div className="flex items-center space-x-2 my-4">
                                    <h4 className="text-xl font-semibold text-gray-700">Header Parameters</h4>
                                    <Icons_1.QuestionMarkCircleIcon className="w-5 h-5 text-gray-400"/>
                                </div>
                                <div className="border border-gray-200 rounded-md">
                                    <ParameterRow name="Authorization" type="String" required description="Bearer access token."/>
                                    <ParameterRow name="x-ibm-client-id" type="String" required description="Client ID from onboarding."/>
                                    <ParameterRow name="x-ibm-client-secret" type="String" required description="Client Secret from onboarding."/>
                                </div>
                                <h4 className="text-xl font-semibold text-gray-700 mt-6">Responses</h4>
                                <div className="space-y-4 mt-2">
                                    <ResponseBlock statusCode="200" statusText="OK" color="green">
                                        <h5 className="font-semibold mb-2">RESPONSE SCHEMA</h5>
                                        <div className="border border-gray-200 rounded-md">
                                            <ParameterRow name="body" type="object" isCollapsible>
                                                <ParameterRow name="transactionalAccounts" type="array" level={1} isCollapsible>
                                                    <ParameterRow name="accountNumber" type="string" level={2}/>
                                                    <ParameterRow name="accountNumberToken" type="string" level={2}/>
                                                </ParameterRow>
                                            </ParameterRow>
                                        </div>
                                    </ResponseBlock>
                                    <ResponseBlock statusCode="400" statusText="Bad Request" color="red">
                                        <h5 className="font-semibold mb-2">RESPONSE SCHEMA</h5>
                                        <div className="border border-gray-200 rounded-md">
                                            <ParameterRow name="errors" type="Array of object" isCollapsible>
                                                <ParameterRow name="code" type="string" level={1}/>
                                                <ParameterRow name="message" type="string" level={1}/>
                                                <ParameterRow name="description" type="string" level={1}/>
                                            </ParameterRow>
                                        </div>
                                    </ResponseBlock>
                                </div>
                            </div>
                            
                            {/* POST /initiate */}
                            <div id="initiate" className="mt-8 border-t pt-8">
                                <h3 className="text-2xl font-semibold text-gray-800">POST /initiate</h3>
                                <p className="mt-2 text-gray-600">This endpoint starts the fund top up process.</p>
                                <h4 className="text-xl font-semibold text-gray-700 mt-6 border-t pt-6">REQUEST BODY</h4>
                                <div className="mt-4 border border-gray-200 rounded-md">
                                    <ParameterRow name="merchantTransactionReference" type="String" required/>
                                    <ParameterRow name="accountNumberToken" type="String" required/>
                                    <ParameterRow name="amount" type="String" required/>
                                    <ParameterRow name="remarks" type="String"/>
                                </div>
                            </div>
                            
                            {/* POST /otp */}
                            <div id="otp" className="mt-8 border-t pt-8">
                                <h3 className="text-2xl font-semibold text-gray-800">POST /otp</h3>
                                <p className="mt-2 text-gray-600">This endpoint sends the OTP to the customer’s phone number.</p>
                                <h4 className="text-xl font-semibold text-gray-700 mt-6 border-t pt-6">REQUEST BODY</h4>
                                <div className="mt-4 border border-gray-200 rounded-md">
                                    <ParameterRow name="mobileNumberToken" type="String" required/>
                                </div>
                            </div>

                             {/* POST /process */}
                             <div id="process" className="mt-8 border-t pt-8">
                                <h3 className="text-2xl font-semibold text-gray-800">POST /process</h3>
                                <p className="mt-2 text-gray-600">This endpoint uses the OTP to finalize the transfer.</p>
                                <h4 className="text-xl font-semibold text-gray-700 mt-6 border-t pt-6">REQUEST BODY</h4>
                                <div className="mt-4 border border-gray-200 rounded-md">
                                    <ParameterRow name="otp" type="String" required/>
                                </div>
                            </div>

                        </section>
                        
                        {!isExpanded && <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white to-transparent pointer-events-none"/>}
                    </div>
                    
                    <div className="mt-8 text-center">
                        <button onClick={function () { return setIsExpanded(!isExpanded); }} className="text-bpi-red font-bold py-2 px-6 border-2 border-bpi-red rounded-full hover:bg-bpi-red hover:text-white transition-all duration-300">
                            {isExpanded ? 'See Less' : 'See More'}
                        </button>
                    </div>
                </div>

                <div className="lg:col-span-5 mt-12 lg:mt-0">
                    <CodeSamplePanel />
                </div>
            </div>
        </div>);
};
// --- New Components for API Contract Page ---
var DocSection = function (_a) {
    var title = _a.title, children = _a.children, _b = _a.isFirst, isFirst = _b === void 0 ? false : _b;
    return (<section className={isFirst ? "mt-2" : "mt-10"}>
        <h2 className="text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">{title}</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">{children}</div>
    </section>);
};
var SubHeading = function (_a) {
    var title = _a.title, children = _a.children;
    return (<>
        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">{title}</h3>
        {children}
    </>);
};
var CodeBlock = function (_a) {
    var code = _a.code, _b = _a.language, language = _b === void 0 ? 'json' : _b;
    return (<pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto text-sm font-mono my-4">
        <code>{code.trim()}</code>
    </pre>);
};
var DocTable = function (_a) {
    var headers = _a.headers, children = _a.children;
    return (<div className="overflow-x-auto my-4 border border-gray-200 rounded-md">
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    {headers.map(function (header) { return (<th key={header} scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {header}
                        </th>); })}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-sm">
                {children}
            </tbody>
        </table>
    </div>);
};
var ApiContractDocumentation = function () {
    return (<div className="bg-gray-50 py-12">
            <div className="container mx-auto px-6">
                <div className="bg-white p-8 rounded-lg shadow-md max-w-none">
                    <h1 className="text-4xl font-black text-gray-900 mb-2">BPI PARTNER API 2.0</h1>
                    <p className="text-lg text-gray-500 mb-8">API Contract 2.0.16</p>

                    <DocSection title="Open Banking">
                        <p>The Open Banking initiative, is a BPI initiated project to build an Open API infrastructure to meet following business requirement(s):</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Enable third party developers to build applications and services around the financial institution.</li>
                            <li>Enable access to third party partners to consume bank services.</li>
                        </ul>
                    </DocSection>

                    <DocSection title="Benefits of Open Banking">
                        <p>Open Banking is a secure way to give Partners access to Bank's financial information. This opens a way to new products and services, improved customer experience, new revenue streams, and a sustainable service model that could help small to medium-sized businesses to get a better deal.</p>
                    </DocSection>

                    <DocSection title="Partner On-Boarding">
                        <SubHeading title="Prerequisites">
                            <p>UAT / PROD</p>
                            <ol className="list-decimal pl-6 space-y-2 mt-2">
                                <li>Public IPs (for IP Whitelisting)</li>
                                <li>Public Certificate</li>
                                <li>re-direct URIs</li>
                                <li>Merchant details</li>
                                <li>Partner API Checklist</li>
                                <li>VPN form (for VPN connection)</li>
                            </ol>
                        </SubHeading>
                        <SubHeading title="Firewall Policies">
                            <p>Please ensure that the following address names are whitelisted in your firewall:</p>
                            <DocTable headers={["IP", "Description"]}>
                                <tr><td className="px-4 py-2 font-mono" colSpan={2}><b>OAuth</b></td></tr>
                                <tr><td className="px-4 py-2 font-mono">oauth-uat.bpi.com.ph</td><td className="px-4 py-2">UAT OAuth provider (This should be accessed via an IP not Whitelisted to BPI) (203.161.188.227)</td></tr>
                                <tr><td className="px-4 py-2 font-mono">oauth-prod.bpi.com.ph</td><td className="px-4 py-2">Production OAuth provider (This should be accessed via an IP not Whitelisted to BPI) (203.161.188.179)</td></tr>
                                <tr><td className="px-4 py-2 font-mono" colSpan={2}><b>Transactional</b></td></tr>
                                <tr><td className="px-4 py-2 font-mono">api-uat.bpi.com.ph</td><td className="px-4 py-2">API UAT Gateway (203.161.188.234)</td></tr>
                                <tr><td className="px-4 py-2 font-mono">api-prod.bpi.com.ph</td><td className="px-4 py-2">Production API Gateway (203.177.34.241)</td></tr>
                            </DocTable>
                        </SubHeading>
                        <SubHeading title="Connection Details">
                            <p>After undergoing through business requirements and a technical assessment from BPI, partners can start integration activities with BPI. A site to site VPN is one of the standard connectivity and security requirement for a BPI partner connection. After policies are in place, the API key which consists of the client id and the client secret would be provided. However in order for a customer transactions to successfully push through, customer authorization would need to be granted via the Oauth v2 protocol. There is also a registration process for the customer to grant access to the application provider.</p>
                            <p>An alternative method of establishing connectivity is through an IP whitelisted connection.</p>
                        </SubHeading>
                    </DocSection>

                    <DocSection title="3-Legged OAuth">
                        <p>OAuth 2.0 is a protocol that allows a user to grant limited access to BPI Partner API without exposing their credentials.</p>
                        <p>All BPI APIs which has Customer data are secured using OAuth 2.0 - Authorization code grant.</p>
                        <SubHeading title="High level flow for Authorization Code Grant:">
                            <ol className="list-decimal pl-6 space-y-2">
                                <li>Partner application opens a browser/webview and opens the /authorize endpoint of BPI</li>
                                <li>BPI login page is presented to the User</li>
                                <li>User enters the BPI Online Banking Credentials and Accepts the terms and conditions</li>
                                <li>The User is redirected back to Partner application - redirect URL with an authorization code query parameter</li>
                                <li>Partner application then calls the /token endpoint of BPI to retrieve the access token based on the authorization code</li>
                            </ol>
                        </SubHeading>
                        <SubHeading title="[GET] /authorize">
                            <p>This endpoint yields BPI login page where the user is required to provide the BPI Online Banking Credentials and Accepts the terms and conditions.</p>
                            <DocTable headers={["Parameter Name", "Data Type", "Description", "Sample Value"]}>
                                <tr><td className="px-4 py-2">client_id</td><td className="px-4 py-2">String</td><td className="px-4 py-2">Client Id issued as part of the onboarding</td><td className="px-4 py-2 font-mono">asf-8g2f-of15-4e62-9070-ege6e8gfgcae</td></tr>
                                <tr><td className="px-4 py-2">response_type</td><td className="px-4 py-2">String</td><td className="px-4 py-2">Identifies Authorization code grant - <b>code</b></td><td className="px-4 py-2 font-mono">code</td></tr>
                                <tr><td className="px-4 py-2">scope</td><td className="px-4 py-2">String</td><td className="px-4 py-2">Identifies Features/APIs for which Partner is requesting access. Values are spaces separated</td><td className="px-4 py-2 font-mono">transactionalAccountsForBillsPay fundTopUp</td></tr>
                                <tr><td className="px-4 py-2">redirect_uri</td><td className="px-4 py-2">String</td><td className="px-4 py-2">URL for redirection. Registered as part of onboarding</td><td className="px-4 py-2 font-mono">https://localhost</td></tr>
                                <tr><td className="px-4 py-2">state</td><td className="px-4 py-2">String</td><td className="px-4 py-2">An (optional) parameter used by the application to store request-specific data. State parameter should not contain any sensitive information as they might be stored in the browser's history and server access logs (as a reminder, the state is transmitted via a query parameters). The state parameter should be seeded with a secure random (this avoids CSRF attacks)</td><td className="px-4 py-2 font-mono">xcoivjuywkdflhvusyegkch</td></tr>
                            </DocTable>
                        </SubHeading>
                         <SubHeading title="[POST] /token">
                            <p>This endpoint completes the 3-Oauth workflow and allows to generate access token based on the Authorization Code. Access token expiry is 30 minutes. Refresh token is valid for 30 days, and can be used to generate a maximum of 1000 access tokens.</p>
                            <CodeBlock code={"curl -X POST \\\n    https://REPLACE_WITH_ADDRESS/{basepath}/token \\\n    -H 'Content-Type: application/x-www-form-urlencoded' \\\n    -d 'client_id=REPLACE_WITH_CLIENT_ID&client_secret=REPLACE_WITH_CLIENT_SECRET&grant_type=authorization_code&code=REPLACE_WITH_CODE '"} language="bash"/>
                        </SubHeading>
                    </DocSection>
                </div>
            </div>
        </div>);
};
var FundTransferPage = function (_a) {
    var setCurrentPage = _a.setCurrentPage;
    var _b = (0, react_1.useState)('documentation'), activeTab = _b[0], setActiveTab = _b[1];
    return (<main className="bg-white text-gray-800 font-sans">
             <div className="bg-purple-100 border-b border-purple-200">
                <div className="container mx-auto px-6 py-4">
                    <p className="text-sm text-purple-800">
                        <button onClick={function () { return setCurrentPage('documentation'); }} className="font-semibold hover:underline">Documentation</button>
                        <span className="mx-2">/</span>
                        <span className="text-gray-600">Fund Top Up API</span>
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        <button onClick={function () { return setActiveTab('documentation'); }} className={"whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ".concat(activeTab === 'documentation'
            ? 'border-bpi-red text-bpi-red'
            : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300')}>
                            Documentation
                        </button>
                        <button onClick={function () { return setActiveTab('playground'); }} className={"whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ".concat(activeTab === 'playground'
            ? 'border-bpi-red text-bpi-red'
            : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300')}>
                            API Playground
                        </button>
                         <button onClick={function () { return setActiveTab('contract'); }} className={"whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ".concat(activeTab === 'contract'
            ? 'border-bpi-red text-bpi-red'
            : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300')}>
                            API Contract
                        </button>
                    </nav>
                </div>
            </div>
            
            {activeTab === 'documentation' && <FundTransferDocumentation />}
            {activeTab === 'playground' && <ApiPlayground_1.ApiPlayground />}
            {activeTab === 'contract' && <ApiContractDocumentation />}
        </main>);
};
exports.FundTransferPage = FundTransferPage;
