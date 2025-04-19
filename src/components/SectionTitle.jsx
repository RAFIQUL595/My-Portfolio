import PropTypes from 'prop-types';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='text-center'>
            <h2 className='text-3xl md:text-5xl bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text'>{heading}</h2>
            <p className='mt-3 text-white/50 md:w-[800px] mx-auto'>{subHeading}</p>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired,
};

export default SectionTitle;