import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

const list_role=['аналитика','бэк-офис','Дизайнер','обслуживание','продажи','руководство','тестирование','backend','frontend']
export const RoleSelect = () => {
	return (
		<FormControl fullWidth>
			<InputLabel id='demo-simple-select-label'>Роль</InputLabel>
			<Select
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				value={10}
				label='Роль'
				onChange={() => ''}
			>
			{
				list_role.map((data, key)=><MenuItem key={key} value={10}>{data} </MenuItem>)
			}
			</Select>
		</FormControl>
	)
}
