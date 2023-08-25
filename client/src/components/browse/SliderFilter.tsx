import { cn } from '@/lib/utils'
import { Slider } from '@/components/ui/slider'

type SliderProps = React.ComponentProps<typeof Slider>

interface SliderFilterProps extends SliderProps {
  label?: string
}

export function SliderFilter({ label, ...props }: SliderFilterProps) {
  return (
    <>
      <div className="sm:w-[20%] sm:mr-16 my-4">
        {label && <label className="block mb-2">{label}</label>}
        <Slider defaultValue={[50]} max={100} step={1} {...props} />
      </div>
    </>
  )
}
