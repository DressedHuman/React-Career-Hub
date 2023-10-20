const getStoredJobApplications = () => {
    const storedJobApplications = localStorage.getItem("job_application");
    if (storedJobApplications) {
        return JSON.parse(storedJobApplications);
    }
    return [];
}


const saveJobApplication = id => {
    const storedJobApplication = getStoredJobApplications();

    if (!storedJobApplication.includes(id)) {
        storedJobApplication.push(id);
        const jobApplicationsStringified = JSON.stringify(storedJobApplication);
        // save the stringified job Applications list
        localStorage.setItem('job_application', jobApplicationsStringified);

        return "Successfully applied for the job!";
    }
    return "You've already applied for the job!"
}


export { getStoredJobApplications, saveJobApplication }