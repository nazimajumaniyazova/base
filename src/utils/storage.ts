export const setItem = (key: string, data: string) => {
  try {
    localStorage.setItem(key, data);
  } catch (error) {
    console.log("Error saving user data");
  }
};

export const getItem = (key: string) => {
  try {
    if (key) {
      return localStorage.getItem(key);
    }
  } catch (error) {
    console.log("Error saving user data");
  }
};

export const removeItem = (key: string) => {
  try {
    return localStorage.removeItem(key);
  } catch (error) {
    console.log("Error removing user data");
  }
};
