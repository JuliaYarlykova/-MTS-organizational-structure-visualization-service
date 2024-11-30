import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
// const list_block =['Центральный офис','Оренбургская область','Волгоградская область']
export const BlockSelect = () => {
	return (
		<FormControl fullWidth>
			<InputLabel id='demo-simple-select-label'>Подразделение</InputLabel>
			<Select
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				value={10}
				label='Подразделение'
				onChange={() => ''}
			>
				{/* {
				list_block.map((data, key)=><MenuItem key={key} value={10}>{data} </MenuItem>)
				} */}
			</Select>
		</FormControl>
	)
}
