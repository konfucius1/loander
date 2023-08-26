import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useState } from 'react'

export function SelectRole({ onChange }) {
  const [value, setValue] = useState('')

  const handleValueChange = (newValue) => {
    setValue(newValue)
    if (onChange) {
      // notify parent component of new value
      onChange(newValue)
    }
  }

  return (
    <Select value={value} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Choose your role" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>I want to be a...</SelectLabel>
          <SelectItem value="lender">lender</SelectItem>
          <SelectItem value="borrower">borrower</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
