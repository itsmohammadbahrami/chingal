import { Switch } from 'antd'
import { MoonIcon, SunIcon } from 'src/assets/icons'

const ThemeSwitch = () => {
    return (
        <Switch
            size='default'
            checkedChildren={<MoonIcon className='fill-current w-5 h-5' />}
            unCheckedChildren={<SunIcon className='fill-current w-5 h-5 -mt-[4px]' />}
            defaultChecked={false}
        />
    )
}

export default ThemeSwitch