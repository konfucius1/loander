import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Checkbox, Label, TextInput } from 'flowbite-react'
import { useState } from 'react'
import { supabase } from '../../lib/client'
import { SelectRole } from './SelectRole'

export function RegisterDialog() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    role: '',
    dateOfBirth: '',
  })

  console.log(formData)

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      }
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
            role: formData.role,
            date_of_birth: formData.dateOfBirth,
          },
        },
      })

      if (error) throw error
      console.log(data)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-4">Get started today</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create an account</DialogTitle>
          <DialogDescription>It's now or never!</DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="fullName" value="Full Name" />
              <TextInput
                name="fullName"
                id="fullName"
                placeholder="your name"
                required
                type="fullName"
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
              <TextInput
                name="email"
                id="email"
                placeholder="name@loander.com"
                required
                type="email"
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" />
              <TextInput
                name="password"
                id="password"
                required
                type="password"
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="role" value="Your role" />
              <SelectRole
                onChange={(selectedRole) => {
                  setFormData((prev) => ({ ...prev, role: selectedRole }))
                }}
              />
            </div>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="dateOfBirth" value="Date of birth" />
              <TextInput
                name="dateOfBirth"
                id="dateOfBirth"
                required
                type="date"
                onChange={handleChange}
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="submit" className="hover:bg-purple-600">
              Sign Up
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
