import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	SelectChangeEvent,
} from '@mui/material'
import { useState } from 'react'
const list_filial = [
	'Центральный офис',
	'Оренбургская область',
	'Волгоградская область',
]
export const FilialSelect = () => {
	const [age, setAge] = useState('')
	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string)
	}
	return (
		<FormControl fullWidth>
			<InputLabel id='demo-simple-select-label'>Департамент</InputLabel>
			<Select
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				value={age}
				label='Департамент'
				onChange={handleChange}
			>
				{list_filial.map((data, key) => (
					<MenuItem key={key} value={data}>
						{data}{' '}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}
