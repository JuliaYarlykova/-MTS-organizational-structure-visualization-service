import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	SelectChangeEvent,
} from '@mui/material'
import { useState } from 'react'
export const ProjectSelect = () => {
	const [age, setAge] = useState('')
	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string)
	}
	return (
		<FormControl fullWidth>
			<InputLabel id='demo-simple-select-label'>Проект</InputLabel>
			<Select
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				value={age}
				label='Проект'
				onChange={handleChange}
			>
				<MenuItem value={10}>Ten</MenuItem>
				<MenuItem value={20}>Twenty</MenuItem>
				<MenuItem value={30}>Thirty</MenuItem>
			</Select>
		</FormControl>
	)
}
