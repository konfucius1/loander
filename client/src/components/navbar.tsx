import { Navbar } from 'flowbite-react'
import { Button } from '@/components/ui/button'

export default function NavBar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img alt="Loander Logo" className="mr-3" src="loander_logo.svg" />
      </Navbar.Brand>

      <div className="flex md:order-2">
        <Button className="bg-black hover:bg-gray-800">Login</Button>{' '}
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link href="/">
          <p>Home</p>
        </Navbar.Link>

        <Navbar.Link href="/browse">Browse</Navbar.Link>
        <Navbar.Link href="/messages">Messages</Navbar.Link>
        <Navbar.Link href="/dashboard">Dashboard</Navbar.Link>
        <Navbar.Link href="/support">Support</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export { default as NavBar } from './Navbar'
