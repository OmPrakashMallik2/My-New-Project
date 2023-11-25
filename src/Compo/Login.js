import React from 'react'

function Login() {
  return (
    <div className='justify-space bg-gradient-to-r from-purple-800 to-blue-800 h-screen flex'>

      <div className='bg-red-600 w-2/3'>
        <img className='justify-center bg-blue-500' src='https://eshikshakosh.bihar.gov.in/assets/img/login-left-img.png' alt='bg' />
        <p className='text-white text-center '>" Education is the key to success, Success is the key to achievement, Achievement is the key to hope, Hope is the key to happiness And happiness is the key to harmony"</p>
        <p className='text-white text-center font-bold'>Contact : 7352281493, 7520239853</p>
      </div>

      <div className='w-1/3 p-10 mr-30 bg-white rounded-xl'>
        {/* logo */}
        <h1 className='font-bold text-3xl text-center text-purple-900'>LOGO HERE</h1>

        {/* log in category */}
        {/* <h2 className='text-xl text-center text-gray-700 mb-4'>Login</h2> */}

        {/* User ID */}
        <div className='mb-4'>
          <label htmlFor='userId' className='text-gray-600'>User ID:</label>
          <input
            type='text'
            id='userId'
            name='userId'
            className='w-full p-2 border border-gray-300 rounded'
            placeholder='Enter your User ID'
          />
        </div>

        {/* Password */}
        <div className='mb-4'>
          <label htmlFor='password' className='text-gray-600'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            className='w-full p-2 border border-gray-300 rounded'
            placeholder='Enter your password'
          />
        </div>

        {/* Math problem as captcha and refresh captcha button */}
        <div className='mb-4'>
          <label htmlFor='captcha' className='text-gray-600'>Let's solve this math problem :</label>
          <div className='flex'>
            <input
              type='text'
              id='captcha'
              name='captcha'
              className='w-full p-2 border border-gray-300 rounded'
              placeholder='Enter User Captcha'
            />
            <button className='ml-2 p-2 bg-green-500 text-white rounded hover:bg-green-600'>
              Refresh
            </button>
          </div>
        </div>

        <div className='flex justify-between'>
          {/* Sign-in button */}
          <button className=' bg-green-500 p-3 w-1/2 text-white rounded hover:bg-green-600'>
            Sign In
          </button>

          {/* Forget your password */}
          <p className='text-sm text-gray-500 w-1/2'>
            <a href='#'>Forgot your password?</a>
          </p>
        </div>
      </div>


      {/* <h1 className=' p-5 cursor-not-allowed rounded-md bg-gradient-to-r from-gray-800 to-green-600
       text-blue-50 font-black  text-2xl text-center'>Log in page</h1> */}
    </div>
  )
}

export default Login
