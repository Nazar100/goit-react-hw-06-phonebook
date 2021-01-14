import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import contactsActions from '../../redux/actions';
import { getVisibleContacts } from '../../redux/selectors';

import s from './Contacts.module.css';

export default function Contacts() {
  const contacts = useSelector(getVisibleContacts);

  const dispatch = useDispatch();

  const deleteContact = id => dispatch(contactsActions.deleteContact(id));

  return (
    <ul>
      {contacts.length > 0 &&
        contacts.map(({ name, number, id }) => {
          return (
            <li key={id}>
              <span className={s.name}>Name: {name}</span>
              <span className={s.number}>Number: {number}</span>
              <button
                className={s.button}
                data-key={id}
                onClick={() => deleteContact(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      {contacts.length === 0 && <li className={s.empty}>List is Empty</li>}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
};
