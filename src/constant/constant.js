// http status codes
export const StatusCode = {
  Success: 200,
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  Conflict: 409,
  InternalServer: 500,
};

export const colors = {
  primary: "#14d0ffb8",
  white: "#FFFFFF",
  red: "#e11d48",
  darkRed: "#7f1d1d",
  skyblue: "#7dd3fc",
  darkBlue: "#1d4ed8",
  textColor: "#414141",
  grayBg: "#f4f4f4",
  grayText: "#b81a1a",
  grayBorder: "#14d0ffb8",
  lightGrayBorder: "#14d0ffb8",
  lightTextColor: "#838383",
  greenText: "#b81a1a",
};

export const defaultFilter = {
  pageIndex: 1,
  pageSize: 9,
  keyword: "",
};

export const RecordsPerPage = [5, 10, 20, 50, 100];
