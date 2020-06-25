import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { Tabs, Tab, Container } from 'react-bootstrap';
import { createUser, createPortal } from '../../graphql/mutations';
import { listUsers, listPortals } from '../../graphql/queries';
import { User, Item, Portal } from './types';

const initialUsers: User[] = [];
const initialuserFormState = { name: '', email: '', id: '', location: '' };
const initialPortalFormState = { name: '', id: '' };
const initialPortalState: Portal[] = [];

const DatabaseScreen = () => {
  const [userFormState, setuserFormState] = useState(initialuserFormState);
  const [portalFormState, setPortalFormState] = useState(initialPortalFormState);
  const [users, setUsers] = useState(initialUsers);
  const [portals, setPortals] = useState(initialPortalState);

  useEffect(() => {
    fetchUsers()
  }, []);

  useEffect(() => {
    fetchPortals()
  }, []);

  function setInput(key: string, value: string) {
    setuserFormState({ ...userFormState, [key]: value });
  }

  function setPortalInput(key: string, value: string) {
    setPortalFormState({ ...portalFormState, [key]: value });
  }

  async function fetchUsers() {
    try {
      const userData = await API.graphql(graphqlOperation(listUsers));
      /*@ts-ignore*/
      const users = userData.data.listUsers.items;
      setUsers(users);
    } catch (err) { console.log('Error fetching users', err); }
  }

  async function fetchPortals() {
    try {
      const portalData = await API.graphql(graphqlOperation(listPortals));
      /*@ts-ignore*/
      const portals = portalData.data.listPortals.items;
      setPortals(portals);
    } catch (err) { console.log('Error fetching portals', err); }
  }

  async function addUser() {
    try {
      if (!userFormState.name || !userFormState.location || !userFormState.email) return;
      const items: Item[] = [];
      const newUser: User = { ...userFormState, organization: false, items };
      setUsers([ ...users, newUser ]);
      setuserFormState(initialuserFormState);
      await API.graphql(graphqlOperation(createUser, { input: newUser }));
    } catch (err) {
      console.log('error', err);
    }
  }

  async function addPortal() {
    try {
      if (!portalFormState.name || !portalFormState.id) return;
      const items: Item[] = [];
      // const connectedUsers: User[] = [];
      // const connectedOrganizations: User[] = [];
      const newPortal: Portal = { ...portalFormState, items };
      setPortals([ ...portals, newPortal ]);
      setPortalFormState(initialPortalFormState);
      await API.graphql(graphqlOperation(createPortal, { input: newPortal }));
    } catch (err) { console.log('Add portal error:', err); }
  }

  return (
    <div>
      <Container>
        <h1>Database</h1>
        <Tabs defaultActiveKey="users" id="uncontrolled-tab-example">
          <Tab eventKey="users" title="Users">
            <h2>Add User</h2>
            <input
              onChange={(event) => setInput('name', event.target.value)}
              value={userFormState.name}
              placeholder='Name'
            />
            <input
              onChange={(event) => setInput('location', event.target.value)}
              value={userFormState.location}
              placeholder='location'
            />
            <input
              onChange={(event) => setInput('email', event.target.value)}
              value={userFormState.email}
              placeholder='Email'
            />
            <input
              onChange={(event) => setInput('id', event.target.value)}
              value={userFormState.id}
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
              (user: User, index: number,) => (
                <div key={user.id ? user.id : index}>
                  <p>{user.name} {user.email} {user.location} {user.id}</p>
                </div>
              )
            )}
          </Tab>
          <Tab eventKey="portals" title="Portals">
            <h2>Add Portal</h2>
            <input
              onChange={(event) => setPortalInput('name', event.target.value)}
              value={portalFormState.name}
              placeholder='Name'
            />
            <input
              onChange={(event) => setPortalInput('id', event.target.value)}
              value={portalFormState.id}
              placeholder='ID'
            />
            <button
              onClick={() => {
                addPortal();
              }}
            >
              Create Portal
            </button>
            {portals.map(
              (portal: Portal, index: number,) => (
                <div key={portal.id ? portal.id : index} style={{'border': '5px'}}>
                  <p>{portal.name} {portal.id}</p>
                </div>
              )
            )}
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default DatabaseScreen;
