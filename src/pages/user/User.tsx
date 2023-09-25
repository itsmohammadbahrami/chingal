import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PageLayout } from 'src/components'
import { UserDataState, State } from 'src/interfaces'
import { getUsers } from 'src/redux'

const User = () => {
    const dispatch = useDispatch<any>()
    const { users, loading }: UserDataState = useSelector((state: State) => state.userData)

    useEffect(() => {
        dispatch(getUsers());
    }, []) // eslint-disable-line

    return (
        <PageLayout>
        </PageLayout>
    )
}

export default User