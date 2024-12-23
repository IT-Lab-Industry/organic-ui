import { Link } from 'react-router-dom'

export default function ForgetPassword() {
  return (
    <section className="es_container py-32 px-3">
      <div className="login_content">
        <div className="login_content_title">
          <h3>Forgot Password</h3>
        </div>

        <form action="" className="login_form">
          <div className="mb-4">
            <label
              htmlFor="productName"
              className="block text-sm font-medium  text-gray-700"
            >
              Email Adress
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

          <div className="form_input_inner">
            <div className="form_submit_btn">
              <button type="submit" className="main_btn">
                Submit
              </button>
            </div>
          </div>

          <div className="form_input_inner">
            <p className="main__form_text">
              Not Forgot Password! {''}
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
