import Button from "./Button"

const Header = ({ title, onAdd, showAdd }) => {
    // const onClick = () => {
    //     console.log('Add button clicked')
    // }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={!showAdd ? 'green' : 'red'} text={!showAdd ? 'Add' : 'Close'} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header
