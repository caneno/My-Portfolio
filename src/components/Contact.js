import React, {Component} from 'react';
import '../styles/Contact.css'

class Contact extends Component {
    render() { 
        return (
            <div className='contact-wrapper'>
                <div className='contact-container'>
                    <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                        <label>Name</label>
                        <input type="text" id="fname" name="name" placeholder="Your name.." />


                        <label>Email</label>
                        <input type="email" id="email" name="email" placeholder="Your email" />


                        <label>Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                        <input type="submit" value="Submit" />
                    </form>
                </div>  
            </div>
            
          );
    }
}
 
export default Contact;
