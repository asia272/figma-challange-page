import React from 'react';
import "./GuaranteeSection.css";
import guaranteeImg from "../../assets/guarantee.png"

const GuaranteeSection = () => {
    return (
        <section className='section-3'>
            <div className="guarantee-content">
                <h3>100% Satisfaction Money-Back Guarantee</h3>
                <p>At Dance Yourself Fit, we're confident you'll love our 28-Day Challenge. That's why we offer a 100% Satisfaction Money-Back Guarantee. If for any reason you're not completely satisfied within the first 30 days of your journey with us, we'll refund your payment in full, no questions asked!
                </p>
                <p>
                    We're here to support you every step of the way, and if you're not thrilled with your experience, we've got you covered. Join us risk-free and start transforming your life today!
                </p>

            </div>
         
                <img src={guaranteeImg} alt="guaranteeImg" />
            
        </section>
    )
}

export default GuaranteeSection
