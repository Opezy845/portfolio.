import {
    FiPenTool,
    FiCode,
    FiEdit3,
    FiVideo,
    FiBarChart2,
    FiCpu,
    FiArrowRight
} from "react-icons/fi";

const categories = [
    {
        title: "Design & Creative",
        description: "Logos, branding & graphics",
        icon: <FiPenTool />,
        className: "purple"
    },
    {
        title: "Development",
        description: "Websites, apps & software",
        icon: <FiCode />,
        className: "green"
    },
    {
        title: "Writing & Translation",
        description: "Articles, copy & translation",
        icon: <FiEdit3 />,
        className: "orange"
    },
    {
        title: "Video & Animation",
        description: "Editing, motion & content",
        icon: <FiVideo />,
        className: "red"
    },
    {
        title: "Digital Marketing",
        description: "Social media, SEO & ads",
        icon: <FiBarChart2 />,
        className: "blue"
    },
    {
        title: "AI Services",
        description: "AI tools, automation & solutions",
        icon: <FiCpu />,
        className: "purple"
    }
];

const categoryLinks = {
    "Design & Creative": "/browse-gigs?category=design",
    "Development": "/browse-gigs?category=development",
    "Writing & Translation": "/browse-gigs?category=writing",
    "Video & Animation": "/browse-gigs?category=video",
    "Digital Marketing": "/browse-gigs?category=marketing",
    "AI Services": "/browse-gigs?category=ai"
};

function PopularCategories() {
    return (
        <section className="categories-section" id="categories">

            <div className="section-header">
                <div>
                    <span className="section-label">
                        Explore opportunities
                    </span>

                    <h2>
                        Browse Popular Categories
                    </h2>

                    <p>
                        Find the right skills and services to help bring
                        your next project to life.
                    </p>
                </div>

                <button className="view-categories">
                    View all categories
                    <FiArrowRight />
                </button>
            </div>

            <div className="categories-grid">
                {categories.map((category) => (
                    <a
                        href={categoryLinks[category.title]}
                        className="category-card"
                        key={category.title}
                    >
                        <div className={`category-icon ${category.className}`}>
                            {category.icon}
                        </div>

                        <div className="category-text">
                            <span>{category.title}</span>
                            <small>{category.description}</small>
                        </div>

                        <FiArrowRight className="category-arrow" />
                    </a>
                ))}
            </div>

        </section>
    );
}

export default PopularCategories;