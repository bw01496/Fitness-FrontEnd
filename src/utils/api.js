const { REACT_APP_API_URL = `https://fitnesstrac-kr.herokuapp.com/api` } =
  process.env;

export const callApi = async ({ url, method, body, token }) => {
  console.log(token);
  try {
    const options = {
      method: method ? method.toUpperCase() : "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    if (token) options.headers["Authorization"] = `Bearer ${token}`;
    const response = await fetch(`${REACT_APP_BASE_URL}${url}`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
