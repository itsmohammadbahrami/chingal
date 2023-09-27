import { Avatar, Card, Space, Typography } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { PageLayout } from 'src/components'
import { UserDataState, State } from 'src/interfaces'
import { getUser } from 'src/redux'
import { user as string } from 'src/utils/string'
import EditUser from './edit-user'
import { testIds } from 'src/utils/constant'

const User = () => {
    const dispatch = useDispatch<any>()
    const { id } = useParams()
    const { user, loading }: UserDataState = useSelector((state: State) => state.userData)

    useEffect(() => {
        id && dispatch(getUser(id));
    }, []) // eslint-disable-line

    return (
        <PageLayout>
            <Card
                className='w-3/4 h-auto max-h-[600px] p-10 rounded-3xl m-auto overflow-y-auto md:w-[540px]'
                data-testid={testIds.editUser.card}
                loading={loading}
                title={
                    <Typography.Text
                        className='text-2xl font-normal'
                        data-testid={testIds.editUser.cardTitle}>
                        {string.cardTitle}
                    </Typography.Text>
                }>
                <Space className='w-full' direction='vertical' size={28} align='center'>
                    <Avatar
                        className='w-28 h-28 border-blue-500 border-2'
                        data-testid={testIds.editUser.avatar}
                        src={user?.avatar}
                        alt='Avatar' />
                    <EditUser />
                </Space>
            </Card>
        </PageLayout>
    )
}

export default User