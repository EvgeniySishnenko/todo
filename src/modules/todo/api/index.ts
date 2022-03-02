import { fetchApp } from "../../../core/http";

export const todoApi = (params: any) => {
  return fetchApp({
    method: params.method || "GET",
    params: params.body,
  })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
};
