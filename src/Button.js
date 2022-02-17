function Button({ onClick, title }) {
  return (
    <button onClick={onClick}>{title || 'default value'}</button>
  )
}

export default Button;