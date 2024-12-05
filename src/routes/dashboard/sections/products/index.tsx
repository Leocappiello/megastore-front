import { Divider, Pagination, Spin, Table } from "antd";
import Title from "antd/es/typography/Title";
import { useEffect, useState } from "react";
import { useAuthStore } from "../../../../store/auth";
import { useProductsStore } from "../../../../store/products";

const columns = [
    {
        title: 'Product',
        dataIndex: 'name',
    },
    {
        title: 'Cantidad',
        dataIndex: 'quantity',
    },
    {
        title: 'Precio',
        dataIndex: 'price',
    }
]

const DashboardProducts = () => {
    const [loading, setLoading] = useState(false);
    const { allProducts, fetchAllProducts } = useProductsStore();
    useProductsStore(state => state.products);
    const [page, setPage] = useState(1);
    const onChangePage = (currentPage) => setPage(currentPage);
    const pageSize = 5;
    const token = useAuthStore((state) => state.token);

    useEffect(() => {
        fetchAllProducts(token)
    }, [fetchAllProducts, token])

    if (loading) {
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <Spin size="large" spinning={true} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                </Spin>
            </div>
        )
    }

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '1.5rem' }}>
            <Title level={3} style={{margin: 0}}>Productos</Title>
            <Divider />
            {allProducts && allProducts.length ? (
                <>
                <div style={{ width: '100%', overflowY: 'auto' }}>
                    <Table
                        columns={columns}
                        dataSource={allProducts}
                        pagination={false}
                        // scroll={{ y: 300 }}
                    />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                    <Pagination
                        current={page}
                        pageSize={pageSize}
                        onChange={onChangePage}
                    />
                </div>
                </>
            ) : (
                <p>No hay usuarios para mostrar</p>
            )}
        </div>
    )
}

export default DashboardProducts