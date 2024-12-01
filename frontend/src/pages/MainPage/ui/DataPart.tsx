import { useMyContext } from '@/app/providers/context/ui/useContext'
import { Employee } from '@/entities/Employee'
import { ResponseData } from '@/features/Select/api/select'
import { useState, useEffect } from 'react'
import cls from './MainPage.module.scss'

export const DataPart = () => {
	const [data, setData] = useState<ResponseData[]>()
	const { formData } = useMyContext()
	const [isVisible, setVisible] = useState<ResponseData>()
	useEffect(() => {
		setData(formData)
	}, [formData])

	if (!data) return null
	if (data.length === 0) return <div className=''>Данных нет</div>

	return (
		<div className={cls.container}>
			<div className={cls.dataWrap}>
				{data.map((empl, key) => (
					<div onClick={() => setVisible(empl)}>
						<Employee
							key={key}
							name={empl.name}
							telephone={empl.phone}
							role={empl.role}
						/>
					</div>
				))}
			</div>
			{isVisible && (
				<div className=''>
					<p className=''>Имя: {isVisible.name}</p>
					<p className=''>Адрес: {isVisible.address}</p>
					<p className=''>Должность: {isVisible.background}</p>
					<p className=''>Город: {isVisible.city}</p>
					<p className=''>Почта: {isVisible.email}</p>
					<p className=''>Блок: {isVisible.func_block}</p>

					<p className=''>Телефон: {isVisible.phone}</p>
					<p className=''>Роль: {isVisible.role}</p>
				</div>
			)}
		</div>
	)
}
