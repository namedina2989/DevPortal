"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIS = exports.API_CATEGORIES = exports.LOGGED_IN_MENU = exports.NAV_LINKS = void 0;
var react_1 = require("react");
var Icons_1 = require("./components/Icons");
exports.NAV_LINKS = [
    { name: 'Home', href: 'home' },
    { name: 'Solutions', href: 'api-catalog' },
    { name: 'Documentation', href: 'documentation' },
    { name: 'Contact Us', href: 'contact-us' },
];
exports.LOGGED_IN_MENU = [
    { name: 'Dashboard', href: '#' },
    { name: 'API', href: 'api-catalog' },
    { name: 'My Application', href: '#' },
    { name: 'Contact Us', href: 'contact-us' },
    { name: 'Testing Ground', href: '#' },
];
exports.API_CATEGORIES = ['All', 'Accounts', 'Authorizations', 'Cards', 'Loans', 'Payment', 'Transfer', 'Wallets'];
exports.APIS = [
    {
        id: '1',
        name: 'Bills Payment',
        version: 'API V1.2.3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category: 'Payment',
        isComingSoon: false,
        icon: <Icons_1.BillsPaymentIcon className="w-8 h-8 text-bpi-red"/>,
        pageLink: 'bills-payment',
    },
    {
        id: '2',
        name: 'Accounts API',
        version: 'API V1.0.0',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category: 'Accounts',
        isComingSoon: true,
        icon: <Icons_1.AccountsIcon className="w-8 h-8 text-bpi-red"/>,
    },
    {
        id: '3',
        name: 'Fund Transfer',
        version: 'API V2.1.0',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category: 'Transfer',
        isComingSoon: false,
        icon: <Icons_1.TransferIcon className="w-8 h-8 text-bpi-red"/>,
        pageLink: 'fund-transfer',
    },
    {
        id: '4',
        name: 'Cards API',
        version: 'API V1.1.28',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category: 'Cards',
        isComingSoon: false,
        icon: <Icons_1.CardIcon className="w-8 h-8 text-bpi-red"/>,
    },
    {
        id: '5',
        name: 'vybe',
        version: 'API V1.1.28',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category: 'Wallets',
        isComingSoon: false,
        icon: <Icons_1.WalletIcon className="w-8 h-8 text-bpi-red"/>,
    },
    {
        id: '6',
        name: 'Loan Application',
        version: 'API V1.3.0',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category: 'Loans',
        isComingSoon: false,
        icon: <Icons_1.LoanIcon className="w-8 h-8 text-bpi-red"/>,
    },
    {
        id: '7',
        name: 'Account Details',
        version: 'API V2.0.0',
        description: 'Retrieve account balance and transaction history securely.',
        category: 'Accounts',
        isComingSoon: false,
        icon: <Icons_1.AccountsIcon className="w-8 h-8 text-bpi-red"/>,
    },
    {
        id: '8',
        name: 'Card Management',
        version: 'API V1.5.0',
        description: 'Allow users to block, unblock, and manage their credit/debit cards.',
        category: 'Cards',
        isComingSoon: false,
        icon: <Icons_1.CardIcon className="w-8 h-8 text-bpi-red"/>,
    },
    {
        id: '9',
        name: 'e-Wallet Top-up',
        version: 'API V1.1.0',
        description: 'Facilitate instant top-ups to various digital wallets from a BPI account.',
        category: 'Wallets',
        isComingSoon: false,
        icon: <Icons_1.WalletIcon className="w-8 h-8 text-bpi-red"/>,
    },
    {
        id: '10',
        name: 'Authorization Token',
        version: 'API V1.0.0',
        description: 'Generate an access token to authenticate and authorize your API requests.',
        category: 'Authorizations',
        isComingSoon: false,
        icon: <Icons_1.KeyIcon className="w-8 h-8 text-bpi-red"/>,
    },
];
