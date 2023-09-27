import { Button, Col, Form, Input, InputNumber, Popconfirm, Row } from 'antd'
import dayjs from 'dayjs'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { State, UserDataState } from 'src/interfaces'
import { deleteUser, editUser } from 'src/redux'
import { path } from 'src/routes'
import { testIds } from 'src/utils/constant'
import { user as string } from 'src/utils/string'
import { validateEmail } from 'src/utils/utils'

const EditUser = () => {
    const dispatch = useDispatch<any>()
    const navigate = useNavigate()
    const [form] = Form.useForm()
    const { user, loading }: UserDataState = useSelector((state: State) => state.userData)

    useEffect(() => {
        if (!user) return

        form.setFieldsValue({
            ...user,
            age: dayjs().diff(user.dateOfBirth, 'years')
        })
    }, [user]) // eslint-disable-line

    const onSubmit = (values) => {
        dispatch(
            editUser({
                ...values,
                id: user?.id,
                dateOfBirth: dayjs().add(-values?.age, 'years').format('YYYY-MM-DDT00:00:00.000Z'),
            })
        )
    }

    const onDelete = () => {
        user?.id &&
            dispatch(deleteUser(user?.id, () => {
                navigate(path.users.root.href)
            }))
    }

    return (
        <Form
            name='edit-user-form'
            onFinish={onSubmit}
            layout='vertical'
            size='large'
            scrollToFirstError
            form={form}
            requiredMark={false}
        >
            <Row gutter={[28, 0]}>
                <Col xs={24} md={12}>
                    <Form.Item
                        className='w-full'
                        name='name'
                        label={string.formItems.name}
                        rules={[{
                            required: true,
                            message: string.formItems.message(string.formItems.name),
                        }]}>
                        <Input
                            autoFocus
                            data-testid={testIds.editUser.form.name}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item
                        className='w-full'
                        name='age'
                        label={string.formItems.age}
                        rules={[{ required: true, message: string.formItems.message(string.formItems.age) }]}>
                        <InputNumber
                            className='w-full'
                            data-testid={testIds.editUser.form.age} />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item
                        className='w-full'
                        name='email'
                        label={string.formItems.email}
                        rules={[{
                            required: true,
                            type: 'email',
                            validator: (_, value: string) => {
                                if (value?.trim()?.length === 0)
                                    return Promise.reject(new Error(string.formItems.message(string.formItems.email)));
                                else
                                    if (!validateEmail(value))
                                        return Promise.reject(new Error(string.formItems.emailFormatError));
                                return Promise.resolve();

                            },
                        }]}>
                        <Input data-testid={testIds.editUser.form.email} />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item
                        className='w-full'
                        name='phoneNumber'
                        label={string.formItems.phoneNumber}
                        rules={[{ required: true, message: string.formItems.message(string.formItems.phoneNumber) }]}>
                        <Input
                            data-testid={testIds.editUser.form.phone} />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item
                        className='w-full'
                        name='country'
                        label={string.formItems.country}
                        rules={[{ required: true, message: string.formItems.message(string.formItems.country) }]}>
                        <Input data-testid={testIds.editUser.form.country} />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item
                        className='w-full'
                        name='city'
                        label={string.formItems.city}
                        rules={[{ required: true, message: string.formItems.message(string.formItems.city) }]}>
                        <Input data-testid={testIds.editUser.form.city} />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item
                        className='w-full'
                        name='street'
                        label={string.formItems.street}
                        rules={[{ required: true, message: string.formItems.message(string.formItems.street) }]}>
                        <Input data-testid={testIds.editUser.form.street} />
                    </Form.Item>
                </Col>
                <Col xs={24} md={6}>
                    <Form.Item
                        className='w-full'
                        name='zipcode'
                        label={string.formItems.zipcode}
                        rules={[{ required: true, message: string.formItems.message(string.formItems.zipcode) }]}>
                        <Input data-testid={testIds.editUser.form.zipCode} />
                    </Form.Item>
                </Col>
                <Col xs={24}>
                    <Form.Item
                        className='w-full'
                        name='company'
                        label={string.formItems.company}
                        rules={[{ required: true, message: string.formItems.message(string.formItems.company) }]}>
                        <Input data-testid={testIds.editUser.form.company} />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Button
                        className='w-full mt-4 md:mt-0'
                        data-testid={testIds.editUser.form.edit}
                        htmlType='submit'
                        size='large'
                        type='primary'
                        disabled={loading}
                    >
                        {string.formItems.edit}
                    </Button>
                </Col>
                <Col xs={24} md={12}>
                    <Popconfirm
                        title={string.formItems.deleteTitle}
                        okText={string.formItems.yes}
                        cancelText={string.formItems.cancel}
                        onConfirm={onDelete}
                        okButtonProps={{
                            // eslint-disable-next-line
                            'data-testid': testIds.editUser.form.deleteConfirm
                        }}
                    >
                        <Button
                            className='w-full mt-4 md:mt-0'
                            data-testid={testIds.editUser.form.delete}
                            size='large'
                            type='primary'
                            danger
                        >
                            {string.formItems.delete}
                        </Button>
                    </Popconfirm>
                </Col>
            </Row>
        </Form >
    )
}

export default EditUser