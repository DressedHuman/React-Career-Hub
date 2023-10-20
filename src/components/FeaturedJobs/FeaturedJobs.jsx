import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [jobsLength, setJobsLength] = useState(4);

    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(setJobs)
    }, [])

    return (
        <div className='text-center'>
            <div>
                <h2 className="text-5xl">Featured Jobs : {jobs.length}</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, jobsLength).map(job => <FeaturedJob key={job.id} job={job} />)
                }
            </div>
            {
                jobsLength === 4 && <div className="mt-7">
                    <button onClick={() => setJobsLength(jobs.length)} className="btn btn-primary text-2xl font-bold capitalize">Show All Jobs</button>
                </div>
            }
        </div>
    );
};

export default FeaturedJobs;