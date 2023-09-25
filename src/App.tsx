import { ConfigProvider, theme } from 'antd'
import { MainRoutes } from 'src/routes'

const App = () => {
  return (
    <ConfigProvider
      direction='rtl'
      theme={{
        algorithm: theme.darkAlgorithm
      }}>
      <MainRoutes />
    </ConfigProvider>
  )
}

export default App