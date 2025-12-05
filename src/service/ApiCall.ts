/** @format */

import axios from "axios";
import { fallbackQuotes } from "../constants/quotes";
import { Quote } from "../utils/type";

const API_URL = "https://api.quotable.io";

export const fetchRandomQuote = async () => {
  try {
    const res = await axios.get(`${API_URL}/random`);

    return {
      loading: false,
      data: res.data as Quote,
      error: null,
    };
  } catch (error: any) {
    const randomFallback =
      fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];

    return {
      loading: false,
      data: {
        _id: "fallback",
        content: randomFallback,
        author: "Quotify",
        tags: ["fallback"],
      },
      error: error.message || "Failed to fetch quote",
    };
  }
};
export const fetchQuotes = async () => {
  try {
    const res = await axios.get(`${API_URL}/quotes/random?limit=10`);

    return {
      loading: false,
      data: res.data as Quote[],
      error: null,
    };
  } catch (error: any) {
    return {
      loading: false,
      data: null,
      error: error.message || "Failed to fetch quote",
    };
  }
};

export const searchQuote = async (search: string) => {
  try {
    const res = await axios.get(
      `${API_URL}/search/quotes/?query=${search}&limit=10&page=1`
    );

    return {
      loading: false,
      data: res.data as Quote[],
      error: null,
    };
  } catch (error: any) {
    return {
      loading: false,
      data: null,
      error: error.message || "Failed to search quotes",
    };
  }
};
