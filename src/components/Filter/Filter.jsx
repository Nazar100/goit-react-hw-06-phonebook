import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import contactsActions from '../../redux/actions';

import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label>
      Filter
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={e => {
          return dispatch(contactsActions.changeFilter(e.target.value));
        }}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
