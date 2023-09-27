import { Breadcrumb, Typography } from 'antd'
import { BreadcrumbItemType, BreadcrumbSeparatorType } from 'antd/es/breadcrumb/Breadcrumb'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeftIcon } from 'src/assets/icons'
import { PathItem } from 'src/interfaces'
import { path } from 'src/routes'
import { testIds } from 'src/utils/constant'

const PageBreadcrumb = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const items: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[] = Object.values(path).flatMap((pathItem, index) => {
        if (pathItem?.items) {
            const root: PathItem = pathItem?.root
            const result = [
                {
                    title: root.title,
                    href: root.href
                }]
            Object.values(pathItem.items).forEach((item: any) => {
                const { title, href }: PathItem = item
                if (id && href.includes(':id'))
                    result.push({ title, href })
            })

            return result
        }
        return {
            title: '',
            href: ''
        }
    })

    return (
        <Breadcrumb
            className='mb-8'
            data-testid={testIds.layout.breadcrumb}
            separator={<ArrowLeftIcon className='fill-current' />}
            itemRender={(route) =>
                <Typography.Text
                    className={`text-base ${route.href?.includes(':id') ? 'cursor-default' : 'cursor-pointer'}`}
                    onClick={() => !route.href?.includes(':id') && route.href && navigate(route.href)}
                >
                    {route.title}
                </Typography.Text>
            }
            items={items.filter(item => item.title)}
        />
    )
}

export default PageBreadcrumb