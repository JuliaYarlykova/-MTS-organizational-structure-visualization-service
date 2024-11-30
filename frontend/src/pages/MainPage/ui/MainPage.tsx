import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Button,
	TextField,
} from '@mui/material'
import cls from './MainPage.module.scss'
import { FilialSelect } from '@/features/FilialSelect'
import { BlockSelect } from '@/features/BlockSelect'
import { CitySelect } from '@/features/CitySelect'
import { PositionSelect } from '@/features/PositionSelect'
import { ProjectSelect } from '@/features/ProjectSelect'
import { RoleSelect } from '@/features/RoleSelect'
import { Employee } from '@/entities/Employee/ui/Employee'
import { Flow } from '@/entities/Hierarchy'

const slides = {
	'1': { right: '2' },
	'2': { left: '1', up: '3', right: '4' },
	'3': { down: '2' },
	'4': { left: '2' },
}

export const MainPage = () => {
	return (
		<div className={cls.main}>
			<h1>Поиск по ФИО</h1>

			<TextField id='outlined-basic' label='ФИО' variant='outlined' />

			<Accordion>
				<AccordionSummary
					expandIcon={
						<span className='material-symbols-outlined'>arrow_drop_down</span>
					}
					aria-controls='panel1-content'
					id='panel1-header'
				>
					Поиск по критериям
				</AccordionSummary>
				<AccordionDetails className={cls.accordion}>
					<FilialSelect />
					<BlockSelect />
					<CitySelect />
					<PositionSelect />
					<ProjectSelect />
					<RoleSelect />
				</AccordionDetails>
			</Accordion>
			<Button variant='outlined' size='medium' className={cls.btn}>
				Поиск
			</Button>
			<Employee name={''} telephone={''} email={''} />
			<div className={cls.container}>
				<Flow />
			</div>
		</div>
	)
}
