import React from 'react'
import {Formik, useFormik} from 'formik';
const Contact = () => {
  const handleSubmit = (values)=>{
    console.log(values);

};
const initialValues = {
name: '',
email: '',
subject: '',
message: '',

};
const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,

});

 
    
      return (
                            
        <form method="POST" id="contactForm" name="contactForm" class="contactForm"
        onSubmit={(e) => handleSubmit(e)}>
										<div class="row">
											<div class="col-md-6">
												<div class="form-group">
													<label class="label" for="name">Full Name</label>
													<input type="text"
                           class="form-control"
                            name="name" 
                            id="name" 
                            placeholder="Name"/>
                            onChange={formik.handleChange}
												</div>
											</div>
											<div class="col-md-6"> 
												<div class="form-group">
													<label class="label" for="email">Email Address</label>
													<input type="email"
                           class="form-control"
                            name="email" 
                            id="email" 
                            placeholder="Email"/>
                            onChange={formik.handleChange}
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<label class="label" for="subject">Subject</label>
													<input type="text"
                           class="form-control"
                            name="subject" 
                            id="subject"
                             placeholder="Subject"/>
                             onChange={formik.handleChange}
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<label class="label" for="#">Message</label>
													<textarea name="message"
                           class="form-control" 
                           id="message" 
                           cols="30" rows="4" 
                           placeholder="Message">
                            onChange={formik.handleChange}

                           </textarea>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<input type="submit" value="Send Message" class="btn btn-primary"/>
													<div class="submitting"></div>
												</div>
											</div>
										</div>
									</form>
      );
  
}

export default Contact
