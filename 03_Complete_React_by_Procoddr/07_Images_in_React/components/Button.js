
const Button = ({imageUrl, title, altText}) => {
  return (
    <button title={title}>
        <img src={imageUrl} alt={altText} />
    </button>
  )
}

export default Button
