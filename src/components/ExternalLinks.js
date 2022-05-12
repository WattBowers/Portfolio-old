import React from 'react';
import GithubImage from '../images/GithubImage.png'
import LinkedinImage from '../images/linkedin-icon-18-32.png'

const ExternalLinks = () => {
    return (
    <footer className='fixed left-0 bottom-2 right-0 h3'>  
        <p>This is text where is the picture</p>
        <a href='https://github.com/WattBowers'><img className='ma1' alt='logo' style={{width:'auto',height:'auto'}} src={GithubImage}/></a>
        <a href='https://ca.linkedin.com/'><img className='ma1' alt='logo' style={{width:'auto',height:'auto'}} src={LinkedinImage}/></a>
    </footer >  
    );
  }
  
  export default ExternalLinks;