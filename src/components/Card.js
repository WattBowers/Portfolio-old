import React from 'react';
import axios from 'axios';

const Card = ({page, messageChange, emailChange, email, message}) => {
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
            const result = await axios.post(formSparkUrl, payload)
            console.log(result);
        } catch(error) {
            console.log(error);
        }
    }
    
    
    return(
    
        (() => {
            if(page === 'home') {
                return(
                    <div className='w-50 dib br2 pa3 ma4 grow bw2 shadow-5'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur, tellus sed efficitur bibendum, quam quam laoreet magna, at accumsan ex neque vitae lectus. Nullam faucibus orci at ante aliquam, in pulvinar ligula rhoncus. Sed congue neque sit amet magna malesuada, eu dignissim enim mattis. Suspendisse vehicula mauris eu auctor imperdiet. Etiam commodo nibh eu tellus pellentesque, at ornare lorem vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis mollis risus, ut dapibus dolor. Pellentesque vitae ultricies arcu. Nam vel felis dui. Fusce interdum vitae leo vulputate aliquam. Phasellus consequat leo ut tellus accumsan gravida. Vestibulum rhoncus iaculis nibh sit amet blandit. Curabitur non urna vel diam pellentesque viverra eu vitae ipsum. Maecenas lacus nisl, sagittis vitae dui sit amet, volutpat facilisis ante. Aliquam sit amet tortor pharetra, auctor massa at, pulvinar ipsum. Aenean euismod fringilla mi. Cras efficitur risus et dictum mattis. Donec non libero eget est tincidunt placerat. Proin consectetur, nunc tincidunt finibus varius, enim quam commodo velit, non blandit neque metus ac massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
                    </div>
                )
            }
            if(page === 'projects') {
                return(
                    <div className='w-60 dib br2 pa3 ma4 grow bw2 shadow-5'>
                        <p>Test</p>
                    </div>
                )
            }
            if(page === 'skills') {
                return(
                    <div className='w-60 dib br2 pa3 ma4 grow bw2 shadow-5'>
                        <p>Skills</p>
                    </div>
                )
            }
            if(page === 'contact') {
                return(
                    <div className='w-50 dib br1 pa1 ma4 bw2 shadow-5 bg-{color: #C2B8B2}'>
                    <main class="pa4 black-80">
                      <form class="measure center">
                        <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                          <legend class="f4 fw6 ph0 mh0">Contact Form</legend>
                          <div class="mt3">
                            <label class="db fw6 lh-copy f5 mb2">Return email</label>
                            <input onChange={emailChange} class="pa2 input-reset ba bg-washed-green w-100" type="email" name="email-address"  id="email-address"/>
                          </div>
                          <div class="mv3">
                          <label  class="b db fw6 lh-copy f5">Message</label>
                          <textarea onChange={messageChange} id="comment" name="comment" class=" db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2 mt2 bg-washed-green" aria-describedby="comment-desc"></textarea>
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
        
        })()
        
    );
    
};

export default Card;