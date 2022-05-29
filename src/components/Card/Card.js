import React from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import checkmark from './Green-Check-Mark-Transparent-Background.png';
import 'reactjs-popup/dist/index.css';
import '../Card/Card.css';
import { useSpring, animated } from 'react-spring';
import Face from './Facerecognizer-portfolio.png'

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
                    <div className='w-50 dib br2 pa3 ma4 grow bw2 shadow-4 bg-moon-gray'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur, tellus sed efficitur bibendum, quam quam laoreet magna, at accumsan ex neque vitae lectus. Nullam faucibus orci at ante aliquam, in pulvinar ligula rhoncus. Sed congue neque sit amet magna malesuada, eu dignissim enim mattis. Suspendisse vehicula mauris eu auctor imperdiet. Etiam commodo nibh eu tellus pellentesque, at ornare lorem vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis mollis risus, ut dapibus dolor. Pellentesque vitae ultricies arcu. Nam vel felis dui. Fusce interdum vitae leo vulputate aliquam. Phasellus consequat leo ut tellus accumsan gravida. Vestibulum rhoncus iaculis nibh sit amet blandit. Curabitur non urna vel diam pellentesque viverra eu vitae ipsum. Maecenas lacus nisl, sagittis vitae dui sit amet, volutpat facilisis ante. Aliquam sit amet tortor pharetra, auctor massa at, pulvinar ipsum. Aenean euismod fringilla mi. Cras efficitur risus et dictum mattis. Donec non libero eget est tincidunt placerat. Proin consectetur, nunc tincidunt finibus varius, enim quam commodo velit, non blandit neque metus ac massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
                    </div>
                )
            }
            if(page === 'projects') {
                return(
                    <div className='w-60 dib br2 pa3 ma4 grow bw2 shadow-4 bg-moon-gray h-50'>
                      <div className='bg-white br4 w-100 overflow-auto'>
                        <div className='w-20 fl br h3'>
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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                                Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                                delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                                commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                                explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
                              </div>
                              <div className="actions">
                                <a target="_blank" href='https://face-finding-project.herokuapp.com/'><button>Live site</button></a>
                                <a target="_blank" href='https://github.com/WattBowers/facerecognizer-front'><button>Frontend Github Repo</button></a>
                                <a target="_blank" href='https://github.com/WattBowers/facerecognizer-api'><button>Backend Github Repo</button></a>
                              </div>
                            </div>
                          )}
                          </Popup>
                        </div>
                        <div className='w-40 fl br h3'>
                          <h5 className='ma2'>Using the face detecton api from Clarify. Login to this tool to find a face in an image.</h5>
                        </div>
                        <div className='w-40 fl h3'>
                          <div className='recognizerbackground'></div>
                        </div>
                      </div>
                  
                      <div className='bg-white br4 w-100 overflow-auto'>
                        <div className='w-20 fl br h3'>
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
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                              Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                              delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                              <br />
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                              commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                              explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
                            </div>
                            <div className="actions">
                              <a target="_blank" href='https://the-boredom-butler.herokuapp.com/'><button>Live site</button></a>
                              <a target="_blank" href='https://github.com/WattBowers/Boredom-Butler'><button>Github Repo</button></a>
                            </div>
                          </div>
                        )}
                      </Popup>
                        </div>
                        <div className='w-40 fl br h3'>
                          <h5 className='ma2'>Using the face detecton api from Clarify. Login to this tool to find a face in an image.</h5>
                        </div>
                        <div className='w-40 fl h3'>
                          <div className='recognizerbackground'></div>
                        </div>
                      </div>
                      
                      
                      
                      <div>
                      
                      </div>
                      </div>
                    
                )
            }
            if(page === 'skills') {
                return(
                    <div className='w-60 dib br2 pa3 ma4 grow bw2 shadow-4 bg-moon-gray'>
                        <p>Skills</p>
                        
                    </div>
                    
                )
            }
            if(page === 'contact') {
                return(
                    <div className='w-50 dib br1 pa1 ma4 bw2 shadow-4 bg-{color: #C2B8B2} bg-moon-gray'>
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
                  <div className='w-50 dib br2 pa3 ma4 grow bw2 shadow-4'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur, tellus sed efficitur bibendum, quam quam laoreet magna, at accumsan ex neque vitae lectus. Nullam faucibus orci at ante aliquam, in pulvinar ligula rhoncus. Sed congue neque sit amet magna malesuada, eu dignissim enim mattis. Suspendisse vehicula mauris eu auctor imperdiet. Etiam commodo nibh eu tellus pellentesque, at ornare lorem vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis mollis risus, ut dapibus dolor. Pellentesque vitae ultricies arcu. Nam vel felis dui. Fusce interdum vitae leo vulputate aliquam. Phasellus consequat leo ut tellus accumsan gravida. Vestibulum rhoncus iaculis nibh sit amet blandit. Curabitur non urna vel diam pellentesque viverra eu vitae ipsum. Maecenas lacus nisl, sagittis vitae dui sit amet, volutpat facilisis ante. Aliquam sit amet tortor pharetra, auctor massa at, pulvinar ipsum. Aenean euismod fringilla mi. Cras efficitur risus et dictum mattis. Donec non libero eget est tincidunt placerat. Proin consectetur, nunc tincidunt finibus varius, enim quam commodo velit, non blandit neque metus ac massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
                        <Popup
                          defaultOpen
                          modal
                          className="popup"
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