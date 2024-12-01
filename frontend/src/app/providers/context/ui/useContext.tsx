import { useContext } from 'react'
import { MyContext } from './Provider'

export const useMyContext = () => {
	const context = useContext(MyContext)
	if (context === undefined) {
		throw new Error('useMyContext must be used within a Provider')
	}
	return context
}
