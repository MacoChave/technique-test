import { getValidatorError } from '@/utils/errorValidator';
import axios, {
	AxiosError,
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
} from 'axios';

const logOnDev = (message: string) => {
	if (import.meta.env.MODE === 'development') {
		console.log(message);
	}
};

const onRequest = (config: AxiosRequestConfig): any => {
	// const dispatch = useDispatch();
	const { method } = config;

	config.headers = {
		...config.headers,
	};

	// logOnDev({ method: method?.toUpperCase(), url, Request });

	if (method === 'get') {
		config.timeout = 15000;
	}
	return config;
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
	// const dispatch = useDispatch();

	// dispatch(setLoading(true));
	// HANDLE RESPONSE DATA
	// ERROR HANDLING WHEN RETURN SUCCESS WITH ERROR
	// logOnDev({ method: method?.toUpperCase(), url, Response, status, data });
	return response;
};

const onErrorResponse = (error: AxiosError | Error): Promise<AxiosError> => {
	if (axios.isAxiosError(error)) {
		const { method, url } = error.config as AxiosRequestConfig;
		const { statusText, status, data } =
			(error.response as AxiosResponse) ?? {};

		const errorMessage = getValidatorError(statusText) || data.error;

		logOnDev(
			JSON.stringify({
				method: method?.toUpperCase(),
				url,
				Error,
				status,
				statusText,
				errorMessage,
			})
		);

		alert(errorMessage);

		if (status === 401) {
			// DELETE TOKEN & GO TO LOGIN PAGE
			logOnDev(`[API] | Error ${error.message}`);
		}
	} else {
		logOnDev(`[API] | Error ${error.message}`);
		alert(error.message);
	}

	return Promise.reject(error);
};

export const setupInterceptors = (instance: AxiosInstance): AxiosInstance => {
	instance.interceptors.request.use(onRequest, onErrorResponse);
	instance.interceptors.response.use(onResponse, onErrorResponse);
	return instance;
};
