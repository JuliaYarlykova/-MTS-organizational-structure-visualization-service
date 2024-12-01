import cls from './Employee.module.scss'
interface Employeeprops {
	name: string
	telephone: string
	role: string 
}
export const Employee = (props: Employeeprops) => {
	const { name, telephone, role } = props
	return (
		<div className={cls.card}>
			<h3 className=''>name</h3>
			<p className=''>telephone</p>
			<p className=''>role</p>
		</div>
	)
}
