import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types'

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div className={css.feedback}>
            {options.map(options => (
                <button
                    className={css.button}
                    name={options}
                    key={options}
                    type="button"
                    onClick={onLeaveFeedback}
                >
                    {options}
                </button>
            ))}
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions