import { Checkbox, Label, TextInput } from 'flowbite-react'
import { Button } from '@/components/ui/button'

export default function LoginForm() {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="flex max-w-md flex-col gap-4 w-1/3 shadow p-8 rounded-xl">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            placeholder="name@loander.com"
            required
            type="email"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" required type="password" />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit" className="hover:bg-purple-600">
          Submit
        </Button>
      </form>
    </div>
  )
}
