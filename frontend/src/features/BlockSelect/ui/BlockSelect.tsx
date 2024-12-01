import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	SelectChangeEvent,
} from '@mui/material'
import { useState } from 'react'
// const list_block =['Центральный офис','Оренбургская область','Волгоградская область']
export const BlockSelect = () => {
	const [age, setAge] = useState('')
	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string)
	}
	return (
		<FormControl fullWidth>
			<InputLabel id='demo-simple-select-label'>Подразделение</InputLabel>
			<Select
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				value={age}
				label='Подразделение'
				onChange={handleChange}
			>
				{/* {
				list_block.map((data, key)=><MenuItem key={key} value={10}>{data} </MenuItem>)
				} */}
			</Select>
		</FormControl>
	)
}
