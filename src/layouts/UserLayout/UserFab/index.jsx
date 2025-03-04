import { useState, useEffect } from 'react';

function UserFab() {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		setIsVisible(window.scrollY > 300);
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);
		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);

	return (
		<>
			<div className='vstack gap-3 position-fixed bottom-0 end-0 p-4'>
				{isVisible && (
					<button
						type='button'
						className='btn btn-light rounded-circle border shadow'
						style={{ width: '3rem', height: '3rem' }}
						onClick={scrollToTop}
					>
						<i className='bi bi-chevron-up' />
					</button>
				)}
				<button
					type='button'
					className='btn btn-light rounded-circle border shadow'
					style={{ width: '3rem', height: '3rem' }}
					data-bs-toggle='modal'
					data-bs-target='#helps'
				>
					<i className='bi bi-question' />
				</button>
			</div>
			<div
				id='helps'
				className='modal'
				tabIndex={-1}
				data-bs-backdrop='static'
				data-bs-keyboard='false'
			>
				<div className='modal-dialog position-fixed bottom-0 end-0 m-4 shadow'>
					<div
						className='modal-content'
						style={{ width: '28rem', height: 'calc(100vh - 3rem)' }}
					>
						<div className='modal-header px-4'>
							<h1 className='modal-title fs-5' id='exampleModalLabel'>
								Helps
							</h1>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
							/>
						</div>
						<div className='modal-body px-4'>
							<h4 className='mb-3'>How can we help you?</h4>
							<p>
								Find answers to your buying, selling, and account questions, or
								contact us for more help.
							</p>
							<a
								href='/helps'
								className='btn btn-primary rounded-pill w-100 mb-4'
							>
								Visit Help & Contact
							</a>
							<h4 className='mb-3'>Report content</h4>
							<p>
								If you find content that may not comply with our policies or
								applicable law, you can submit a report to help eBay maintain a
								safe environment for all. <br />
								<a href='/helps'>Learn more</a>
							</p>
							<a
								href='/helps'
								className='btn btn-outline-primary rounded-pill w-100 mb-4'
							>
								Submit report
							</a>
							<h4 className='mb-3'>Let us know</h4>
							<div className='vstack gap-2'>
								<a href='' className='text-decoration-none fw-bold fs-5'>
									Send feedback <i className='bi bi-arrow-right' />
								</a>
								<a href='' className='text-decoration-none fw-bold fs-5'>
									Report a technical problem <i className='bi bi-arrow-right' />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default UserFab;
