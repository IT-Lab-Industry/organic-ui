import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import './Login.css'

export default function Login() {
  return (
    <section className="es_container py-8 px-3">
      <div className="login_content">
        <div className="login_content_title">
          <h3>Login</h3>
        </div>

        <form action="" className="login_form">
          <div className="mb-4">
            <label
              htmlFor="productName"
              className="block text-sm font-medium  text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              id=""
              name="Email"
              placeholder="Email"
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
              id=""
              name=""
              placeholder="Password"
              className="form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-ftPrimaryColor  text-gray-600  hover:border-gray-400"
            />
          </div>
          <div className="form_input_inner text-end">
            <Link to={'/user/forget-password'} className="forgot__password">
              Forgot Password?
            </Link>
          </div>

          <div className="form_input_inner">
            <div className="form_submit_btn">
              <button type="submit" className="main_btn">
                Submit
              </button>
            </div>
          </div>
          <div className="form_input_inner">
            <div className="form_devide">
              <span>or</span>
            </div>
          </div>
          <div className="form_input_inner">
            <a href="#" className="sign__google ">
              <FcGoogle className="text-[20px]" />
              <span>Login With Google</span>
            </a>
          </div>
          <div className="form_input_inner">
            <p className="main__form_text">
              Don't have an Account? {''}
              <Link to={'/user/register'} className="main__form_link">
                Registartion
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
