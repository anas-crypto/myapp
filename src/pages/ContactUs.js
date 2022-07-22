import React from 'react';
import Contact from '../components/Contact';
import './css/style.css';
import './css/animate.css';
import './css/bootstrap.min.css';

const ContactUs = () => {
  return (
    <section className='ftco-section'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 text-center mb-5'>
            <h2 className='heading-section'>Contact Form #06</h2>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-md-12'>
            <div className='wrapper'>
              <div className='row no-gutters mb-5'>
                <div className='col-md-7'>
                  <div className='contact-wrap w-100 p-md-5 p-4'>
                    <h3 className='mb-4'>Contact Us</h3>
                    <div id='form-message-warning' className='mb-4'></div>
                    <div id='form-message-success' className='mb-4'>
                      Your message was sent, thank you!
                    </div>
                    <Contact />
                  </div>
                </div>
                <div className='col-md-5 d-flex align-items-stretch'>
                  <div id='map'></div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-3'>
                  <div className='dbox w-100 text-center'>
                    <div className='icon d-flex align-items-center justify-content-center'>
                      <span className='fa fa-map-marker'></span>
                    </div>
                    <div className='text'>
                      <p>
                        <span>Address:</span> 198 West 21th Street, Suite 721
                        New York NY 10016
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='dbox w-100 text-center'>
                    <div className='icon d-flex align-items-center justify-content-center'>
                      <span className='fa fa-phone'></span>
                    </div>
                    <div className='text'>
                      <p>
                        <span>Phone:</span>{' '}
                        <a href='tel://1234567920'>+ 1235 2355 98</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='dbox w-100 text-center'>
                    <div className='icon d-flex align-items-center justify-content-center'>
                      <span className='fa fa-paper-plane'></span>
                    </div>
                    <div className='text'>
                      <p>
                        <span>Email:</span>{' '}
                        <a href='mailto:info@yoursite.com'>info@yoursite.com</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='dbox w-100 text-center'>
                    <div className='icon d-flex align-items-center justify-content-center'>
                      <span className='fa fa-globe'></span>
                    </div>
                    <div className='text'>
                      <p>
                        <span>Website</span> <a href='#'>yoursite.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
