import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const API_KEY = '28235798-10089aa8a519f6d1c62a23eff';

export const imgApi = createApi({
	reducerPath: 'imgApi',
	baseQuery: fetchBaseQuery({baseUrl: 'https://pixabay.com/'}),
	endpoints: builder => ({
		getHeroImg: builder.query({
			query: idq => ({
				url: 'api',
				params: {
					key: API_KEY,
					id: idq,
				},
			}),
		}),
	}),
});

export const {useGetHeroImgQuery} = imgApi;

export default imgApi;
