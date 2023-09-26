import React from 'react'
import { Input } from 'antd'
import { SearchIcon } from 'src/assets/icons'
import { header as string } from 'src/utils/string'
interface Props {
    onChange: (text: string) => void
}

const Search: React.FC<Props> = ({ onChange }) => {
    return (
        <Input
            className='rounded-[20px] w-[512px] px-4 py-2'
            placeholder={string.searchPlaceholder}
            prefix={<SearchIcon className='fill-current' />}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default Search