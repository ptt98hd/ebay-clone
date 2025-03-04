import React from 'react';

function UserFooter() {
	return (
		<footer className='bg-body-tertiary py-5 mt-auto border-top'>
			<div className='container'>
				<div className='row'>
					<div className='col-6 col-md-2 mb-3'>
						<h5>Section</h5>
						<ul className='nav flex-column'>
							<li className='nav-item mb-2'>
								<a href='#' className='nav-link p-0 text-body-secondary'>
									Home
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a href='#' className='nav-link p-0 text-body-secondary'>
									Features
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a href='#' className='nav-link p-0 text-body-secondary'>
									Pricing
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a href='#' className='nav-link p-0 text-body-secondary'>
									FAQs
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a href='#' className='nav-link p-0 text-body-secondary'>
									About
								</a>
							</li>
						</ul>
					</div>
					<div className='col-6 col-md-2 mb-3'>
						<h5>Section</h5>
						<ul className='nav flex-column'>
							<li className='nav-item mb-2'>
								<a href='#' className='nav-link p-0 text-body-secondary'>
									Home
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a href='#' className='nav-link p-0 text-body-secondary'>
									Features
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a href='#' className='nav-link p-0 text-body-secondary'>
									Pricing
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a href='#' className='nav-link p-0 text-body-secondary'>
									FAQs
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a href='#' className='nav-link p-0 text-body-secondary'>
									About
								</a>
							</li>
						</ul>
					</div>
					<div className='col-6 col-md-2 mb-3'>
						<h5>Section</h5>
						<ul className='nav flex-column'>
							<li className='nav-item mb-2'>
								<a href='#' className='nav-link p-0 text-body-secondary'>
									Home
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a href='#' className='nav-link p-0 text-body-secondary'>
									Features
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a href='#' className='nav-link p-0 text-body-secondary'>
									Pricing
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a href='#' className='nav-link p-0 text-body-secondary'>
									FAQs
								</a>
							</li>
							<li className='nav-item mb-2'>
								<a href='#' className='nav-link p-0 text-body-secondary'>
									About
								</a>
							</li>
						</ul>
					</div>
					<div className='col-md-5 offset-md-1 mb-3'>
						<form>
							<h5>Subscribe to our newsletter</h5>
							<p>Monthly digest of what's new and exciting from us.</p>
							<div className='d-flex flex-column flex-sm-row w-100 gap-2'>
								<label htmlFor='newsletter1' className='visually-hidden'>
									Email address
								</label>
								<input
									id='newsletter1'
									type='text'
									className='form-control'
									placeholder='Email address'
								/>
								<button className='btn btn-primary' type='button'>
									Subscribe
								</button>
							</div>
						</form>
					</div>
				</div>

				<div className='d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top'>
					<p>Copyright © 1995-2025 eBay Inc. All Rights Reserved.</p>
					<ul className='list-unstyled d-flex'>
						<li className='ms-3'>
							<a className='link-body-emphasis' href='#'>
								<i className='bi bi-twitter-x fs-3'></i>
							</a>
						</li>
						<li className='ms-3'>
							<a className='link-body-emphasis' href='#'>
								<i className='bi bi-instagram fs-3'></i>
							</a>
						</li>
						<li className='ms-3'>
							<a className='link-body-emphasis' href='#'>
								<i className='bi bi-facebook fs-3'></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default UserFooter;
