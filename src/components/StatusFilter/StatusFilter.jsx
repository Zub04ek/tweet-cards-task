import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from '../../redux/constants';
import { selectStatusFilter } from 'redux/selectors';
import { setStatusFilter } from 'redux/filterSlice';
import { Field } from './StatusFilter.styled';

export const StatusFilter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = e => {
    dispatch(setStatusFilter(e.target.value));
  };

  return (
    <Field value={filter} onChange={handleFilterChange}>
      <option defaultValue={statusFilters.all}>All</option>
      <option value={statusFilters.follow}>Follow</option>
      <option value={statusFilters.following}>Following</option>
    </Field>
  );
};
