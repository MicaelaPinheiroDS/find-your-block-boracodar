import { Header } from './components/header'
import { Footer } from './components/footer'
import { ContentCornivalGroups } from './components/contentCarnivelGroups'
export function App() {

  return (
    <div className='dark:bg-black dark:text-white'>
        <Header />
        <ContentCornivalGroups />
        <Footer />
    </div>

  )
}

