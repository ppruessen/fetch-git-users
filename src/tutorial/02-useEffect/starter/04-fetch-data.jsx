import { useEffect, useState } from "react";


const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(url);
      const users = await response.json();
      setUsers(users);
    } catch (error) {
      consolelog(error);
    }

  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return <section className="container">
    <h2>Github Users</h2>
    <div className="user-container">
      <ul className="users">
        {users.map((user) => {
          const { id, avatar_url, login, html_url } = user;
          return (
          <li key={id}>
            <img src={avatar_url} alt={login} className="img"/>
            <h3><a href={html_url}>{login}</a></h3>
          </li>
          )
        })}
      </ul>
    </div>
    </section>;
};
export default FetchData;
