

function Button({ color, text, onClick }) {
    return (
        <button
            className='btn'
            style={{ backgroundColor: color }}
            onClick={onClick}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'silverblue',
}

export default Button
