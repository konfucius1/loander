import { useSliderStore } from '@/store/useSliderStore'
import { Button } from '../ui/button'
import { SliderFilter } from './SliderFilter'

export const FilterSearch = () => {
  const resetSliders = useSliderStore((state) => state.resetSliders)

  return (
    <>
      <div className="flex sm:flex-row flex-col items-center">
        <SliderFilter step={100} min={500} max={2000} label="Loan Amount" />
        <SliderFilter step={0.5} min={1} max={12} label="Repayment Period" />
        <SliderFilter step={0.5} min={4} max={10} label="Interest Rate" />
        <SliderFilter step={5} min={1} max={50} label="Location Proximity" />

        <Button className="mr-4">Search</Button>
        <Button className="ml-4 bg-gray-500" onClick={resetSliders}>
          Reset
        </Button>
      </div>
    </>
  )
}
