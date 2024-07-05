const apiKey = process.env.NEXT_PUBLIC_RAPID_API_KEY;
import axios from "axios";

if (!apiKey) {
  throw new Error("Missing NEXT_PUBLIC_RAPID_API_KEY environment variable");
}

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
    maxResults: "30",
  },
  headers: {
    "x-rapidapi-key": apiKey,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchResult = async (url: string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
  } catch (error) {
    console.error(error);
  }
};
