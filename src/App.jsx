import './App.css'

function App() {

  return (
    <div>

      {/* NavBar  */}
      <nav className='bg-red-600 text-white flex p-4 justify-between border-t-4 border-blue-800'>
        <div className='flex' >
          <div className='flex space-x-5 items-center'>
            <span className='text-xl  font-semibold' >Kalvium</span>
            <span className='text-sm mt-1'>About Us</span>
            <span className='text-sm mt-1'>Contacts</span>
            <span className='text-sm mt-1'>Courses</span>
          </div>
        </div>
        <div>
          <button className='border border-solid border-white rounded py-1 px-3 hover:bg-red-500	'>Login</button>
        </div>
      </nav>

      {/* Button-1 */}
      <div className='mt-5 ml-28'>
        <button className='bg-blue-500 text-white font-semibold rounded px-2 py-1 hover:bg-blue-400 '>Button One</button>
      </div>

      {/* Alert */}
      <div className='bg-red-300 border border-red-400 text-red-600 px-4 py-3 rounded my-5 w-10/12 mx-auto' role='alert'>
        <strong className='font-bold'>Alert!</strong>
        <span className='block sm:inline'>This is awesome!</span>
      </div>

      {/* card-container */}
      <div className='max-w-sm mx-auto flex p-6 mt-5 rounded-lg shadow-xl'>
        <div className='flex-shrink-0'>
          <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" className='h-12 w-12' />
        </div>
        <div className='ml-6 pt-1' >
          <h4 className='text-xl'>Kalvium</h4>
          <p className='text-base text-gray-500'>You have a new course!</p>
        </div>
      </div>

      {/* Footer */}
      <footer className='bg-gray-200 mt-10 '>
        <div className='text-gray-800 text-center py-4'>
          &copy; 2021 Copyright:Kalvium
        </div>
      </footer>
    </div>
  )
}

export default App