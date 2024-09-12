import { Helmet } from 'react-helmet'; // For dynamically setting the document title
import { Link } from 'react-router-dom'; // For client-side routing between pages

import './Login.css'; // Importing custom CSS for the Login component

const Login = () => {
	return (
		<div className="container">
			{/* Using Helmet to set the page title dynamically */}
			<Helmet>
				<title>Page / Login - BookingApp</title>
			</Helmet>

			{/* Main section for the login page */}
			<section className="section login min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
							{/* Logo */}
							<div className="d-flex justify-content-center py-4">
								<a
									href="index.html"
									className="logo d-flex align-items-center w-auto"
								>
									{/* Logo image */}
									<img src="../src/assets/img/logo.png" alt="Logo"></img>
									<span className="d-none d-lg-block">BookingApp</span>
								</a>
							</div>
							{/* End logo */}

							{/* Card container for the login form */}
							<div className="card mb-3">
								<div className="card-body">
									<div className="pt-4 pb-2">
										{/* Card title and subtitle */}
										<h5 className="card-title text-center pb-0 fs-4">
											Login to Your Account
										</h5>
										<p className="text-center small">
											Enter your username & password to login
										</p>
									</div>

									{/* Login form */}
									<form className="row g-3 needs-validation" noValidate>
										{/* Username field */}
										<div className="col-12">
											<label htmlFor="yourUsername" className="form-label">
												Username
											</label>
											<div className="input-group has-validation">
												{/* Icon before the input field */}
												<span
													className="input-group-text"
													id="inputGroupPrepend"
												>
													@
												</span>
												<input
													type="text"
													name="username"
													className="form-control"
													id="yourUsername"
													required
												></input>
												{/* Feedback for validation */}
												<div className="invalid-feedback">
													Please enter your username.
												</div>
											</div>
										</div>

										{/* Password field */}
										<div className="col-12">
											<label htmlFor="yourPassword" className="form-label">
												Password
											</label>
											<input
												type="password"
												name="password"
												className="form-control"
												id="yourPassword"
												required
											></input>
											<div className="invalid-feedback">
												Please enter your password!
											</div>
										</div>

										{/* Remember me checkbox */}
										<div className="col-12">
											<div className="form-check">
												<input
													className="form-check-input"
													type="checkbox"
													name="remember"
													value="true"
													id="rememberMe"
												></input>
												<label
													className="form-check-label"
													htmlFor="rememberMe"
												>
													Remember me
												</label>
											</div>
										</div>

										{/* Login button */}
										<div className="col-12">
											<button className="btn btn-primary w-100" type="submit">
												Login
											</button>
										</div>

										{/* Google sign-in button */}
										<div className="col-12">
											<button className="login-with-google-btn w-100">
												Sign in with Google
											</button>
										</div>

										{/* Link to the registration page */}
										<div className="col-12">
											<p className="small mb-0">
												Don&apos;t have account?{' '}
												<Link to="/auth/register">Create an account</Link>
											</p>
										</div>
									</form>
									{/* End login form */}
								</div>
							</div>

							{/* Footer credits */}
							<footer id="footer" className="footer">
								<div className="copyright">
									&copy; Copyright{' '}
									<strong>
										<span>BookingApp</span>
									</strong>
									. All Rights Reserved
								</div>
								<div className="credits">
									Designed by <a href="#">BookingApp</a>
								</div>
							</footer>
							{/* End footer */}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Login;
