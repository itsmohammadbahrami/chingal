import { Breadcrumb, Typography } from 'antd'
import { BreadcrumbItemType, BreadcrumbSeparatorType } from 'antd/es/breadcrumb/Breadcrumb'
import { useLocation, useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from 'src/assets/icons'
import { PathItem } from 'src/interfaces'
import { path } from 'src/routes'

const PageBreadcrumb = () => {
    const { pathname } = useLocation()
    const navigate = useNavigate();

    const items: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[] = Object.values(path).flatMap((pathItem, index) => {
        if (pathItem?.items) {
            const root: PathItem = pathItem?.root
            return [
                {
                    title: root.title,
                    href: root.href
                },
                ...Object.values(pathItem.items).map((item: any) => {
                    const { title, href }: PathItem = item
                    return { title, href }
                })]
        }
        return {
            title: '',
            href: ''
        }
    })
    return (
        <Breadcrumb
            className='mb-8'
            separator={<ArrowLeftIcon />}
            itemRender={(route) =>
                <Typography.Text
                    className='text-base cursor-pointer'
                    onClick={() => route.href && navigate(route.href)}
                >
                    {route.title}
                </Typography.Text>
            }
            items={items.filter(item => item.title && pathname.includes(item.href || ''))}
        />
    )
}

export default PageBreadcrumb