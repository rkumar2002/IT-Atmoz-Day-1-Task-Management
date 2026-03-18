import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.example.com",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export const fetchTasks = (params) =>
  apiClient.get("/tasks", { params });

export const createTask = (data) =>
  apiClient.post("/tasks", data);

export const updateTask = (id, data) =>
  apiClient.put(`/tasks/${id}`, data);

export const deleteTask = (id) =>
  apiClient.delete(`/tasks/${id}`);

export default apiClient;
