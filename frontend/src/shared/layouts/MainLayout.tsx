import { memo, ReactNode } from 'react'

import cls from './MainLayout.module.scss'
import { classNames } from '../lib'

interface MainLayoutProps {
	className?: string

	children: ReactNode
}

export const MainLayout = memo((props: MainLayoutProps) => {
	const { className, children } = props

	return (
		<div className={classNames(cls.MainLayout, {}, [className])}>
			<div className={cls.content}>{children}</div>
		</div>
	)
})
