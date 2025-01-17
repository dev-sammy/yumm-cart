export const sendHttpRequest = async (url, config) => {
  const response = await fetch(url, config);
  const result = await response.json();

  if (!response.ok) {
    throw new Error(
        result.message || "Something went wrong! Please try again."
      );
  } 

  return result;
};
