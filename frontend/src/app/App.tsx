import { Suspense } from 'react'
import { MainLayout } from '@/shared/layouts'
import AppRouter from './providers/router/ui/AppRouter'

function App() {
	return (
		<div className='app'>
			<Suspense fallback='Loading...'>
				<MainLayout>
					<AppRouter />
				</MainLayout>
			</Suspense>
		</div>
	)
}

export default App
