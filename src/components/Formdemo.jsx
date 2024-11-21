
import { useForm } from 'react-hook-form'
function Formdemo() {
const {register,handleSubmit,formState:{errors}}=useForm();
  function handleFormSubmit(obj){
    console.log(obj)
  }
  console.log("erroes is ",errors)
  return (
    <div>
      <h1 className='display-2 text-center'>Form</h1>
    <form action="" className="w-50 mx-auto mt-5" onSubmit={handleSubmit(handleFormSubmit)}>
     {/* y=username */}
      <div className="mb-3">
        <label htmlFor="username" className="form-label fs-4">Username</label>
    <input type="text" name="username" {...register('username',{required:true,minLength:4})} className="form-control" />
     {/* validation error messsage */}
     {errors.username?.type==='required' && <p className='text-warning'>*Username is required</p>}
     {errors.username?.type==='minLength' && <p className='text-warning'>*Min length should be 4 </p>}
    
      </div>
{/* email */}
      <div className="mb-3">
        <label htmlFor="email" className="form-label fs-4">Email</label>
    <input type="email" name="email"{...register('email')} className="form-control" />
      </div>
      {/* Skills */}
      <div className="mb-3">
      <label htmlFor="css">Select your skills</label>
        
        <div className="form-check">
          <input type="checkbox" {...register('css')} className="form-check-input" />
          <label htmlFor="css">Css</label>
        </div>
      
        <div className="form-check">
          <input type="checkbox" {...register('js')} className="form-check-input" />
          <label htmlFor="js">Javascript</label>
        </div>
        <div className="form-check">
          <input type="checkbox" {...register('rjs')} className="form-check-input" />
          <label htmlFor="rjs">React Js</label>
        </div>
      </div>
    <div className="mb-3">
      <label htmlFor="state" className='form-label'>Select State</label>
      <select {...register('state')} id="state" className='form-select'>
        <option value="telangana">Telangana</option>
        <option value="Ap">Andhra</option>
        
      </select>
    </div>
    <div className="mb-3">
      <label htmlFor="feedback" className='form-label'>Feedback</label>
      <textarea {...register('feedback')} id="feedback" className='form-control'></textarea>
    </div>

    <button type='submit' className="btn btn-success">Signup</button>
    </form>
   
    </div>
  )
}

export default Formdemo
