import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import cls from './MainPage.module.scss'
import { SelectForm } from '@/features/Select'
import { Search } from '@/features/Search'
import { DataPart } from './DataPart'

export const MainPage = () => {
	return (
		<div className={cls.main}>
			<Search />
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
				<AccordionDetails>
					<SelectForm />
				</AccordionDetails>
			</Accordion>
			<DataPart />
		</div>
	)
}
