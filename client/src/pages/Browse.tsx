import { FilterSearch } from '@/components/browse/FilterSearch'

export const Browse = () => {
  return (
    <>
      <div className="p-8">
        <section className="mb-8">
          <h1 className="capitalize font-medium text-3xl">
            Find your perfect financial match!
          </h1>
          <h2 className="font-light text-md">
            Refine your search to find profiles tailored to your needs.
          </h2>
        </section>
        <FilterSearch />
      </div>
    </>
  )
}
