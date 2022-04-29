import { lazy } from 'react';

const Page404 = lazy(() => import('./components/pages/page404/Page404'));
const CabinetHome = lazy(() => import('./components/pages/cabinetHome/CabinetHome'));
const CabinetAffiliate = lazy(() =>
	import('./components/pages/cabinetAffiliate/CabinetAffiliate')
);
const CabinetHelp = lazy(() => import('./components/pages/cabinetHelp/CabinetHelp'));
const CabinetInvestments = lazy(() =>
	import('./components/pages/cabinetInvestments/CabinetInvestments')
);
const CabinetProfile = lazy(() =>
	import('./components/pages/cabinetProfile/CabinetProfile')
);
const CabinetPromotion = lazy(() =>
	import('./components/pages/cabinetPromotion/CabinetPromotion')
);
const CabinetToken = lazy(() => import('./components/pages/cabinetToken/CabinetToken'));
const CabinetTopup = lazy(() => import('./components/pages/cabinetTopup/CabinetTopup'));
const CabinetSignin = lazy(() => import('./components/pages/cabinetForms/CabinetSignin'));
const CabinetRegistration = lazy(() =>
	import('./components/pages/cabinetForms/CabinetRegistration')
);
const CabinetRecovery = lazy(() =>
	import('./components/pages/cabinetForms/CabinetRecovery')
);

const SetPassword = lazy(() =>
	import('./components/pages/cabinetForms/SetPassword')
);

export const routes = [
	{
		path: '/',
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
	},
	{
		path: '/partnership',
		component: CabinetAffiliate,
		auth: true,
		emptyHide: true
	},
	{
		path: '/login',
		component: CabinetSignin,
		auth: false,
		authHide: true
	},
	{
		path: '/registration',
		component: CabinetRegistration,
		auth: false,
		authHide: true
	},
	{
		path: '/invite/registration',
		component: CabinetRegistration,
		auth: false,
		authHide: true
	},
	{
		path: '/recovery',
		component: CabinetRecovery,
		auth: false,
		authHide: true
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
		authHide: true
	},
	{
		path: '/auth/registration',
		component: SetPassword,
		auth: false,
		authHide: true
	},
];
