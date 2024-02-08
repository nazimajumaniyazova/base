import axios from "../api";

export const apiContacts = {
  async getContacts() {
    const { data } = await axios.get("/users");

    if (data?.isError) throw new Error("Error getting contacs");

    return data;
  },
  async getContact(contactId: string) {
    const { data } = await axios.get(`/users/${contactId}`);

    if (data?.isError) throw new Error("Error getting contacs");

    return data;
  },
};
