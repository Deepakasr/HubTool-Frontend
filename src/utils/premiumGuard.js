import axios from "axios";
import API_BASE_URL from "../config/api";

export const checkPremiumAccess = async (category, toolName, navigate) => {
  const token = localStorage.getItem("token");

  // Login nahi
  if (!token) {
    navigate("//auth", {
      state: {
        category,
        toolName,
        requireLogin: true,
      },
    });

    return false;
  }

  try {
    const response = await axios.get(`${API_BASE_URL}/subscription/check`, {
      params: {
        category,
        toolName,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data.access) {
      return true;
    }

    navigate("/premium", {
      state: {
        category,
        toolName,
      },
    });

    return false;
  } catch (err) {
    console.error(err);

    navigate("//auth", {
      state: {
        category,
        toolName,
        requireLogin: true,
      },
    });

    return false;
  }
};
