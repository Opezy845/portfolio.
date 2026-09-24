import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
    FiArrowLeft,
    FiBriefcase,
    FiDollarSign,
    FiFileText,
    FiSend,
    FiUser
} from "react-icons/fi";
import "./Application.css";
function Application() {
    const navigate = useNavigate();
const { id } = useParams();
const projectId = Number(id);

    const [formData, setFormData] = useState({
        coverLetter: "",
        price: "",
        deliveryTime: ""
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const projects = [
    {
        id: 1,
        title: "Design a modern logo for my brand",
        client: "SkillBridge Client",
        budget: "₦15,000,000",
        category: "Logo Design",
        description:
            "I am looking for someone who can create a clean, modern, and professional logo for my brand."
    },
    {
        id: 2,
        title: "Build a responsive website for my business",
        client: "SkillBridge Client",
        budget: "₦500000670",
        category: "Website Development",
        description:
            "I am looking for someone who can create a clean and responsive website for my business."
    },
    {
        id: 3,
        title: "Design a professional CV and resume",
        client: "SkillBridge Client",
        budget: "₦32,100,000",
        category: "CV Design",
        description:
            "I am looking for someone who can create a professional CV and resume that presents my skills clearly."
    },
    {
        id: 4,
        title: "Edit engaging videos for social media",
        client: "SkillBridge Client",
        budget: "₦100,005,430",
        category: "Video Editing",
        description:
            "I am looking for someone who can edit engaging videos for YouTube, TikTok, and Instagram."
    },
    {
        id: 5,
        title: "Manage my social media marketing",
        client: "SkillBridge Client",
        budget: "₦15,000",
        category: "Social Media Marketing",
        description:
            "I am looking for someone who can help manage my social media presence and grow my brand."
    }
];

const project =
    projects.find((item) => item.id === projectId) || projects[0];

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value
        }));

        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.coverLetter || !formData.price || !formData.deliveryTime) {
            setError("Please complete all application fields.");
            return;
        }

        const currentUser = JSON.parse(
            localStorage.getItem("skillbridgeCurrentUser")
        );

        if (!currentUser) {
            navigate("/login");
            return;
        }

        const existingApplications =
            JSON.parse(
                localStorage.getItem("skillbridgeApplications")
            ) || [];

        const newApplication = {
            id: Date.now(),
            projectId: project.id,
            projectTitle: project.title,
            applicantId: currentUser.id,
            applicantName: currentUser.fullName,
            applicantEmail: currentUser.email,
            coverLetter: formData.coverLetter,
            price: formData.price,
            deliveryTime: formData.deliveryTime,
            status: "Pending",
            createdAt: new Date().toISOString()
        };

        localStorage.setItem(
            "skillbridgeApplications",
            JSON.stringify([
                ...existingApplications,
                newApplication
            ])
        );

        setSuccess("Your application has been submitted successfully.");

        setFormData({
            coverLetter: "",
            price: "",
            deliveryTime: ""
        });
    };

    return (
        <main className="application-page">
    <div className="application-container">

        <Link to="/browse-gigs" className="application-back">
            <FiArrowLeft />
            Back to Gig Details
        </Link>

        <header className="application-header">
            <span className="application-label">
                SkillBridge Application
            </span>

            <h1>Apply for this project</h1>

            <p>
                Send your proposal and tell the client what you can offer.
            </p>
        </header>

        <div className="application-layout">

            {/* LEFT */}
            <section className="application-card">

                <h2>Your Application</h2>

                <p>
                    Explain why you are the right person for this project.
                </p>

                <form>

                    <div className="application-form-group">
                        <label>Cover Letter</label>

                        <textarea
                            placeholder="Tell the client about your skills, experience, and how you can help with this project..."
                        ></textarea>
                    </div>

                    <div className="application-form-group">
                        <label>Your Proposal</label>

                        <input
                            type="text"
                            placeholder="Enter your proposed price"
                        />
                    </div>

                    <button
                        type="submit"
                        className="application-submit"
                    >
                        Submit Application
                    </button>

                </form>

            </section>

            {/* RIGHT */}
            <aside className="project-card">

                <span className="project-card-label">
                    Project
                </span>

                <h2>
                    {project.title}
                </h2>

                <div className="project-info">

                    <div className="project-info-item">
                        <span>Posted by</span>
                       <span>{project.client}</span>
                    </div>

                    <div className="project-info-item">
                        <span>Budget</span>
                        <span className="project-budget">
                            {project.budget}
                        </span>
                    </div>

                    <div className="project-info-item">
                        <span>Project</span>
                      <span>{project.category}</span>
                    </div>

                </div>

                <div className="project-description">

                    <h3>About the project</h3>

                    <p>
                       <p>
    {project.description}
</p>
                    </p>

                </div>

            </aside>

        </div>
    </div>
</main>
    );
}

export default Application;