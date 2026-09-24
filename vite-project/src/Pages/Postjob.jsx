import { useState } from "react";
import { FiArrowLeft, FiSend } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import "./postjob.css";

function PostJob() {
    const navigate = useNavigate();

    const [job, setJob] = useState({
        title: "",
        category: "",
        description: "",
        budget: "",
        deadline: "",
    });

    const handleChange = (e) => {
        setJob({
            ...job,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Job posted:", job);

        alert("Your job has been posted successfully!");

        navigate("/dashboard");
    };

    return (
        <main className="post-job-page">

            <div className="post-job-container">

                <Link
                    to="/dashboard"
                    className="post-job-back"
                >
                    <FiArrowLeft />
                    Back to Dashboard
                </Link>

                <div className="post-job-header">
                    <span>SKILLBRIDGE</span>

                    <h1>Post a Job</h1>

                    <p>
                        Tell talented students what you need
                        and find the right person for your project.
                    </p>
                </div>

                <form
                    className="post-job-form"
                    onSubmit={handleSubmit}
                >

                    <div className="form-group">
                        <label>Job Title</label>

                        <input
                            type="text"
                            name="title"
                            value={job.title}
                            onChange={handleChange}
                            placeholder="e.g. I need a logo for my business"
                            required
                        />
                    </div>

                    <div className="form-row">

                        <div className="form-group">
                            <label>Category</label>

                            <select
                                name="category"
                                value={job.category}
                                onChange={handleChange}
                                required
                            >
                                <option value="">
                                    Select a category
                                </option>

                                <option value="development">
                                    Development
                                </option>

                                <option value="design">
                                    Graphic Design
                                </option>

                                <option value="writing">
                                    Writing
                                </option>

                                <option value="marketing">
                                    Marketing
                                </option>

                                <option value="video">
                                    Video & Animation
                                </option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Budget</label>

                            <input
                                type="text"
                                name="budget"
                                value={job.budget}
                                onChange={handleChange}
                                placeholder="e.g. ₦30,000"
                                required
                            />
                        </div>

                    </div>

                    <div className="form-group">
                        <label>Project Description</label>

                        <textarea
                            name="description"
                            value={job.description}
                            onChange={handleChange}
                            placeholder="Describe what you need, the requirements, and what you expect from the freelancer..."
                            rows="7"
                            required
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label>Deadline</label>

                        <input
                            type="date"
                            name="deadline"
                            value={job.deadline}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="post-job-button"
                    >
                        <FiSend />
                        Post Job
                    </button>

                </form>

            </div>

        </main>
    );
}

export default PostJob;