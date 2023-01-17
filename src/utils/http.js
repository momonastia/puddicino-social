const BASE_URL = "https://dummyjson.com";

const GET = async (resourse) => {
  const res = await fetch(`${BASE_URL}/${resourse}`);
  const data = await res.json();

  return data;
};

const POST = async (resource, body) => {
  const res = await fetch(`${BASE_URL}/${resource}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();

  return data;
};

export { GET, POST };
