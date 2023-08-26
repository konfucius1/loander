import { FilterSearch } from '@/components/browse/FilterSearch'

const Header = () => {
  return (
    <section className="mb-8 flex flex-col justify-start text-left">
      <h1 className="capitalize font-medium text-3xl">
        Find your perfect financial match!
      </h1>
      <h2 className="font-light text-md">
        Refine your search to find profiles tailored to your needs.
      </h2>
    </section>
  )
}

export const Browse = () => {
  return (
    <>
      <div className="p-8">
        <Header />
        <FilterSearch />
      </div>
    </>
  )
}
