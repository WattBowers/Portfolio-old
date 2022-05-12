import React from 'react';

const Links = ({ layoutChange }) => {
    return (
      <div className='h3 mt0 w-50 center bb'>
          <div className="dib">
            <ul className="list ph3 ph3-ns pv3">
                <li class="dib mr2"><a href="#" onClick={() => {layoutChange('home')}} class="f6 f5-ns b db pa2 link dim black">Home</a></li>
                <li class="dib mr2"><a href="#" onClick={() => {layoutChange('projects')}} class="f6 f5-ns b db pa2 link dim black">Projects</a></li>
                <li class="dib mr2"><a href="#" onClick={() => {layoutChange('skills')}} class="f6 f5-ns b db pa2 link dim black">Skills</a></li>
                <li class="dib mr2"><a href="#" onClick={() => {layoutChange('contact')}} class="f6 f5-ns b db pa2 link dim black">Contact</a></li>
            </ul>
          </div>
        
      </div>
    );
  }
  
  export default Links;