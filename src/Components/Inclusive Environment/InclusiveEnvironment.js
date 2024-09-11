import React from "react";
import "./InclusiveEnvironment.css";

const InclusiveEnvironment = () => {
    return (
        <section className="inclusive-environment">
            <div className="content">
                <h1 className="main-heading">Creating an Inclusive Environment</h1>
                <p className="intro-text">
                    We’re dedicated to hiring diverse talent and ensuring that we treat you with respect and support throughout the interview process and once you join Fund for Bharat. We embrace diversity and strive to create conditions that provide everyone with an equal opportunity to thrive. We offer several programmes and initiatives to foster these values.
                </p>
            </div>
            <div className="programmes">
                <div className="programme">
                    <h6 className="programme-heading">Diversity, Engagement and Belonging</h6>
                    <p className="programme-description">
                        The Diversity, engagement and belonging (DEB) programme unlocks the potential of all employees by investing in an inclusive community centred on education, introspection, opportunity and growth.
                    </p>
                </div>
                <div className="programme">
                    <h6 className="programme-heading">Rising Tides</h6>
                    <p className="programme-description">
                        Rising Tides is a six-month sponsorship programme for a talented and diverse group of high performers and emerging leaders at Fund for Bharat who have historically lacked access to this support. Programme participants receive career development training, executive coaching and one-to-one sponsorship from a Fund for Bharat executive team member, with a focus on building a supportive community of peers.
                    </p>
                </div>
            </div>
            <div className="programmes">
                <div className="programme">
                    <h6 className="programme-heading">Employee Resource Groups</h6>
                    <p className="programme-description">
                        Employee resource groups (ERGs) support, promote and celebrate groups of employees who have come together around shared characteristics or life experiences.
                    </p>
                </div>
                <div className="programme">
                    <h6 className="programme-heading">Partnerships</h6>
                    <p className="programme-description">
                        Partnership initiatives, like our collaboration with The Next Chapter, an apprenticeship programme for formerly incarcerated individuals, underscore Fund for Bharat’s commitment to DEB. Together with The Last Mile, The Next Chapter trains and hires returning citizens for Fund For Bharat engineering teams.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default InclusiveEnvironment;
