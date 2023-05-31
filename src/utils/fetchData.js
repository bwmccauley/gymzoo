export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '62719e8727msh9d87ca288ae2eb8p104745jsn748a77eff1bb',
      'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_KEY
    }
  };

export const fetchData = async (url, options) => {
    const repsonse = await fetch(url, options);
    const data = await response.json();

    return data;
}