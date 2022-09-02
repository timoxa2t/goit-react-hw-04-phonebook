import PropTypes from 'prop-types'

export default function FilterConstacts({onFilterChange}){
    return (
        <input
            type="text"
            onChange={onFilterChange}
        />
    )
}

FilterConstacts.propTypes = {
    onFilterChange: PropTypes.func
}