import { Form } from "react-router-dom";


// library
import { UserPlusIcon } from '@heroicons/react/24/solid';

// assets
import illustration from '../assets/illustration.jpg'



const Intro = () => {
    return (
        <div className="intro">
            <div>
                <h1>
                    Take Control of <span className='accent'>Your Money</span>
                </h1>
                <p>
                    Personal budgeting made easy!
                </p>
                <Form method='post'>
                    <input 
                    type='text' 
                    name='userName' 
                    required 
                    placeholder="Name" 
                    aria-label='Your Name' 
                    autoComplete='given-name'
                    />
                    <input type="hidden" name='_action' value='newUser'></input>
                    <button type='submit' className="btn btn--dark">
                        <span>Create Account</span>
                        <UserPlusIcon width={20} />
                    </button>
                </Form>
            </div>
            <img src={illustration} alt='person with money' />
        </div>
    )
}

export default Intro;