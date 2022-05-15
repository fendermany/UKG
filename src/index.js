import React from 'react';
import ReactDOM from 'react-dom/client';
import AppProvider from './providers/AppProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
// import i18n (needs to be bundled ;))
import './components/i18n/i18n';

import './index.scss';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<QueryClientProvider client={queryClient}>
		<AppProvider />
		<ReactQueryDevtools initialIsOpen={false} />
	</QueryClientProvider>
);
