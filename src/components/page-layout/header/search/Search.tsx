import { Input } from 'antd'
import { SearchIcon } from 'src/assets/icons'
import { header as string } from 'src/utils/string'

const Search = () => {
    return (
        <Input
            className='rounded-[20px] w-[512px] px-4 py-2'
            placeholder={string.searchPlaceholder}
            prefix={<SearchIcon className='fill-current' />}
        />
    )
}

export default Search