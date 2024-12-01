import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	SelectChangeEvent,
	Button,
} from '@mui/material'
import { useState } from 'react'
import axios from 'axios'
import {
	blocks,
	list_city,
	list_filial,
	list_positions,
	list_role,
} from '../lib/data/selectsData'

import cls from './Select.module.scss'

export const SelectForm = () => {
	const [role, setRole] = useState('')
	const [position, setPosition] = useState('')
	const [department, setDepartment] = useState('')
	const [city, setCity] = useState('')
	const [subdivision, setSubdivision] = useState('')

	const handleChange = (
		event: SelectChangeEvent,
		setter: React.Dispatch<React.SetStateAction<string>>
	) => {
		setter(event.target.value as string)
	}

	const handleSubmit = async () => {
		const data = {
			role,
			position,
			department,
			city,
			subdivision,
		}

		try {
			const response = await axios.post(
				'https://your-api-endpoint.com/submit',
				data
			)
			console.log('Data sent successfully:', response.data)
		} catch (error) {
			console.error('Error sending data:', error)
		}
	}

	return (
		<>
			<div className={cls.accordion}>
				<FormControl fullWidth>
					<InputLabel id='label1'>Роль</InputLabel>
					<Select
						labelId='label1'
						id='demo-simple-select1'
						value={role}
						label='Роль'
						onChange={event => handleChange(event, setRole)}
					>
						{list_role.map((data, key) => (
							<MenuItem key={key} value={data}>
								{data}
							</MenuItem>
						))}
					</Select>
				</FormControl>

				<FormControl fullWidth>
					<InputLabel id='label3'>Должность</InputLabel>
					<Select
						labelId='label3'
						id='demo-simple-select2'
						value={position}
						label='Должность'
						onChange={event => handleChange(event, setPosition)}
					>
						{list_positions.map((data, key) => (
							<MenuItem key={key} value={data}>
								{data}
							</MenuItem>
						))}
					</Select>
				</FormControl>

				<FormControl fullWidth>
					<InputLabel id='label4'>Департамент</InputLabel>
					<Select
						labelId='label4'
						id='demo-simple-select3'
						value={department}
						label='Департамент'
						onChange={event => handleChange(event, setDepartment)}
					>
						{list_filial.map((data, key) => (
							<MenuItem key={key} value={data}>
								{data}
							</MenuItem>
						))}
					</Select>
				</FormControl>

				<FormControl fullWidth>
					<InputLabel id='label5'>Город</InputLabel>
					<Select
						labelId='label5'
						id='demo-simple-select4'
						value={city}
						label='Город'
						onChange={event => handleChange(event, setCity)}
					>
						{list_city.map((data, key) => (
							<MenuItem key={key} value={data}>
								{data}
							</MenuItem>
						))}
					</Select>
				</FormControl>

				<FormControl fullWidth>
					<InputLabel id='label6'>Блок</InputLabel>
					<Select
						labelId='label6'
						id='demo-simple-select5'
						value={subdivision}
						label='Блок'
						onChange={event => handleChange(event, setSubdivision)}
					>
						{blocks.map((data, key) => (
							<MenuItem key={key} value={data}>
								{data}{' '}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</div>
			<Button variant='contained' color='primary' onClick={handleSubmit}>
				Отправить
			</Button>
		</>
	)
}
