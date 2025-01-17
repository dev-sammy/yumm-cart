const Input = ({label, id, name, ...props}) => {
  return (
    <div className="control">
        <label htmlFor={id}>{label}</label>
        <input required type={props.type || 'text'} id={id} name={name} {...props}/>
      </div>
  )
}

export default Input