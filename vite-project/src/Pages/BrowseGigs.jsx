import { useEffect, useState } from "react";
import { FiPlus, FiX, FiTrash2 } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";

import websiteDesign from "../assets/website.png";
import cvDesign  from "../assets/cv.jpg";
import VideoDEsign from "../assets/video.jpg"
import Marketing from "../assets/Marketing.jpg";
import "./BrowseGigs.css";

const defaultSkills = [
    
{
        id: 1,
        title: "Logo Design",
        category: "Design",
        description: "Professional logo design for your brand.",
        price: 15000000,
        image: "/logo.png",
    },
    {
        id: 2,
        title: "Website Development",
        category: "Development",
        description: "Modern responsive websites for businesses.",
        price: 500000670,
        image: websiteDesign
    },
    {
        id: 3,
        title: "Content Writing",
        category: "Writing",
        description: "Quality articles and website content.",
        price: 32100000,
        image: cvDesign
    },
     {
        id: 4,
        title: "Video Design",
        category: "Writing",
        description: "Quality articles and website content.",
        price: 100005430,
        image: VideoDEsign
    },
    {
        id:5,
        title: "MarketingDesign",
        category: "Marketing",
        description: "I will help manage your social media presence and create strategies to help your brand reach more people.",
        price: 34230000,
        image: Marketing 
    }
];
function BrowseGigs() {
    const navigate = useNavigate();
    const [skills, setSkills] = useState(() => {
    const savedSkills = localStorage.getItem("skillbridgeSkills");

    if (savedSkills) {
        try {
            const parsedSkills = JSON.parse(savedSkills);

            if (parsedSkills.length > 0) {
                return parsedSkills;
            }
        } catch {
            localStorage.removeItem("skillbridgeSkills");
        }
    }

    return defaultSkills;
});

    const [showForm, setShowForm] = useState(false);

   const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
    image: ""
});

    useEffect(() => {
        localStorage.setItem(
            "skillbridgeSkills",
            JSON.stringify(skills)
        );
    }, [skills]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

   const handleAddSkill = (e) => {
    e.preventDefault();

    if (
        !formData.title.trim() ||
        !formData.category.trim() ||
        !formData.description.trim() ||
        !formData.price
    ) {
        alert("Please fill in all fields.");
        return;
    }

    const newSkill = {
        id: Date.now(),
        title: formData.title,
        category: formData.category,
        description: formData.description,
        price: Number(formData.price),
        image: formData.image
    };

    setSkills((prev) => [...prev, newSkill]);

    setFormData({
        title: "",
        category: "",
        description: "",
        price: "",
        image: ""
    });

    setShowForm(false);
};

    const handleDeleteSkill = (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to remove this skill?"
        );

        if (!confirmDelete) return;

        setSkills((prev) =>
            prev.filter((skill) => skill.id !== id)
        );
    };

    return (
        <main className="browse-page">

            <div className="browse-header">
                <div>
                    <span className="browse-label">
                        SKILLBRIDGE MARKETPLACE
                    </span>

                    <h1>Explore Student Skills</h1>

                    <p>
                        Find talented students offering skills and services.
                    </p>
                </div>

                <button
                    className="add-skill-button"
                    onClick={() => setShowForm(true)}
                >
                    <FiPlus />
                    Add Skill
                </button>
            </div>


            <div className="skills-grid">

                {skills.map((skill) => (
                    <div className="skill-card" key={skill.id}>

                        <div className="skill-card-top">
                            <span className="skill-category">
                                {skill.category}
                            </span>

                            <button
                                className="delete-skill"
                                onClick={() =>
                                    handleDeleteSkill(skill.id)
                                }
                            >
                                <FiTrash2 />
                            </button>
                        </div>

<div className="skill-image">
    {skill.image ? (
        <img src={skill.image} alt={skill.title} />
    ) : (
        <div className="image-placeholder">
            <FiPlus />
        </div>
    )}
</div>

<div className="skill-icon">
    {skill.title.charAt(0).toUpperCase()}
</div>

<h2>{skill.title}</h2>

                        <p>{skill.description}</p>

                        <div className="skill-bottom">

                            <div>
                                <small>Starting from</small>

                                <strong>
                            ₦{Number(skill.price || 56454000).toLocaleString()}
                        </strong>
                            </div>
                       
<Link
    to={`/skill/${skill.id}`}
    className="view-skill"
>
    View Skill
</Link>


                
                        </div>

                    </div>
                ))}


                {/* ADD SKILL CARD */}

                <button
                    className="add-skill-card"
                    onClick={() => setShowForm(true)}
                >
                    <div className="plus-circle">
                        <FiPlus />
                    </div>

                    <h2>Add New Skill</h2>

                    <p>
                        Have another skill to offer?
                        Add it to the marketplace.
                    </p>
                </button>

            </div>


            {/* ADD SKILL MODAL */}

            {showForm && (
                <div className="skill-modal-overlay">

                    <div className="skill-modal">

                        <button
                            className="close-modal"
                            onClick={() => setShowForm(false)}
                        >
                            <FiX />
                        </button>

                        <h2>Add a New Skill</h2>

                        <p>
                            Add your service to the SkillBridge marketplace.
                        </p>

                        <form onSubmit={handleAddSkill}>

                            <label>
                                Skill Name
                            </label>

                            <input
                                type="text"
                                name="title"
                                placeholder="e.g. Graphic Design"
                                value={formData.title}
                                onChange={handleChange}
                            />


                            <label>
                                Category
                            </label>

                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                            >
                                <option value="">
                                    Select category
                                </option>

                                <option value="Design">
                                    Design
                                </option>

                                <option value="Development">
                                    Development
                                </option>

                                <option value="Writing">
                                    Writing
                                </option>

                                <option value="Marketing">
                                    Marketing
                                </option>

                                <option value="Video">
                                    Video
                                </option>

                                <option value="Other">
                                    Other
                                </option>
                            </select>


                            <label>
                                Description
                            </label>

                            <textarea
                                name="description"
                                placeholder="Describe the service..."
                                value={formData.description}
                                onChange={handleChange}
                                rows="4"
                            />


                            <label>
                                Starting Price
                            </label>

                            <input
                                type="number"
                                name="price"
                                placeholder="e.g. 15000"
                                value={formData.price}
                                onChange={handleChange}
                            />

                            <label>
    Skill Image
</label>

<div className="image-upload-box">
    <label htmlFor="skill-image" className="image-upload-button">
        <FiPlus />
        Add Image
    </label>

    <input
        id="skill-image"
        type="file"
        accept="image/*"
        onChange={(e) => {
            const file = e.target.files[0];

            if (!file) return;

            const reader = new FileReader();

            reader.onload = () => {
                setFormData((prev) => ({
                    ...prev,
                    image: reader.result
                }));
            };

            reader.readAsDataURL(file);
        }}
    />

    {formData.image && (
        <img
            src={formData.image}
            alt="Skill preview"
            className="image-preview"
        />
    )}
</div>

                            <button
                                type="submit"
                                className="save-skill"
                            >
                                <FiPlus />
                                Add Skill
                            </button>

                        </form>

                    </div>

                </div>
            )}

        </main>
    );
}

export default BrowseGigs;