import './Input.css'

const Input = (props = {}) => {
    const  {className = '', ...otherProps} = props;
    const classNames = `input ${className}`
    return (
        <div className="wrapper-input">
            <input className={className} {...otherProps} />
        </div>
    )
}

export default Input
