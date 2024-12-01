import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	SelectChangeEvent,
} from '@mui/material'
import { useState } from 'react'

const list_role = [
	'аналитика',
	'бэк-офис',
	'Дизайнер',
	'обслуживание',
	'продажи',
	'руководство',
	'тестирование',
	'backend',
	'frontend',
]
export const RoleSelect = () => {
	const [age, setAge] = useState('')
	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string)
	}
	return (
		<FormControl fullWidth>
			<InputLabel id='demo-simple-select-label'>Роль</InputLabel>
			<Select
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				value={age}
				label='Роль'
				onChange={handleChange}
			>
				{list_role.map((data, key) => (
					<MenuItem key={key} value={data}>
						{data}{' '}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}
