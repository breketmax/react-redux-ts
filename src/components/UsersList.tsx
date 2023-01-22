import React, { useEffect } from 'react';
import { useTypedDispatch } from '../hooks/useTypedDispatch';
import { useTypedSelector } from '../hooks/useTypeSelector';

import { fetchUsers } from '../store/action-creator/user';

const UsersList = () => {
  const dispatch = useTypedDispatch();
  const {users,loading,error} = useTypedSelector(state=> state.users);
  useEffect(() => {
    dispatch(fetchUsers())
  }, []);
  if(loading){
    return <h1>Loading lol</h1>   
  }
  if(error){
    return <h1>{error}</h1>
  }
   return (
    
    <div>
      <ul>
         {users.map(user => (<li>{user.name}</li>))}
      </ul>
    </div>
  );
};

export default UsersList;