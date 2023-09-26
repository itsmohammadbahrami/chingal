import { Switch } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { MoonIcon, SunIcon } from 'src/assets/icons'
import { AppDataState, State } from 'src/interfaces'
import { setDarkMode } from 'src/redux/actions'

const ThemeSwitch = () => {
    const dispatch = useDispatch<any>()
    const { darkMode }: AppDataState = useSelector((state: State) => state.appData)

    return (
        <Switch
            size='default'
            checkedChildren={<MoonIcon className='fill-current w-5 h-5' />}
            unCheckedChildren={<SunIcon className='fill-current w-5 h-5 -mt-[6px]' />}
            defaultChecked={darkMode}
            onChange={(checked) => dispatch(setDarkMode(checked))}
        />
    )
}

export default ThemeSwitch