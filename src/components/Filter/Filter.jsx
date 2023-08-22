import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/filterSlice';
import { Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <>
      <label htmlFor="">
        <span>Find contacts by name</span>
      </label>
      <Input
        value={filter}
        onChange={evt => dispatch(filterContact(evt.currentTarget.value))}
        type="text"
        name="filter"
        placeholder="Find contacts by name"
      />
    </>
  );
};