import { Button } from '@/components/ui/button'
import { TabsDemo } from '@/pages/Home'
import MyPage from './pages/MyPage'

export default function App() {
  return (
    <div>
      <MyPage />
      <Button>Click me</Button>
      <TabsDemo />
    </div>
  )
}
