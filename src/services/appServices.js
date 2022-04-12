import axios from "axios";

export const get = async (url) => {
  const response = await fetch(`${url}`);
  const data = await response.json();
  const appsData = await data;
  return appsData;
};

export const post = async (url, fetchMethod, newAppData) => {
  return fetch(`${url}`, {
    method: `${fetchMethod}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: newAppData.id,
      title: newAppData.title,
      image: newAppData.image ? newAppData.image : null,
      group: newAppData.group,
      url: newAppData.url,
    }),
  }).then((res) => res.json());
};

export function addNewApp(newAppData) {
  // return fetch("http://localhost:3000/apps", {
  return fetch(
    "https://sheet.best/api/sheets/e639cc5d-2203-4c98-bc4a-e2182b1eca35",
    {
      method: "POST",
      mode: "cors",
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({
      //   id: newAppData.id,
      //   title: newAppData.title,
      //   image: newAppData.image,
      //   group: newAppData.group,
      //   url: newAppData.url,
      //   "Created at": new Date(),
      // }),
      body: JSON.stringify(newAppData),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

// export const postNewApp = (newAppData) => {
//   axios
//     .post(
//       "https://sheet.best/api/sheets/e639cc5d-2203-4c98-bc4a-e2182b1eca35",
//       newAppData
//     )
//     .then((response) => {
//       console.log(response);
//     });
// };

export function updateApp(newAppData) {
  return fetch(
    `https://sheet.best/api/sheets/e639cc5d-2203-4c98-bc4a-e2182b1eca35/id/*${newAppData.id}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAppData),
    }
  ).then((res) => res.json());
}

// export const uploadFileToJSON = () => {
//   return fetch(`http://localhost:3000/apps/${newAppData.id}`, {
//     method: "PUT",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       id: newAppData.id,
//       title: newAppData.title,
//       image: newAppData.image ? newAppData.image : null,
//       group: newAppData.group,
//       url: newAppData.url,
//     }),
//   }).then((res) => res.json());
// };

export const loadApps = async (url) => {
  // const response = await fetch("http://localhost:3000/appsarray/");
  // const response = await fetch(`${url}`);
  const response = await fetch(
    "https://sheet.best/api/sheets/e639cc5d-2203-4c98-bc4a-e2182b1eca35"
  );
  const data = await response.json();
  const appsData = await data;
  console.log("appsData:", appsData);
  return appsData;
};

export const deleteApp = async (id) => {
  return fetch(
    `https://sheet.best/api/sheets/e639cc5d-2203-4c98-bc4a-e2182b1eca35/id/*${id}*`,
    {
      method: "DELETE",
      mode: "cors",
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  ).then(() => {
    console.log("App id deleted", id);
  });
};

// export const deleteApp = async (url, id) => {
//   return fetch(`${url / id}`, {
//     method: "DELETE",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   }).then(() => {
//     console.log("App id deleted", id);
//   });
// };

export function customFetch(fetchMethod, url, newAppData, id) {
  return fetchMethod === "GET"
    ? get(url)
    : fetchMethod === "POST"
    ? post(url, fetchMethod, newAppData)
    : fetchMethod === "DELETE"
    ? deleteApp(url, id)
    : null;
}
export const customURL = "http://localhost:3000/apps";
