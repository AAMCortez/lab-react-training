import { useState } from 'react';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('');

  function handleFormSubmit(event) {
    event.preventDefault();
    const newUser = {
      _id: new Date().getMilliseconds(),
      email: email,
      password: password,
      nationality: nationality,
    };
    console.log('Adding User: ', newUser);

    setEmail('');
    setPassword('');
    setNationality('');
  }
  function handleEmailInput(event) {
    setEmail(event.target.value)
  }
  function handlePasswordInput(event) {
    setPassword(event.target.value)
  }
  function handleNationalityInput(event) {
    setNationality(event.target.value)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="email">Email</label>
      <input
        onChange={handleEmailInput}
        type="email"
        id="email"
        value={email}
      />
      <label htmlFor="password">Password</label>
      <input
        onChange={handlePasswordInput}
        type="password"
        id="password"
        value={password}
      />
      <label htmlFor="nationality">Nationality</label>
      <select
        onChange={handleNationalityInput}
        id="nationality"
        value={nationality}
      >
        <option value="en">English</option>
        <option value="pt">Português</option>
        <option value="fr">François</option>
      </select>
      <button type="submit">Signup</button>
    </form>
  );
}
export default SignupPage;
