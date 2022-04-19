import React from 'react';
import ReactDOM from 'react-dom/client';
import AppProvider from './providers/AppProvider';

// import i18n (needs to be bundled ;))
import './components/i18n/i18n';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<AppProvider />
	</React.StrictMode>
);
