import { ConfigProvider, theme } from 'antd'
import { MainRoutes } from 'src/routes'
import { AppDataState, State } from './interfaces'
import { useSelector } from 'react-redux'

const App = () => {
  const { darkMode }: AppDataState = useSelector((state: State) => state.appData)

  return (
    <ConfigProvider
      direction='rtl'
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm
      }}>
      <MainRoutes />
    </ConfigProvider>
  )
}

export default App