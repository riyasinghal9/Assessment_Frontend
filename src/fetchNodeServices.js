let ServerURL = "http://localhost:4000";

const getData = async (url, params = {}) => {
  try {
    const queryParams = new URLSearchParams(params);
    const response = await fetch(`${ServerURL}/${url}?${queryParams}`);
    return await response.json();
  } catch (e) {
    return null;
  }
};

const postData = async (url, body) => {
  try {
    const response = await fetch(`${ServerURL}/${url}`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify(body),
    });
    return await response.json();
  } catch (e) {
    return null;
  }
};

export { ServerURL, getData, postData };
