import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cardsApi = createApi({
  reducerPath: "cardsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.imgflip.com/get_memes" }),
  endpoints: (builder) => ({
    getCards: builder.query({
      query: () => "",
    }),
  }),
});

export const { useGetCardsQuery } = cardsApi;
