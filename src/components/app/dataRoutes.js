import { lazy } from 'react';

const Page404 = lazy(() => import('../pages/page404/Page404'));
const CabinetHome = lazy(() => import('../pages/cabinetHome/CabinetHome'));
const CabinetAffiliate = lazy(() =>
	import('../pages/cabinetAffiliate/CabinetAffiliate')
);
const CabinetHelp = lazy(() => import('../pages/cabinetHelp/CabinetHelp'));
const CabinetInvestments = lazy(() =>
	import('../pages/cabinetInvestments/CabinetInvestments')
);
const CabinetProfile = lazy(() =>
	import('../pages/cabinetProfile/CabinetProfile')
);
const CabinetPromotion = lazy(() =>
	import('../pages/cabinetPromotion/CabinetPromotion')
);
const CabinetToken = lazy(() => import('../pages/cabinetToken/CabinetToken'));
const CabinetTopup = lazy(() => import('../pages/cabinetTopup/CabinetTopup'));
const CabinetSignin = lazy(() => import('../pages/cabinetForms/CabinetSignin'));
const CabinetRegistration = lazy(() =>
	import('../pages/cabinetForms/CabinetRegistration')
);
const CabinetRecovery = lazy(() =>
	import('../pages/cabinetForms/CabinetRecovery')
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
		path: '/recovery',
		component: CabinetRecovery,
		auth: false,
		authHide: true
	},
	{
		path: '*',
		component: CabinetHome,
		auth: true,
	},
	{
		path: '*',
		component: CabinetSignin,
		auth: false,
		authHide: true
	},
];
