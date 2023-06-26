// reacts
import { CurrencyDollarIcon } from '@heroicons/react/24/solid';

// rrd imports
import { Form, useFetcher } from 'react-router-dom'

const AddBudgetForm = () => {
    const fetcher = useFetcher();
    const isSubmitting = fetcher.state === 'submitting'

    const formRef = useRef();
    const focusRef = useRef();

    useEffect(()=>{
        if(!isSubmitting){
            formRef.current.reset()
            focusRef.current.focus()
        }
    }, [isSubmitting])

    return (
        <div className="form-wrapper">
            <h2 className="h3">
                Create Budget
            </h2>
            <fetcher.Form
                method='post'
                className='grid-sm'
                ref={formRef}
            >
                <div className="grid-xs">
                    <label htmlFor='newBudget'>Budget Name</label>
                    <input type='text' name='newBudget' id='newBudget' placeholder='e.g., Gas' required ref={focusRef}></input>
                </div>
                <div className="grid-xs">
                    <label htmlFor='newBudgetAmount'>Amount</label>
                    <input type='number' name='newBudgetAmount' id='newBudgetAmount' placeholder='e.g., $500' step='0.01' required inputMode='decimal'></input>
                </div>
            <input type='hidden' name='_action' value='createBudget'/>    
            <button type='submit' className='btn btn--dark' idsabled={isSubmitting}>
                {
                    isSubmitting ? <span>Submitting...</span> : (<><span>Create budget</span>
                    <CurrencyDollarIcon width={20}/></>)
                }
            </button>
            </fetcher.Form>
        </div>
    )
}

export default AddBudgetForm;