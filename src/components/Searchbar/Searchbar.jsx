import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import {
  FormContainer,
  SearchInput,
  Button,
  TextButton,
} from './Searchbar.styles';

function Searchbar({ onSubmitForm }) {
  const [search, setSearch] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (search.trim() === '') {
      reset();
      return toast.error('Please enter something to start your search!');
    }

    onSubmitForm(search.trim());
    reset();
  };

  const reset = () => {
    setSearch('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <SearchInput
        onChange={handleChange}
        value={search}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
      />
      <Button type="submit">
        <TextButton>Search</TextButton>
      </Button>
    </FormContainer>
  );
}

Searchbar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default Searchbar;
