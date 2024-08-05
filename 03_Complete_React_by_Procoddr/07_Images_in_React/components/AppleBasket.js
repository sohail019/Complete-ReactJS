
export const AppleBasket = ({appleCount, basketName}) => {
  return (
    <div className="basket">
        <h1>{appleCount} apples</h1>
        <p>{basketName}</p>
    </div>
  )
}
