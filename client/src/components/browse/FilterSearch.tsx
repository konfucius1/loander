import { Button } from '../ui/button'
import { SliderFilter } from './SliderFilter'

export const FilterSearch = () => {
  return (
    <>
      <div className="flex sm:flex-row flex-col items-center">
        <SliderFilter label="Loan Period" />
        <SliderFilter label="Repayment Period" />
        <SliderFilter label="Interest Rate" />
        <SliderFilter label="Location Proximity" />
        <Button>Reset</Button>
      </div>
    </>
  )
}
