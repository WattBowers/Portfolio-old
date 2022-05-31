import React from 'react';
import GithubImage from '../images/GithubImage.png'
import LinkedinImage from '../images/linkedin-icon-18-32.png'

const ExternalLinks = () => {
    return (
    <footer className='fixed left-0 bottom-0 right-0 h3'>  
        <a className='mt4' href='https://github.com/WattBowers'><img className='ma1 mt3' alt='logo' style={{width:'auto',height:'auto'}} src={GithubImage}/></a>
        <a className='mt4' href='https://www.linkedin.com/in/jackson-watt-bowers-35421513a/'><img className='ma1 mt1' alt='logo' style={{width:'auto',height:'auto'}} src={LinkedinImage}/></a>
    </footer >  
    );
  }
  
  export default ExternalLinks;