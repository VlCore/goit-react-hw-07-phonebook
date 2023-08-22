import PropTypes from 'prop-types';
import {Button} from '../Form/SimpleForm.styled'
import { useDispatch } from 'react-redux';
import { delContactsThunk } from 'redux/contactsThunk';
import { List } from './ContactsList.styled';

export const ContactsList = ({ listContact }) => {
    const dispatch = useDispatch();
  
    const handleDeleteClick = (id) => {
      dispatch(delContactsThunk(id));
    };
  
    return (
      <List>
        {listContact.map((cont) => (
          <p key={cont.id}>
           <span>
          {cont.name}: {cont.phone}
        </span>
            <Button onClick={() => handleDeleteClick(cont.id)}>Delete</Button>
          </p>
        ))}
      </List>
    );
  };
  
  ContactsList.propTypes = {
    listContact: PropTypes.array.isRequired,
  };