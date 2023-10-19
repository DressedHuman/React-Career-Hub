const JobDetails = ({ job }) => {
    return (
        <div>
            <h2 className="text-3xl font-bold">{ job.job_title }</h2>
        </div>
    );
};

export default JobDetails;