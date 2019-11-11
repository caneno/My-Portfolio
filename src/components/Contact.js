import React, {Component} from 'react';
import '../styles/Contact.css'

class Contact extends Component {
    render() { 
        return (
            
            <form name="contact" className='contact-wrapper' action="" method="POST"  data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                    <div className='contact-container'>
                    
                            <label>Name</label>
                            <input type="text" id="name" name="name" placeholder="Your name.." />


                            <label>Email</label>
                            <input type="email" id="email" name="email" placeholder="Your email" />


                            <label>Subject</label>
                            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                            <input type="submit" value="Submit" />
                        
                    </div> 
            </form> 
          );
    }
}
 
export default Contact;
