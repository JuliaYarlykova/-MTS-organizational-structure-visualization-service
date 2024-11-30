import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
export const PositionSelect = () => {
	return (
		<FormControl fullWidth>
			<InputLabel id='demo-simple-select-label'>Должность</InputLabel>
			<Select
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				value={10}
				label='Должность'
				onChange={() => ''}
			>
				<MenuItem value={10}>Ten</MenuItem>
				<MenuItem value={20}>Twenty</MenuItem>
				<MenuItem value={30}>Thirty</MenuItem>
			</Select>

		</FormControl>
	)
}
