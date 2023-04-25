import { useSelector, useDispatch } from 'react-redux';
// Імпортуємо генератор екшену
// import { setStatusFilter } from '../../redux/filtersSlice';
// import { selectStatusFilter } from 'redux/selectors';
// // Імпортуємо об'єкт значень фільтра
import { statusFilters } from '../../redux/constants';
import { selectStatusFilter } from 'redux/selectors';
import { setStatusFilter } from 'redux/filterSlice';
import { Field, Variant } from './StatusFilter.styled';

export const StatusFilter = () => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  // Отримуємо значення фільтра із стану Redux
  const filter = useSelector(selectStatusFilter);

  // Викликаємо генератор екшену та передаємо значення фільтра
  // Відправляємо результат - екшен зміни фільтра
  const handleFilterChange = e => {
    dispatch(setStatusFilter(e.target.value));
  };

  return (
    <Field value={filter} onChange={handleFilterChange}>
      {/* <option value="">Select status</option> */}
      <Variant
        defaultValue={statusFilters.all}
        // onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Variant>
      <Variant
        value={statusFilters.follow}
        // onClick={() => handleFilterChange(statusFilters.follow)}
      >
        Follow
      </Variant>
      <Variant
        value={statusFilters.following}
        // onClick={() => handleFilterChange(statusFilters.following)}
      >
        Following
      </Variant>
    </Field>
    // <div className={css.wrapper}>
    //   <Button
    //     selected={filter === statusFilters.all}
    //     onClick={() => handleFilterChange(statusFilters.all)}
    //   >
    //     All
    //   </Button>
    //   <Button
    //     selected={filter === statusFilters.active}
    //     onClick={() => handleFilterChange(statusFilters.active)}
    //   >
    //     Active
    //   </Button>
    //   <Button
    //     selected={filter === statusFilters.completed}
    //     onClick={() => handleFilterChange(statusFilters.completed)}
    //   >
    //     Completed
    //   </Button>
    // </div>
  );
};
