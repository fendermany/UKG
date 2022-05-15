import { lazy } from 'react';

const Page404 = lazy(() => import('./components/pages/page404/Page404'));
const CabinetHome = lazy(() =>
	import('./components/pages/cabinetHome/CabinetHome')
);
const CabinetAffiliate = lazy(() =>
	import('./components/pages/cabinetAffiliate/CabinetAffiliate')
);
const CabinetHelp = lazy(() =>
	import('./components/pages/cabinetHelp/CabinetHelp')
);
const CabinetInvestments = lazy(() =>
	import('./components/pages/cabinetInvestments/CabinetInvestments')
);
const CabinetProfile = lazy(() =>
	import('./components/pages/cabinetProfile/CabinetProfile')
);
const CabinetPromotion = lazy(() =>
	import('./components/pages/cabinetPromotion/CabinetPromotion')
);
const CabinetToken = lazy(() =>
	import('./components/pages/cabinetToken/CabinetToken')
);
const CabinetTopup = lazy(() =>
	import('./components/pages/cabinetTopup/CabinetTopup')
);
const CabinetSignin = lazy(() =>
	import('./components/pages/cabinetForms/CabinetSignin')
);
const CabinetRegistration = lazy(() =>
	import('./components/pages/cabinetForms/CabinetRegistration')
);
const CabinetRecovery = lazy(() =>
	import('./components/pages/cabinetForms/CabinetRecovery')
);

const SetPassword = lazy(() =>
	import('./components/pages/cabinetForms/SetPassword')
);

const Home = lazy(() => import('./components/pages/home/Home'));
const About = lazy(() => import('./components/pages/about/About'));
const Contacts = lazy(() => import('./components/pages/contacts/Contacts'));
const Documents = lazy(() => import('./components/pages/documents/Documents'));
const Investors = lazy(() => import('./components/pages/investors/Investors'));
const Companies = lazy(() => import('./components/pages/companies/Companies'));
const Production = lazy(() =>
	import('./components/pages/production/Production')
);
const Partners = lazy(() => import('./components/pages/partners/Partners'));
const Token = lazy(() => import('./components/pages/token/Token'));

export const routes = [
	{
		path: '/',
		component: Home,
		auth: false,
	},
	{
		path: '/about',
		component: About,
		auth: false,
	},
	{
		path: '/documents',
		component: Documents,
		auth: false,
	},
	{
		path: '/partners',
		component: Partners,
		auth: false,
	},
	{
		path: '/investors',
		component: Investors,
		auth: false,
	},
	{
		path: '/companies',
		component: Companies,
		auth: false,
	},
	{
		path: '/production',
		component: Production,
		auth: false,
	},
	{
		path: '/cgtoken',
		component: Token,
		auth: false,
	},
	{
		path: '/contacts',
		component: Contacts,
		auth: false,
	},
	{
		path: '/cabinet',
		component: CabinetHome,
		auth: true,
	},
	{
		path: '/help',
		component: CabinetHelp,
		auth: true,
	},
	{
		path: '/investments',
		component: CabinetInvestments,
		auth: true,
	},
	{
		path: '/profile',
		component: CabinetProfile,
		auth: true,
	},
	{
		path: '/promotion',
		component: CabinetPromotion,
		auth: true,
	},
	{
		path: '/token',
		component: CabinetToken,
		auth: true,
	},
	{
		path: '/topup',
		component: CabinetTopup,
		auth: true,
	},
	{
		path: '/partnership',
		component: CabinetAffiliate,
		auth: true,
		emptyHide: true,
	},
	{
		path: '/login',
		component: CabinetSignin,
		auth: false,
		authHide: true,
	},
	{
		path: '/registration',
		component: CabinetRegistration,
		auth: false,
		authHide: true,
	},
	{
		path: '/invite/registration',
		component: CabinetRegistration,
		auth: false,
		authHide: true,
	},
	{
		path: '/recovery',
		component: CabinetRecovery,
		auth: false,
		authHide: true,
	},
	{
		path: '*',
		component: Page404,
		auth: true,
	},
	{
		path: '*',
		component: CabinetSignin,
		auth: false,
		authHide: true,
	},
	{
		path: '/auth/registration',
		component: SetPassword,
		auth: false,
		authHide: true,
	},
];
