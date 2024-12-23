import { Link } from 'react-router-dom'

import './Register.css'

export default function Register() {
  //   const [focused, setFocused] = useState(false)

  //   const handleFocus = () => {
  //     setFocused(true)
  //   }

  //   const handleBlur = event => {
  //     if (!event.target.value) {
  //       setFocused(false)
  //     }
  //   }
  return (
    <section className="es_container py-8 px-3">
      <div className="login_content">
        <div className="login_content_title">
          <h3>Register</h3>
        </div>

        <form action="" className="login_form">
          {/* <div className="mb-4 relative">
            <input
              type="text"
              id="name"
              name="name"
              placeholder=" "
              required
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="mt-1 p-3 border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-ftPrimaryColor text-gray-600 hover:border-gray-400"
            />
            <label
              htmlFor="name"
              className={`absolute top-0 left-[10px] transition-all duration-300 text-[14px] text-gray-500 ${
                focused ? '-top-6  text-sm text-gray-600' : ''
              }`}
            >
              Phone Number
            </label>
          </div> */}

          <div className="mb-4">
            <label
              htmlFor="productName"
              className="block text-sm font-medium  text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id=""
              name="name"
              required
              className="form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-ftPrimaryColor  text-gray-600   hover:border-gray-400"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="productName"
              className="block text-sm font-medium  text-gray-700"
            >
              Email Address
            </label>
            <input
              type="text"
              id=""
              name="Email"
              required
              className="form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-ftPrimaryColor  text-gray-600   hover:border-gray-400"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="productName"
              className="block text-sm font-medium  text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="number"
              id="name"
              name="name"
              required
              className="form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-ftPrimaryColor  text-gray-600   hover:border-gray-400"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="productName"
              className="block text-sm font-medium  text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-ftPrimaryColor  text-gray-600  hover:border-gray-400"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="productName"
              className="block text-sm font-medium  text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="confirmPassword"
              id="confirmPassword"
              name="confirmPassword"
              className="form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-ftPrimaryColor  text-gray-600  hover:border-gray-400"
            />
          </div>

          <div className="form_input_inner">
            <div className="form_submit_btn">
              <button type="submit" className="main_btn">
                Submit
              </button>
            </div>
          </div>

          <div className="form_input_inner">
            <p className="main__form_text">
              Already have an Account? {''}
              <Link to={'/user/login'} className="main__form_link">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
