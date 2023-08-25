import { useFetchType } from '@/models/useFetch';
import { QueryFunctionContext, useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchData = async ({ queryKey }: QueryFunctionContext) => {
	const { data } = await axios.get(queryKey[1] as string, {
		params: queryKey[2] as object,
	});
	return data;
};

export const useFetch = ({ path, params = {} }: useFetchType) => {
	return useQuery(['data', path, params], fetchData);
};
