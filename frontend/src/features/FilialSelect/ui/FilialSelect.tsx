import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
const list_filial =['Центральный офис','Оренбургская область','Волгоградская область']
export const FilialSelect = () => {
	return (
		<FormControl fullWidth>
			<InputLabel id='demo-simple-select-label'>Департамент</InputLabel>
			<Select
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				value={10}
				label='Департамент'
				onChange={() => ''}
			>
				{
				list_filial.map((data, key)=><MenuItem key={key} value={10}>{data} </MenuItem>)
				}
			</Select>
		</FormControl>
	)
}
