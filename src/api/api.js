import axios from 'axios';

const BASEURL = 'https://64e39ca0bac46e480e7904a3.mockapi.io/';

export const contactAPI = axios.create({
  baseURL: `${BASEURL}`,
});

export const getContacts = async () => {
  const { data } = await contactAPI.get('/contacts');
  return data;
};

export const addContacts = async contact => {
  const { data } = await contactAPI.post('/contacts', contact);
  return data;
};

export const delContacts = async id => {
  const { data } = await contactAPI.delete(`/contacts/${id}`);
  return data;
};