import axios from "axios";

const API = axios.create({
  baseURL: "https://natyalaya-backend.onrender.com/api",
});

// Attach JWT token to every request if present
API.interceptors.request.use((config) => {
  const token =
    localStorage.getItem("natyalaya_token") ||
    sessionStorage.getItem("natyalaya_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// AUTH
export const signupUser = (data) => API.post("/user/signup", data);
export const loginUser = (data) => API.post("/auth/login", data);
export const loginAdmin = (data) => API.post("/auth/admin-login", data);
export const checkEmail = (data) => API.post("/user/check-email", data);
export const verifyOtp = (data) => API.post("/user/verify-otp", data);
export const resetPassword = (data) => API.post("/user/reset-password", data);

// STUDENTS
export const registerStudent = (data) => API.post("/students/register", data);
export const getStudents = () => API.get("/students");
export const updateStudentStatus = (id, status) =>
  API.put(`/students/${id}/status`, { status });
export const deleteStudent = (id) => API.delete(`/students/${id}`);

// CONTACT
export const submitContact = (data) => API.post("/contact", data);
export const getMessages = () => API.get("/contact");
export const replyMessage = (id, reply) =>
  API.put(`/contact/${id}/reply`, { reply });
export const deleteMessage = (id) => API.delete(`/contact/${id}`);

// GALLERY
export const uploadGalleryImage = (formData) =>
  API.post("/gallery/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const getGallery = () => API.get("/gallery");
export const deleteGalleryImage = (id) => API.delete(`/gallery/${id}`);
export const updateGalleryImage = (id, data) => API.put(`/gallery/${id}`, data);

// STATISTICS
export const getStatistics = () => API.get("/statistics");

// REVENUE
export const getRevenue = () => API.get("/revenue");

// PAYMENT
export const createRazorpayOrder = (amount) => API.post("/payment/create-order", { amount });

export default API;
