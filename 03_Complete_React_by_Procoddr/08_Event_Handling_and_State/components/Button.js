
const Button = ({imageUrl, title, altText, clickHandler}) => {
  return (
    <button onClick={clickHandler} title={title}>
        <img src={imageUrl} alt={altText} />
    </button>
  )
}

export default Button
