import { AxiosPromise } from "axios";

import { http } from "@/services";

import { IParams } from "@/helpers/interfaces";

import * as Types from "./types";

export const List = ({
  params,
}: {
  params: IParams;
}): AxiosPromise<Types.IApi.List.Response> =>
  http.request.post("/admin/products/pageable", {
    perPage: params.perPage,
    page: params.page,
    sort: params.sort,
    search: params.filter,
  });

export const Single = ({
  id,
}: {
  id: string;
}): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.get(`/admin/products/${id}`);

export const Create = ({
  values,
}: {
  values: Types.IForm.Values;
}): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.post("/admin/products", {
    name: values.name,
    price: values.price,
    description: values.description,
    photoIds: [values.photoIds],
    categoryId: values.categoryId,
    status: values.status,
  });

export const Update = ({
  id,
  values,
}: {
  id: string;
  values: Types.IForm.Values;
}): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.put(`/admin/products/${id}`, {
    name: values.name,
    price: values.price,
    description: values.description,
    photoIds: values.photoIds,
    categoryId: values.categoryId,
    status: values.status,
  });

export const Delete = ({
  id,
}: {
  id: string;
}): AxiosPromise<Types.IApi.Single.Response> =>
  http.request.delete(`/admin/products/${id}`);
