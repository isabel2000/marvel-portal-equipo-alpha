
export async function getAndMap(url, { queryParams, mappedBy}) {
  const params = objectToURLString(queryParams);
  const data = await myFetch(`${url}${params}`);
  const mappedResults = data.results.map(mappedBy);
  console.log(mappedResults)
  return {
    ...data,
    results: mappedResults
  };
}

async function myFetch(url) {

  const response = await fetch(url, {  
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .catch((error) => error);
    console.log(response.data);
    return response.data;
}

function objectToURLString(params = {}) {
  const res = new URLSearchParams(params).toString();
  console.log(res);
  return `?${res}`;
};
