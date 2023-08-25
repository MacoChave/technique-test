import { QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { setupInterceptors } from './interceptors/axios.js';
import queryClient from './queryClient.js';

setupInterceptors(axios);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</React.StrictMode>
);
