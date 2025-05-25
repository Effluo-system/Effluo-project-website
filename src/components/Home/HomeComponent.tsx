import { useNavigate } from "react-router";
import {DOMAIN} from "../../routes/routes.json";

const HomeComponent = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log("Learn More button clicked");
    navigate(`${DOMAIN.route}`); 
  };

    return (
        <section className="homeSection py-8 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex-1 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
                        Context-Aware CI/CD Optimizer

                    </h2>
                    <p className="text-lg text-sky-100">
                        Revolutionize your software development workflow with AI-driven automation 
                        that understands your project's context and adapts to your team's needs.
                    </p>
                    <div>
                        <button className="text-black" onClick={() => handleClick()} style= {{backgroundColor:'#3dd9e3'}}>Learn More</button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex-1">
                    <img src="src/assets/devops-removebg.png" alt="devops" className="w-full h-auto rounded-2xl" />
                </div>
            </div>

            <hr className= "bg-sky-600 mt-3"/>

            <div className="feature-section mt-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
                        Components

                    </h2>
        <div className="grid grid-cols-4 gap-4">
  <div>01</div>
  <div>02</div>
    <div>03</div>
    <div>04</div>
</div>
            </div>
        </section>
    );
};

export default HomeComponent;
