import { Divider, Pagination, Spin, Table, Tag, Tooltip } from "antd";
import Title from "antd/es/typography/Title";
import { useEffect, useState } from "react";
import { IoCheckmark, IoCloseOutline } from "react-icons/io5";
import { useUsersStore } from "../../../../store/users";
import { Permissions } from "./permissions.enum";

const DashboardUsers = () => {
  const [loading, setLoading] = useState(false);
  const { users, fetchUsers } = useUsersStore();
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const onChangePage = (currentPage) => setPage(currentPage);

  const columns = [
    {
      title: 'User',
      dataIndex: 'username',
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Active',
      dataIndex: 'active',
      render: (_, record) => (
        <>
          {record.active ? (
            <Tooltip title={'Activo'}>
              <IoCheckmark color="green" />
            </Tooltip>
          ) : (
            <Tooltip title={'No está activo'}>
              <IoCloseOutline color="red" />
            </Tooltip>
          )}
        </>
      ),
    },
    {
      title: 'Permisos',
      dataIndex: 'permisos',
      render: (_, record) => (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {record.role.permissions.map((permission) => (
            <Tag key={permission.name} style={{ marginBottom: '10px' }} color="geekblue">
              {Object.keys(Permissions).includes(permission.name) ? permission.name : ''}
            </Tag>
          ))}
        </div>
      ),
    },
  ];

  // Filtrar los datos según la página actual
  const getPaginatedData = () => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    return users.slice(startIndex, endIndex);
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (loading) {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <Spin size="large" spinning={true} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        </Spin>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '1.5rem' }}>
      <Title level={3} style={{margin: 0}}>Usuarios</Title>
      <Divider />
      {users && users.length ? (
        <>
          {/* Contenedor de la tabla con scroll */}
          <div style={{ width: '100%', overflowY: 'auto' }}>
            <Table
              columns={columns}
              dataSource={getPaginatedData()}
              pagination={false}
            />
          </div>

          {/* Paginación fuera de la tabla */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <Pagination
              current={page}
              pageSize={pageSize}
              total={users.length}
              onChange={onChangePage}
            />
          </div>
        </>
      ) : (
        <p>No hay usuarios para mostrar</p>
      )}
    </div>
  );
};

export default DashboardUsers;