import React from 'react'
import "./MainSection.css"
import form_footer_img from "../../assets/form-footer.png";
import checkIcon from "../../assets/check-icon.png";
import productImg from "../../assets/product.png";
import BonusSection from './BonusSection';
import bonusData from './bonusData';
import GuaranteeSection from './GuaranteeSection';

const MainSection = () => {
  return (
    <>
      <main>
        {/* section 1 */}
        <section className='section-1'>
          <div className="form-side">
            <div className='form-heading'>
              <button className='left-btn'>
                <span>1</span>
                contact Info
              </button>
              <button className='right-btn'>
                <span>2</span>
                Payment Details
              </button>

            </div>
            <form action="#">
              <div className='select-product'>
                <span>Select Product</span>
                <hr />
              </div>
              <div className='member-ship-div'>
                <span className='circle'></span>
                <span className='member-ship-span'>Membership</span>
                <span>28-Day Challenge Subscription + Free Bonuses</span>
              </div>
              <div className='payment-info'>
                <span>Payment Information</span>
                <hr />
              </div>
              <div>
                <label htmlFor="cartNumber">Card Number</label>
                <input type="text" />
              </div>
              <div className='form-group'>
                <div>
                  <label htmlFor="expDate">Exp Date</label>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" />
                </div>
              </div>
              <div className='summary'>
                <span>Summary</span>
                <hr />
              </div>
              <div className='member-ship-price'>
                <span>Membership</span>
                <span>€37/month</span>
              </div>
              <div className="agree-div">
                <span className='circle'></span>
                <span>I agree to terms and condition</span>
              </div>
              <button>Submit</button>
              <div className='form-footer'>
                <span>100% Secure & Safe Payments</span>
                <img src={form_footer_img} alt="imgFrom-footer" />
              </div>
            </form>
          </div>
          {/* section 1 Right side */}
          <div className="content-side">
            <img src={productImg} alt="" />
            <div className='challange-list'>
              <p>​24 Hours Cardio Workouts
                <span> (€240 VALUE)</span>
              </p>
              <p>12 Wake Up Yoga Sessions
                <span> (€120 VALUE)</span>
              </p>
              <p>8 Strength & Conditioning Session
                <span> (€80 VALUE)</span>
                s</p>
              <p>4 HIIT Workouts
                <span>(€40 VALUE)</span>
              </p>
              <p>4 Bums & Tums Sessions
                <span>(€40 VALUE)</span>
              </p>
              <p>4 Pilates Sessions (€40 VALUE)
                <span>(€40 VALUE)</span>
              </p>
              <p>4 Decompression Sessions
                <span>(€40 VALUE)</span>
              </p>
              <p>28-Day Meal Planner & Recipe Book
                <span>(€37 VALUE)</span>
                <br />
                AND SO MUCH MORE!
              </p>
            </div>
            <div className="total-value">
              <h3>TOTAL VALUE: €637</h3>
              <p>Get the 28-Day Challenge for €37 and all free bonuses: Goal Setting & Life Coaching Talks, Breathwork Sessions, Weight Loss Detox Plans</p>
            </div>

            <div>
              <p className='challenge-start-heading'>Challenge Starts In</p>
              <div className="challenge-start-in">
                <div className='circle-box'>
                  <div className="circle">
                    <span>21</span>
                  </div>
                  <p>Day</p>
                </div>
                <div className='circle-box'>
                  <div className="circle">
                    <span>13</span>
                  </div>
                  <p>Hour</p>
                </div>
                <div className='circle-box'>
                  <div className="circle">
                    <span>40</span>
                  </div>
                  <p>Minute</p>
                </div>
                <div className='circle-box'>
                  <div className="circle">
                    <span>04</span>
                  </div>
                  <p>Seconds</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* section 2 */}
        <section className='section-2'>
          <h1>START TODAY & CLAIM FREE BONUS!
          </h1>
          <div className='card-container'>
            {
              bonusData.map((item, id) => (
                <BonusSection item={item} />
              ))
            }
          </div>
        </section>
        {/* section 3 */}

      </main>
      <GuaranteeSection />
    </>
  )
}

export default MainSection
