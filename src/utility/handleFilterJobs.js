const handleFilterJobs = (allRemoteOnsite, appliedJobs) => {
    if(allRemoteOnsite==='remote'){
        return appliedJobs.filter(job => job.remote_or_onsite==="Remote");
    }
    else if(allRemoteOnsite==='onsite'){
        return appliedJobs.filter(job => job.remote_or_onsite === "Onsite");
    }
    return appliedJobs;
}

export default handleFilterJobs;