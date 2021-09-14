import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-actions';
import {
  getVisibleContacts,
  getContacts,
} from '../../redux/contacts/contacts-selectors';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import s from './PhonebookList.module.css';
import popTransition from '../../utils/transitions/pop.module.css';
import { BsXSquareFill } from 'react-icons/bs';

export default function PhonebookList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(getVisibleContacts);
  const contacts = useSelector(getContacts);

  return (
    <>
      <CSSTransition
        in={!contacts.length}
        timeout={250}
        classNames={popTransition}
        mountOnEnter
        unmountOnExit
      >
        <p>Your phonebook is empty. Please add contact.</p>
      </CSSTransition>
      <TransitionGroup component="ul" className={s.list}>
        {visibleContacts.map(({ id, name, number }) => (
          <CSSTransition
            key={id}
            timeout={250}
            mountOnEnter
            unmountOnExit
            classNames={popTransition}
          >
            <li className={s.listItem}>
              <p className={s.info}>
                <b>{name}</b>
                <em>{number}</em>
              </p>
              <BsXSquareFill
                color="red"
                size="20px"
                className={s.btn}
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              ></BsXSquareFill>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
}
