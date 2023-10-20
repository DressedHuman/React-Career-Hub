import PropTypes from 'prop-types'

const IconInfo = ({ Icon, title, description }) => {
    return (
        <div className='flex items-center text-[#7E90FE] gap-1'>
            <Icon className="text-xl" />
            <div>
                <span className='text-xl font-bold text-[#474747]'>{title} :&nbsp;</span>
                <span className='text-xl font-medium text-[#757575] inline'>{description}</span>
            </div>
        </div>
    );
};

IconInfo.propTypes = {
    Icon: PropTypes.func,
    title: PropTypes.string,
    description: PropTypes.string,
}

export default IconInfo;