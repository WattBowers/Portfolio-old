import React from 'react';
import './Links.css'

const Links = ({ layoutChange }) => {
    return (
      <div className=' dark h3 mt0 w-100 center bb'>
          <div className="dib">
            <ul className="light-gray list ph3 ph3-ns pb5">
                <li className="dib mr2"><a href="#" onClick={() => {layoutChange('home')}} className="light-gray f6 f5-ns b db pa2 link dim">Home</a></li>
                <li className="dib mr2"><a href="#" onClick={() => {layoutChange('about')}} className="light-gray f6 f5-ns b db pa2 link dim ">About</a></li>
                <li className="dib mr2"><a href="#" onClick={() => {layoutChange('projects')}} className="light-gray f6 f5-ns b db pa2 link dim ">Projects</a></li>
                <li className="dib mr2"><a href="#" onClick={() => {layoutChange('skills')}} className="light-gray f6 f5-ns b db pa2 link dim ">Skills</a></li>
                <li className="dib mr2"><a href="#" onClick={() => {layoutChange('contact')}} className="light-gray f6 f5-ns b db pa2 link dim ">Contact</a></li>
            </ul>
          </div>
        
      </div>
    );
  }
  
  export default Links;