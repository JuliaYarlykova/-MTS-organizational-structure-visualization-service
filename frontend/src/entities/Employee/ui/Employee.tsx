import cls from './Employee.module.scss'
interface Employeeprops {
	name: string | null
	telephone: string | null
	role: string | null
}
export const Employee = (props: Employeeprops) => {
	const { name, telephone, role } = props
	return (
		<div className={cls.card}>
			<h3 className=''>Имя: {name}</h3>
			<p className=''>Телефон: {telephone}</p>
			<p className=''>Роль: {role}</p>
		</div>
	)
}
