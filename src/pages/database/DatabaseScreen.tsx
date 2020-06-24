import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createUser } from '../../graphql/mutations';
import { listUsers } from '../../graphql/queries';
// import types from './types';

const initialUsers: {uid: string, name: string, email: string, id: string }[] = [];
const initialState = { name: '', uid: '', email: '', id: '' };

const DatabaseScreen = () => {
  const [formState, setFormState] = useState(initialState);
  const [users, setUsers] = useState(initialUsers);

  useEffect(() => {
    fetchUsers()
  }, []);

  function setInput(key: string, value: string) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchUsers() {
    try {
      const userData = await API.graphql(graphqlOperation(listUsers));
      /*@ts-ignore*/
      const users = userData.data.listUsers.items;
      setUsers(users);
    } catch (err) { console.log('error', err); }
  }

  async function addUser() {
    try {
      if (!formState.name || !formState.uid || !formState.email) return;
      const user = { ...formState };
      setUsers([ ...users, user ]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createUser, { input: user }));
    } catch (err) {
      console.log('error', err);
    }
  }

  return (
    <div>
      <h1>Database</h1>
      <input
        onChange={(event) => setInput('name', event.target.value)}
        value={formState.name}
        placeholder='Name'
      />
      <input
        onChange={(event) => setInput('uid', event.target.value)}
        value={formState.uid}
        placeholder='uid'
      />
      <input
        onChange={(event) => setInput('email', event.target.value)}
        value={formState.email}
        placeholder='Email'
      />
      <input
        onChange={(event) => setInput('id', event.target.value)}
        value={formState.id}
        placeholder='ID'
      />
      <button
        onClick={() => {
          addUser();
        }}
      >
        Create User
      </button>
      {users.map(
        (user: { uid: string; name: string; email: string, id: string }, index: number,) => (
          <div key={user.uid ? user.uid : index}>
            <p>{user.name} {user.email} {user.uid} {user.id}</p>
          </div>
        )
      )}
    </div>
  );
}

export default DatabaseScreen;
