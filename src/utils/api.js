const { REACT_APP_API_URL = `https://fitnesstrac-kr.herokuapp.com/api` } =
  process.env;

export const callApi = async ({ url, method, body, token }) => {
  try {
    const options = {
      method: method.toUpperCase(),
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    options["authorization"] = `Bearer ${token}`;
    const respObject = await fetch(`${REACT_APP_API_URL}${url}`, options);
    const data = await respObject.json();
    if (data.error) {
      throw data.error;
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};
