'use client';

import { Navbar } from 'flowbite-react';
import { Button } from '@/components/ui/button';

export default function NavBar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img alt="Loander Logo" className="mr-3" src="loander_logo.svg" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          loander
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="bg-black hover:bg-gray-800">Login</Button>{' '}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active href="#">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#">Browse</Navbar.Link>
        <Navbar.Link href="#">Messages</Navbar.Link>
        <Navbar.Link href="#">Dashboard</Navbar.Link>
        <Navbar.Link href="#">Support</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export { default as NavBar } from './navbar';
