import React from 'react'

function Login() {
  return (
    <div className='flex'>
      <div className='w-1/2 p-4'>
        <img src='https://eshikshakosh.bihar.gov.in/assets/img/login-left-img.png' alt='bg' />
        <p className='text-white'>" Education is the key to success, Success is the key to achievement, Achievement is the key to hope, Hope is the key to happiness And happiness is the key to harmony"</p>
      </div>

      <div className='m-5 w-1/2 p-4 bg-white rounded-xl'>
        {/* logo */}
        <h1 className='font-bold text-3xl text-center text-blue-700'>LOGO HERE</h1>

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
            <button className='ml-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
              Refresh
            </button>
          </div>
        </div>

        {/* Sign-in button */}
        <button className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600'>
          Sign In
        </button>

        {/* Forget your password */}
        <p className='text-sm text-gray-500 mt-2'>
          <a href='#'>Forgot your password?</a>
        </p>
      </div>


      {/* <h1 className=' p-5 cursor-not-allowed rounded-md bg-gradient-to-r from-gray-800 to-green-600
       text-blue-50 font-black  text-2xl text-center'>Log in page</h1> */}
    </div>
  )
}

export default Login
