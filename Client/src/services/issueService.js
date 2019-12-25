import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/issues";

export function issuePost({ title, text, createdby, assignedto, status }) {
  return http.post(apiEndpoint, {
    title: title,
    text: text,
    createdby: createdby,
    assignedto: assignedto,
    status: status,
  });
}