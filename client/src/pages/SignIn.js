import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInUser } from '../services/Auth'
import { Link } from 'react-router-dom'

const SignIn = (props) => {
  const [formValues, setFormValues] = useState({ email: '', password: '' })
  const [adminForm, setAdminForm] = useState({ email: '', password: '' })

  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const adminChange = (e) => {
    setAdminForm({ ...adminForm, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ email: '', password: '' })
    props.setUser(payload)
    props.toggleAuthenticated(true)
    navigate(`/profile/${payload.id}`)
  }

  const adminSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(adminForm)
    setAdminForm({ email: '', password: '' })
    props.setUser(payload)
    props.toggleAuthenticated(true)
    navigate(`/admin/${payload.id}`)
  }

  return (
    <body>
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <label>
            Hello Sign in to your FantasySoccer account or{' '}
            <Link to="/Register">create an account</Link>
          </label>
          <form className="col" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input
                className="email"
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="example@example.com"
                value={formValues.email}
                required
              />
            </div>
            <div className="input-wrapper">
              <input
                className="password"
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                required
              />
            </div>
            <div className="button1">
              <button
                className="regButton"
                disabled={!formValues.email || !formValues.password}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div className="Admin">
          <form onSubmit={adminSubmit}>
            <label for="chk" aria-hidden="true">
              Admin Login
            </label>
            <div className="input-wrapper">
              <input
                className="email"
                onChange={adminChange}
                name="email"
                type="email"
                placeholder="example@example.com"
                value={adminForm.email}
                required
              />
            </div>
            <div className="input-wrapper">
              <input
                className="password"
                onChange={adminChange}
                type="password"
                name="password"
                placeholder="Password"
                value={adminForm.password}
                required
              />
            </div>
            <div className="button1">
              <button
                className="regButton"
                disabled={!adminForm.email || !adminForm.password}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </body>
  )
}

export default SignIn
