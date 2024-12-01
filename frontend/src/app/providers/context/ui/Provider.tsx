import { ResponseData } from '@/features/Select/api/select'
import { createContext, ReactNode, useState } from 'react'
export interface FormContextType {
	formData: ResponseData[] | undefined
	updateFormData: (data: ResponseData[]) => void
}
export const MyContext = createContext<FormContextType | undefined>(undefined)

export const Provider = ({ children }: { children: ReactNode }) => {
	const [formData, setValue] = useState<ResponseData[]>()
	const updateFormData = (data: ResponseData[]) => {
		setValue(data)
	}

	return (
		<MyContext.Provider value={{ formData, updateFormData }}>
			{children}
		</MyContext.Provider>
	)
}
