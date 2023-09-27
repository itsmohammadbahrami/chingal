import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PageLayout } from 'src/components'
import { UserDataState, State, User, AppDataState } from 'src/interfaces'
import { getUsers, setSortOrder } from 'src/redux'
import { users as string } from 'src/utils/string'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
import { path } from 'src/routes'
import { testIds } from 'src/utils/constant'

interface DataType {
    key?: string;
    name: string;
    age: number;
    phone: string;
    email: string;
    address: string;
    company: string;
}


const Users = () => {
    const dispatch = useDispatch<any>()
    const navigate = useNavigate()
    const { users, loading }: UserDataState = useSelector((state: State) => state.userData)
    const { searchText, sortOrder }: AppDataState = useSelector((state: State) => state.appData)

    const columns: ColumnsType<DataType> = string.tableHeaders.map(
        ({ title, dataIndex, sorter }) => ({
            key: title,
            title: title,
            dataIndex,
            align: 'center',
            sorter,
            defaultSortOrder: sortOrder?.[dataIndex],
        })
    );
    columns[0].fixed = 'left';

    const tableData: DataType[] | undefined =
        users && users.length > 0 ?
            users.map((user: User, index) => ({
                key: user.id + '',
                name: user.name,
                age: dayjs().diff(user.dateOfBirth, 'years'),
                phone: user.phoneNumber,
                email: user.email,
                address: `${user.country} - ${user.city} - ${user.street} - ${user.zipcode}`,
                company: user.company,
            }))
            : undefined

    useEffect(() => {
        dispatch(getUsers());
    }, []) // eslint-disable-line

    return (
        <PageLayout displaySearch>
            <Table
                className='rounded-2xl'
                data-testid={testIds.users.table}
                columns={columns}
                dataSource={
                    searchText ?
                        tableData?.filter(item => item.name.includes(searchText))
                        : tableData}
                loading={loading}
                scroll={{ x: 1000, y: 520 }}
                size='middle'
                pagination={{ hideOnSinglePage: true, pageSize: 10 }}
                onRow={(data, index) => {
                    return {
                        'data-testid': testIds.users.tableRow + index,
                        onClick: () => data.key && path.users.items.user?.getDynamicHref &&
                            navigate(path.users.items.user?.getDynamicHref(data.key)),
                        className: 'cursor-pointer'
                    }
                }}
                showSorterTooltip={false}
                onChange={(pagination, filters, sorter, extra) => {
                    dispatch(setSortOrder({
                        //@ts-ignore
                        [sorter.field]: sorter.order
                    }))
                }}
            />
        </PageLayout>
    )
}

export default Users