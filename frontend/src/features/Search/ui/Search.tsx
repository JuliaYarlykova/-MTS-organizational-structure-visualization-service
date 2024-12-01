import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import axios from 'axios'
import cls from './Select.module.scss'

export const Search = () => {
	const [fio, setFio] = useState('')

	const handleChange = event => {
		setFio(event.target.value)
	}

	const handleSubmit = async event => {
		event.preventDefault()
		try {
			const response = await axios.post(
				'https://your-api-endpoint.com/search',
				{ fio }
			)
			console.log('Data sent successfully:', response.data)
		} catch (error) {
			console.error('Error sending data:', error)
		}
	}

	return (
		<form className={cls.main} onSubmit={handleSubmit}>
			<h1>Поиск по ФИО</h1>
			<TextField
				id='outlined-basic'
				label='ФИО'
				variant='outlined'
				value={fio}
				onChange={handleChange}
			/>
			<Button
				variant='outlined'
				size='medium'
				className={cls.btn}
				type='submit'
			>
				Поиск
			</Button>
		</form>
	)
}
