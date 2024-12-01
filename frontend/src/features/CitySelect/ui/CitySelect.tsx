import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	SelectChangeEvent,
} from '@mui/material'
import { useState } from 'react'

const list_city = ['Москва', 'Оренбург', 'Орск', 'Волгоград']
export const CitySelect = () => {
	const [age, setAge] = useState('')
	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string)
	}
	return (
		<FormControl fullWidth>
			<InputLabel id='demo-simple-select-label'>Город</InputLabel>
			<Select
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				value={age}
				label='Город'
				onChange={handleChange}
			>
				{list_city.map((data, key) => (
					<MenuItem key={key} value={data}>
						{data}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}
