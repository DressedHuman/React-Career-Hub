import { useLoaderData, useParams } from "react-router-dom";
import IconInfo from "../IconInfo/IconInfo";
import { ToastContainer, toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css'


// icons
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi'
import { HiInformationCircle, HiOutlineCurrencyDollar, HiOutlinePhone } from 'react-icons/hi2'
import { saveJobApplication } from "../../utility/localStorage";


const JobDetails = () => {
    const { id } = useParams();
    const jobs = useLoaderData();
    const job = jobs.find(job => job.id == id);

    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = job;

    const phone = contact_information.phone;
    const email = contact_information.email;
    const address = contact_information.address;

    const handleApplyNow = () => {
        const applyingMessage = saveJobApplication(id);
        toast(applyingMessage);
    }


    return (
        <div>
            <div className="grid grid-cols-5 gap-6">
                <div className="text-[#757575] col-span-3 flex flex-col gap-6">
                    <h2><span className="text-[#1A1919] font-medium">Job Description:</span> {job_description}</h2>
                    <h2><span className="text-[#1A1919] font-medium">Job Responsibility:</span> {job_responsibility}</h2>
                    <h2><span className="text-[#1A1919] font-medium">Educational Requirements:</span> {educational_requirements}</h2>
                    <h2><span className="text-[#1A1919] font-medium">Experiences:</span> {experiences}</h2>
                </div>
                <div className="col-span-2">
                    <div className="bg-gradient-to-r from-[#7e90fe1a] to-[#9873ff1a] p-7 rounded-lg">
                        <h2 className="text-xl text-[#1A1919] font-extrabold">Job Details</h2>
                        <hr className="my-6" />
                        <IconInfo Icon={HiOutlineCurrencyDollar} title={"Salary"} description={salary} />

                        <IconInfo Icon={HiInformationCircle} title={'Job Title'} description={job_title} />

                        <h2 className="text-xl text-[#1A1919] font-extrabold my-6">Contact Information</h2>
                        <hr />
                        <IconInfo Icon={HiOutlinePhone} title={'Phone'} description={phone} />

                        <IconInfo Icon={HiOutlineMail} title={"Email"} description={email} />

                        <IconInfo Icon={HiOutlineLocationMarker} title={"Address"} description={address} />
                    </div>
                    <button onClick={handleApplyNow} className="btn btn-primary w-full text-xl font-extrabold mt-3">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;