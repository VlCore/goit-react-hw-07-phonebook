import { useState } from 'react';
import {Button, FieldNew, InputContainer, Lable, NewForm} from './SimpleForm.styled'
import { useDispatch } from 'react-redux';
import { addContactsThunk } from 'redux/contactsThunk';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SimpleForm = ({contacts}) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
  
    const handleChange = evt => {
      const { name, value } = evt.target;
      name === 'name' ? setName(value) : setNumber(value);
    };
  
    const handleSubmit = e => {
      e.preventDefault();
  
      const notify = () => toast(`${name} is already in contacts`);
      const contact = {
        name: name,
        phone: number,
      };
  
      if (
        contacts.some(value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase())
      ) {
        notify();
      } else {
        dispatch(addContactsThunk(contact));
        reset();
      }
    };

    const reset = () => {
      setName('');
      setNumber('');
    };
  
    return (
      <NewForm
        onSubmit={handleSubmit}
      >
        <InputContainer>
          <Lable>
            <span>Name</span>
          </Lable>
          <FieldNew
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            required
          />
        </InputContainer>
  
        <InputContainer>
          <Lable>
            <span>Number</span>
          </Lable>
          <FieldNew
            value={number}
            onChange={handleChange}
            type="tel"
            name="number"
            required
          />
        </InputContainer>
  
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          pauseOnHover
          theme="dark"
        />
        <Button type="submit">Add contact</Button>
      </NewForm>
    );
  };