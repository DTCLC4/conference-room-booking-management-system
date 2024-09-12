import { Helmet } from 'react-helmet'; // For dynamically setting the document title
import { Link } from 'react-router-dom'; // For client-side routing between pages

import './Register.css'; // Importing custom CSS for the Register component

const Register = () => {
	return (
		<div>
			{/* Helmet component to set the document title */}
			<Helmet>
				<title>Pages / Register - BookingApp</title>
			</Helmet>

			{/* Main section for the register page */}
			<section className="section login min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
							{/* Logo section */}
							<div className="d-flex justify-content-center py-4">
								<a
									href="index.html"
									className="logo d-flex align-items-center w-auto"
								>
									{/* Logo image */}
									<img src="../src/assets/img/logo.png" alt="Logo"></img>
									{/* Logo text */}
									<span className="d-none d-lg-block">BookingApp</span>
								</a>
							</div>
							{/* End logo */}

							{/* Card container for the registration form */}
							<div className="card mb-3">
								<div className="card-body">
									{/* Title and subtitle for the form */}
									<div className="pt-4 pb-2">
										<h5 className="card-title text-center pb-0 fs-4">
											Create an Account
										</h5>
										<p className="text-center small">
											Enter your personal details to create account
										</p>
									</div>

									{/* Registration form */}
									<form className="row g-3 needs-validation" noValidate>
										{/* Name field */}
										<div className="col-12">
											<label htmlFor="yourName" className="form-label">
												Your Name
											</label>
											<input
												type="text"
												name="name"
												className="form-control"
												id="yourName"
												required
											></input>
											<div className="invalid-feedback">
												Please, enter your name!
											</div>
										</div>

										{/* Email field */}
										<div className="col-12">
											<label htmlFor="yourEmail" className="form-label">
												Your Email
											</label>
											<input
												type="email"
												name="email"
												className="form-control"
												id="yourEmail"
												required
											></input>
											<div className="invalid-feedback">
												Please enter a valid Email address!
											</div>
										</div>

										{/* Username field */}
										<div className="col-12">
											<label htmlFor="yourUsername" className="form-label">
												Username
											</label>
											<div className="input-group has-validation">
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
												<div className="invalid-feedback">
													Please choose a username.
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

										{/* Terms and conditions checkbox */}
										<div className="col-12">
											<div className="form-check">
												<input
													className="form-check-input"
													name="terms"
													type="checkbox"
													value=""
													id="acceptTerms"
													required
												></input>
												<label
													className="form-check-label"
													htmlFor="acceptTerms"
												>
													I agree and accept the{' '}
													<a href="#" className='terms'>terms and conditions</a>
												</label>
												<div className="invalid-feedback">
													You must agree before submitting.
												</div>
											</div>
										</div>

										{/* Submit button */}
										<div className="col-12">
											<button className="btn btn-primary w-100" type="submit">
												Create Account
											</button>
										</div>

										{/* Link to the login page */}
										<div className="col-12">
											<p className="small mb-0">
												Already have an account?{' '}
												<Link to="/auth/login">Login</Link>
											</p>
										</div>
									</form>
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

export default Register;
