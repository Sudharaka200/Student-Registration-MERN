import { useEffect, useState } from "react";
import Registration from "./Registration";
import Table from "./Table";
import Axios from "axios";

const UserForm = () => {
  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    Axios.get("http://localhost:3001/api/users")
      .then((response) => {
        setUsers(response?.data?.response || []);
      })
      .catch((error) => {
        console.error("Axios Error: ", error);
      });
  };

  const addUser = (data) => {
    setSubmitted(true);

    const payload = {
      id: data.id,
      name: data.name,
    };

    Axios.post("http://localhost:3001/api/createuser", payload)
      .then(() => {
        getUsers();
        setSubmitted(false);
      })
      .catch((error) => {
        console.error("Axios Error: ", error);
      });
  };

  return (
    <div>
      <Registration addUser={addUser} />
      <Table rows={users} />
    </div>
  );
};

export default UserForm;
