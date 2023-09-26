import React from 'react'
import { Input } from 'antd'
import { SearchIcon } from 'src/assets/icons'
import { useDispatch, useSelector } from 'react-redux'
import { AppDataState, State } from 'src/interfaces'
import { setSearchText } from 'src/redux'
import { header as string } from 'src/utils/string'

const Search: React.FC = () => {
    const dispatch = useDispatch<any>()
    const { searchText }: AppDataState = useSelector((state: State) => state.appData)

    return (
        <Input
            className='rounded-[20px] w-[512px] px-4 py-2'
            value={searchText}
            placeholder={string.searchPlaceholder}
            prefix={<SearchIcon className='fill-current' />}
            onChange={(e) => dispatch(setSearchText(e.target.value))}
        />
    )
}

export default Search