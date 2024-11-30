import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

const list_city =['Москва','Оренбург','Орск','Волгоград']
export const CitySelect = () => {
	return (
		<FormControl fullWidth>
			<InputLabel id='demo-simple-select-label'>Город</InputLabel>
			<Select
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				value={10}
				label='Город'
				onChange={() => ''}
			>
				{
				list_city.map((data, key)=><MenuItem key={key} value={10}>{data} </MenuItem>)
				}
			</Select>
		</FormControl>
	)
}
