import { Button, TextField } from '@mui/material'
import { useState } from 'react'

import cls from './Select.module.scss'
import { getSearched } from '../api/search'
import { useMyContext } from '@/app/providers/context/ui/useContext'

export const Search = () => {
	const [fio, setFio] = useState('')
	const { updateFormData } = useMyContext()

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFio(event.target.value)
	}

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const response = await getSearched({ str: fio })
		updateFormData(response)
	}

	return (
		<form className={cls.main} onSubmit={handleSubmit}>
			<h3>Поиск по ФИО</h3>
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
