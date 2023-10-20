import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineCurrencyDollar } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const FeaturedJob = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div>
            <div className="p-10 border border-[#E8E8E8] rounded-lg flex flex-col">
                <div className='mb-8 flex-grow'><img src={logo} alt="Shoes" /></div>
                <div className="flex flex-col items-start">
                    <h2 className="text-2xl font-extrabold text-[#474747] mb-2">{job_title}</h2>
                    <p className='text-[#757575] text-xl font-semibold mb-4'>{company_name}</p>
                    <div className="flex justify-start gap-4 mb-4">
                        <p className="px-5 py-2 border-[2px] border-[#7E90FE] rounded text-[#7E90FE]">{remote_or_onsite}</p>
                        <p className="px-5 py-2 border-[2px] border-[#7E90FE] rounded text-[#7E90FE]">{job_type}</p>
                    </div>
                    <div className="flex gap-6 text-[#757575] text-xl font-semibold">
                        <span className="flex justify-center items-center gap-2">
                            <HiOutlineLocationMarker className='text-[#757575] text-xl' />
                            <p>{location}</p>
                        </span>
                        <span className="flex justify-center items-center gap-2">
                            <HiOutlineCurrencyDollar className='text-[#757575] text-xl' />
                            <p>{salary}</p>
                        </span>
                    </div>
                    <div className="flex justify-start mt-6">
                        <Link to={`/job/${id}`}>
                            <button className="btn btn-primary font-bold text-xl capitalize">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

FeaturedJob.propTypes = {
    job : PropTypes.object,
}

export default FeaturedJob;