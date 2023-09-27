import React from 'react'
import { Input } from 'antd'
import { SearchIcon } from 'src/assets/icons'
import { useDispatch, useSelector } from 'react-redux'
import { AppDataState, State } from 'src/interfaces'
import { setSearchText } from 'src/redux'
import { header as string } from 'src/utils/string'
import { testIds } from 'src/utils/constant'

const Search: React.FC = () => {
    const dispatch = useDispatch<any>()
    const { searchText }: AppDataState = useSelector((state: State) => state.appData)

    return (
        <Input
            className='rounded-[20px] w-auto px-4 py-2 md:w-80 lg:w-[512px]'
            data-testid={testIds.header.searchInput}
            value={searchText}
            placeholder={string.searchPlaceholder}
            prefix={<SearchIcon className='fill-current' />}
            onChange={(e) => dispatch(setSearchText(e.target.value))}
        />
    )
}

export default Search