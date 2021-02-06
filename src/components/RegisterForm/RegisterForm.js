import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { registerAuth } from '../redux/auth';

import s from './RegisterForm.module.css';

const RegisterForm = () => {
  // const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   // dispatch(registerAuth({ name, email, password }));
  //   setName('');
  //   setEmail('');
  //   setPassword('');
  // };

  return (
    <div>
      <h1>Page of registration</h1>

      <form
        //  onSubmit={handleSubmit}
        className={s.form}
        autoComplete="off"
      >
        <label className={s.label}>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label className={s.label}>
          Mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
