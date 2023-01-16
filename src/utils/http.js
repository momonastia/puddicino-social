const BASE_URL = "https://dummyjson.com";

const GET = async (resourse) => {
  const res = await fetch(`${BASE_URL}/${resourse}`);
  const data = await res.json();

  return data;
};

export default GET;
