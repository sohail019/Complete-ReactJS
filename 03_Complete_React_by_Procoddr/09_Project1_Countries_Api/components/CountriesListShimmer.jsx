import "./CountriesListShimmer.css"

export const CountriesListShimmer = () => {
  return (
    <div className="countries-container">
        {
            Array.from({length: 100}).map((el, i) => {
                return <div key={i} className="country-card shimmer-card"></div>
            })
        }
    </div>
  )
}
