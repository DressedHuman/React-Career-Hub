import { useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../../utility/localStorage";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
import { useEffect, useState } from "react";
import handleFilterJobs from "../../utility/handleFilterJobs";

const AppliedJobs = () => {
    const allJobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    // get applied jobs list
    useEffect(() => {
        const appliedJobIds = getStoredJobApplications();
        if (appliedJobIds.length > 0) {
            const appliedJobs = allJobs.filter(job => appliedJobIds.includes(`${job.id}`));
            setDisplayJobs(appliedJobs);
            setAppliedJobs(appliedJobs);
        }
    }, [])

    // display jobs list
    const handleDisplayJobs = (allRemoteOnsite) => {
        const displayJobs = handleFilterJobs(allRemoteOnsite, appliedJobs);
        setDisplayJobs(displayJobs);
        // console.log(displayJobs);
    }



    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold text-center bg-gray-700 rounded text-white p-2">Applied Jobs</h1>
            <details className="dropdown mb-32 mx-auto">
                <summary className="m-1 btn text-base font-bold">Filter</summary>
                <ul className="p-2 menu dropdown-content z-[1] bg-base-50 rounded-box w-52 gap-1">
                    <li className="font-semibold btn" onClick={() => handleDisplayJobs('all')}>All</li>
                    <li className="font-semibold btn" onClick={() => handleDisplayJobs('onsite')}>Onsite</li>
                    <li className="font-semibold btn" onClick={() => handleDisplayJobs('remote')}>Remote</li>
                </ul>
            </details>
            {
                displayJobs.map(job => <FeaturedJob key={job.id} job={job} FeaturedOrApplied={'applied'} />)
            }
        </div>
    );
};

export default AppliedJobs;