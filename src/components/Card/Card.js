import React from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import checkmark from './Green-Check-Mark-Transparent-Background.png';
import 'reactjs-popup/dist/index.css';
import '../Card/Card.css';
import profile from './profile.jpg';
import { useSpring, animated } from 'react-spring';


const Card = ({page, messageChange, emailChange, email, message, layoutChange}) => {
    const formId = 'iL7BUkVi'
    const formSparkUrl = `https://submit-form.com/${formId}`

    const submitForm = async (event) => {
        event.preventDefault();
        await postSubmission();
    }

    const postSubmission = async () => {
        const payload = {
            message: message,
            email: email
        };

        try {
          if(email.includes('@') && email.includes('.')) {
            const result = await axios.post(formSparkUrl, payload)
            layoutChange('popup');
          }
          else {
            window.alert('please enter a valid email address');
          }
        } catch(error) {
            console.log(error);
        }
    }
    
    const props = useSpring({ to: { opacity: 1 }, 
                              from: { opacity: 0 },
                              reset: true,
                              duration: 1000 }) 
                              

    return(
    
        (() => {
            if(page === 'home') {
                return(
                    <div className=''>
                        <h1 className='fl light-gray ml3 w-40 huge'>Hi, Im Jackson and Im a front end web developer </h1>
                        <img className='profile' src={profile} />
                    </div>
                )
            }
            if(page === 'about') {
              return(
                <div className='vertical-center w-50 dib br2 pa3 grow bw2 shadow-4 bg-moon-gray'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur, tellus sed efficitur bibendum, quam quam laoreet magna, at accumsan ex neque vitae lectus. Nullam faucibus orci at ante aliquam, in pulvinar ligula rhoncus. Sed congue neque sit amet magna malesuada, eu dignissim enim mattis. Suspendisse vehicula mauris eu auctor imperdiet. Etiam commodo nibh eu tellus pellentesque, at ornare lorem vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis mollis risus, ut dapibus dolor. Pellentesque vitae ultricies arcu. Nam vel felis dui. Fusce interdum vitae leo vulputate aliquam. Phasellus consequat leo ut tellus accumsan gravida. Vestibulum rhoncus iaculis nibh sit amet blandit. Curabitur non urna vel diam pellentesque viverra eu vitae ipsum. Maecenas lacus nisl, sagittis vitae dui sit amet, volutpat facilisis ante. Aliquam sit amet tortor pharetra, auctor massa at, pulvinar ipsum. Aenean euismod fringilla mi. Cras efficitur risus et dictum mattis. Donec non libero eget est tincidunt placerat. Proin consectetur, nunc tincidunt finibus varius, enim quam commodo velit, non blandit neque metus ac massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
                </div>
              )
            }
            
            if(page === 'projects') {
                return(
                    <div className='vertical-center w-50 dib br2 pa3 grow bw2 shadow-4 bg-moon-gray h-50'>
                      <h1 className='bb'>Face Finder</h1>
                      <div className='bg-white br4 w-100 overflow-auto overflow-y-hidden mb4 shadow-4'>
                        <div className='w-20 fl br h3'>
                          <div className='recognizerbackground'></div>
                        </div>
                        <div className='w-60 fl br h3'>
                          <h5 className='dib v-mid'>Using the face detecton api from Clarify. Login to this tool to find a face in an image.</h5>
                        </div>
                        <div className='w-20 fl h3'>
                          <Popup
                          trigger={<button className="button1"> More Info </button>}
                          modal
                          nested
                        >
                          {close => (
                            <div className="modal">
                              <button className="close" onClick={close}>
                                &times;
                              </button>
                              <div className="header"> Face Recognizer </div>
                              <div className="content">
                                {' '}
                                This is my first big project using react that I completed front to back. The idea
                                came from the great teachers at ZTM on Udemy. The project is straightforward, but 
                                I learned a great deal about how React interacts with API's, external libraries, and 
                                Node. This is a work in progress, as there are a couple more features I am looking to add in the next few months. 
                                
                                <br /><br />
                                The Frontend is built using React, and the Clarifai Api. The backend is built with Node.js, MySQL 
                                for the database, and hosted using Heroku. Feel free to checout the source code on Github,
                                or the live site. 
                              </div>
                              <div className="actions">
                                <a target="_blank" href='https://face-finding-project.herokuapp.com/'><button className='pa1'>Live site</button></a>
                                <a className='ml1 mr1' target="_blank" href='https://github.com/WattBowers/facerecognizer-front'><button className='pa1'>Frontend Github Repo</button></a>
                                <a target="_blank" href='https://github.com/WattBowers/facerecognizer-api'><button className='pa1'>Backend Github Repo</button></a>
                              </div>
                            </div>
                          )}
                          </Popup>
                        </div>
                      </div>
                      <h1 className='bb'>The Boredom Butler</h1>
                      <div className='bg-white br4 w-100 overflow-auto overflow-y-hidden shadow-4'>
                        <div className='w-20 fl br h3'>
                          <div className='butlerbackground'></div>
                        </div>
                        <div className='w-60 fl br h3'>
                          <h5 className='dib v-mid'>Dont know what movie or TV show to watch? Let The Boredom Butler help.</h5>
                        </div>
                        <div className='w-20 fl h3'>
                          <Popup
                            trigger={<button className="button1"> More Info </button>}
                            modal
                            nested
                          >
                            {close => (
                              <div className="modal">
                                <button className="close" onClick={close}>
                                  &times;
                                </button>
                                <div className="header"> The Boredom Butler </div>
                                <div className="content">
                                  {' '}
                                  This project is somehting that I built to hone my skills with react, and to get more aquainted with 
                                  modern React syntax. My main focus when building this site was shifting from using Class based components
                                  to to functional ones using Hooks. I also taught me a lot about using and editing SVG files to fit create 
                                  well optimized experiances. I also find it to be a useful tool, and something I am planning on building upon to 
                                  add functionality for different types of media, and a more fluent user expiriance. 
                                  <br /><br />
                                  The project is built using React, and the ImDb API. 
                                </div>
                                <div className="actions">
                                  <a className='mr1' target="_blank" href='https://the-boredom-butler.herokuapp.com/'><button className='pa1'>Live site</button></a>
                                  <a target="_blank" href='https://github.com/WattBowers/Boredom-Butler'><button className='pa1'>Github Repo</button></a>
                                </div>
                              </div>
                            )}
                          </Popup>
                        </div>
                      </div>
                    </div>
                    
                )
            }
            if(page === 'skills') {
                return(
                    <div className='vertical-center w-50 dib br2 pa3 grow bw2 shadow-4 bg-moon-gray'>
                        <p>Skills</p>
                        
                    </div>
                    
                )
            }
            if(page === 'contact') {
                return(
                    <div className='vertical-center w-50 dib br2 pa3 grow bw2 shadow-4 bg-moon-gray'>
                    <main class="pa4 black-80">
                      <form class="measure center">
                        <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                          <legend class="f4 fw6 ph0 mh0">Contact Form</legend>
                          <div class="mt3">
                            <label class="db fw6 lh-copy f5 mb2">Return email</label>
                            <input onChange={emailChange} class="pa2 input-reset ba formcolor w-100" type="email" name="email-address"  id="email-address"/>
                          </div>
                          <div class="mv3">
                          <label  class="b db fw6 lh-copy f5">Message</label>
                          <textarea onChange={messageChange} id="comment" name="comment" class=" db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2 mt2 formcolor" aria-describedby="comment-desc"></textarea>
                          </div>
                          
                        </fieldset>
                        <div>
                          <input onClick={submitForm} 
                                class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="submit" value="Send"
                                />
                        </div>
                      </form>
                    </main>
                    </div>

                  
                )
              }
              if(page === 'popup') {
                return(
                  <div className='vertical-center w-50 dib br2 pa3 grow bw2 shadow-4 bg-moon-gray'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur, tellus sed efficitur bibendum, quam quam laoreet magna, at accumsan ex neque vitae lectus. Nullam faucibus orci at ante aliquam, in pulvinar ligula rhoncus. Sed congue neque sit amet magna malesuada, eu dignissim enim mattis. Suspendisse vehicula mauris eu auctor imperdiet. Etiam commodo nibh eu tellus pellentesque, at ornare lorem vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis mollis risus, ut dapibus dolor. Pellentesque vitae ultricies arcu. Nam vel felis dui. Fusce interdum vitae leo vulputate aliquam. Phasellus consequat leo ut tellus accumsan gravida. Vestibulum rhoncus iaculis nibh sit amet blandit. Curabitur non urna vel diam pellentesque viverra eu vitae ipsum. Maecenas lacus nisl, sagittis vitae dui sit amet, volutpat facilisis ante. Aliquam sit amet tortor pharetra, auctor massa at, pulvinar ipsum. Aenean euismod fringilla mi. Cras efficitur risus et dictum mattis. Donec non libero eget est tincidunt placerat. Proin consectetur, nunc tincidunt finibus varius, enim quam commodo velit, non blandit neque metus ac massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
                        <Popup
                          defaultOpen
                          modal
                          className="popup w-30"
                        >
                          {close => (
                            <div className="modal">
                              <button className="close" onClick={close}>
                                &times;
                              </button>
                              <div className="header"> Thank you, I will get back to you as soon as possible.</div>
                              <div className="content center">
                                {' '}
                                <animated.img  className='h-10 w-10 checkmark' src={checkmark} style={props} />
                              </div>
                            </div>
                          )}
                        </Popup>
                  </div>
                  
                  
                )
              }

        
        })()
        
    );
    
};

export default Card;