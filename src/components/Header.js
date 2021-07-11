import  PropTypes  from 'prop-types'
import Buttons from './Buttons'

const Header = ({title}) => {
    const onClick =() => {
        
    }
    return (
        <header>
            <h1>{title}</h1>
            <Buttons 
            color='green' 
            text='Hello' 
            onClick={onClick} 
            />
            
            
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}


export default Header;

