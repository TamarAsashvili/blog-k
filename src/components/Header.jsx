import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title }) => {

    const onClick = () => {
        console.log('click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Hello' onClick={onClick} />

        </header>


    )
}

Header.defaultProps = {
    title: 'Task Track',
}


Header.protoTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
