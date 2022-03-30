export function addNewApp(newAppData, refresh) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: newAppData.id,
      title: newAppData.title,
      image: newAppData.image,
      url: newAppData.url,
    }),
  };
  return fetch("http://localhost:3000/appsarray/", requestOptions)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
    .then(() => refresh())
    .catch((response) => {
      console.error(response.error);
    });
}
