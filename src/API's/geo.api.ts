export const GEO_URL: string =
  "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";

export const GEO_OPTIONS: RequestInit = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_GEO_KEY,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
