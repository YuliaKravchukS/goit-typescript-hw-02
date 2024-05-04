import axios from "axios";
import { Image } from "../../components/App/App.types";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
});

interface Api {
  results: Image[];
  total_pages: number;
}
export const fetchProductsByQuery = async (
  query = "",
  page = 1
): Promise<Api> => {
  const { data } = await instance.get("/search/photos", {
    params: {
      page: page,
      query: query,
      per_page: 30,
      client_id: "YthA28ivciqW6bJBl8Sgjx1VPtT-tIKW3K0Fl-khB4Q",
    },
  });
  return data;
};
