import PropTypes from 'prop-types'


function Header({title}) {
  return (
    <h1 style ={headingStyle}> {title}</h1>
  )
}
Header.defaultProps = {
    title: 'Task Tracker',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
const headingStyle = {
    color: 'red',
}
export default Header