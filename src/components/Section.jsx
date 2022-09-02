import PropTypes from 'prop-types'

export default function Section({title, children}){

    return (
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    )
}


Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element, 
        PropTypes.arrayOf(PropTypes.element)
    ])
}