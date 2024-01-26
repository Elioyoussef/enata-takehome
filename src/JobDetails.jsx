import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    mobilePhone: "",
    email: "",
    nationality: "",
    picture: null,
    resume: null,
    about: "",
    salaryExpectation: "",
  });
  //for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [errors, setErrors] = useState({});
  const validateEmail = (email) => {
    if (!emailPattern.test(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address.",
      }));
    } else {
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors.email;
        return updatedErrors;
      });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    if (name === "email") {
      validateEmail(value);
    }
  };
  // fetching from jobs.json
  useEffect(() => {
    fetch("/jobs.json")
      .then((response) => response.json())
      .then((jobs) => {
        const matchedJob = jobs.find((job) => job.id.toString() === id);
        setJob(matchedJob);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching job details:", error);
        setLoading(false);
      });
  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/thankyou");
  };
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!job) {
    return <div className="pt-80 bg-white text-center">Job not found.</div>;
  }
  return (
    <div className="lg:px-20 py-20 px-4 text-white">
      <h1 className="lg:text-5xl text-center text-xl font-bold">{job.title}</h1>
      <h3 className="lg:text-2xl lg:py-5 py-3 font-semibold">Description:</h3>
      <p>{job.description}</p>
      <h3 className="lg:text-2xl lg:py-5 py-3 font-semibold">Requirements:</h3>
      <ul>
        {job.requirements.map((requirement, index) => (
          <li key={index} className="list-disc">
            {requirement}
          </li>
        ))}
      </ul>
      <div className="py-9">
        <h2 className="lg:text-3xl text-center font-bold pb-7">
          Submit your candidacy for {job.title}
        </h2>
        <form onSubmit={handleSubmit} className="lg:space-y-4 space-y-2">
          <div className="flex flex-col lg:flex-wrap">
            <div className="w-full pb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-white"
              >
                Title*
              </label>
              <select
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="text-[#333] mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              >
                <option value="Mr">Mr</option>
                <option value="Miss">Miss</option>
                <option value="Mrs">Mrs</option>
              </select>
            </div>
            <div className="flex lg:gap-10 lg:flex-row flex-col pb-4">
              <div className="lg:w-1/2 pb-4">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-white"
                >
                  First Name*
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="text-[#333] mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                />
              </div>
              <div className="lg:w-1/2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-white"
                >
                  Last Name*
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="text-[#333] mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex lg:gap-10 lg:flex-row flex-col pb-4">
              <div className="lg:w-1/2 pb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email*
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`text-[#333] mt-1 block w-full py-2 px-3 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>
              <div className="lg:w-1/2">
                <label
                  htmlFor="mobilePhone"
                  className="block text-sm font-medium text-white"
                >
                  Mobile Phone*
                </label>
                <input
                  type="number"
                  name="mobilePhone"
                  value={formData.mobilePhone}
                  onChange={handleChange}
                  required
                  className="text-[#333] mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="picture"
              className="block text-sm font-medium text-white m-0"
            >
              Upload your picture (optional)
            </label>
            <input
              type="file"
              id="picture"
              name="picture"
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="resume"
              className="block text-sm font-medium text-white"
            >
              Upload your resume*
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleFileChange}
              required
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </div>
          <div className="pb-6">
            <label
              htmlFor="about"
              className="block text-sm font-medium text-white"
            >
              Tell us more about yourself
            </label>
            <textarea
              type="text"
              name="about"
              onChange={handleChange}
              required
              rows="5"
              className="mt-1 block w-full px-3 border pb-40 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm text-[#333]"
            />
          </div>
          <div className="max-w-[250px] mx-auto">
            <button
              type="submit"
              className="bg-[#333] hover:text-teal-500 text-white font-bold py-2 px-4 rounded"
            >
              Submit your candidacy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobDetails;
