import axios from 'axios';
import { fetchfirst } from './contactsSlice';

const URL = 'https://642fd67cb289b1dec4bb2a03.mockapi.io/contacts';

export const fetchContacts = () => async dispatch => {
  try {
    const response = await axios.get(URL);
    dispatch(fetchfirst(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
