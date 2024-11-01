import { Spin } from "antd";
import { useEffect, useState } from "react";
import { useUsersStore } from "../../../../store/users";

const DashboardUsers = () => {
  // const { users, fetchUsers } = useUsersStore();
  const [loading, setLoading] = useState(false);

  const { users, fetchUsers } = useUsersStore();

  useEffect(() => {
      fetchUsers(); // Cargar usuarios al montar el componente
  }, [fetchUsers]);

  useEffect(() => {
    console.log(users);
  }, [users])

  // useEffect(() => {
  //   setLoading(true)
  //   fetchUsers();
  // }, [fetchUsers])

  // useEffect(() => {
  //   console.log(users);
  // }, [users])

  
  if (loading) {
    return (
      <div style={{width: '100%', height: '100%'}}>
        <Spin size="large" spinning={true} style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        </Spin>
      </div>
    )
  }

  return (
    <div>
      {
        users && users.length ?
        users.map(user => {
          return (
            <p>{user.name}</p>
          )
        })
        :
        <p>No hay usuarios para mostrar</p>
      }
    </div>
  )
}

export default DashboardUsers