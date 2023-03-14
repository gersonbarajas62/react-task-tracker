import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd}) => {
    return(
       <header className='header'>
        <h1> {title} </h1>
        <Button color='green' text='add' onClick={onAdd}/>
       </header> 
    )
}
Header.defaultProps = {
    title:'task tracker',   
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header 