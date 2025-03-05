import { useContext } from 'react';
import UserContext from '../../../contexts/UserContext';

function HeaderSearch() {
	const { categories } = useContext(UserContext);

	return (
		<nav className='navbar navbar-expand py-3 border-bottom'>
			<div className='container'>
				<a href='' className='navbar-brand'>
					<img
						src='/ebay.svg'
						alt='eBay'
						className='img-fluid'
						style={{ height: '3rem' }}
					/>
				</a>
				<div className='dropdown me-3 d-none d-lg-block'>
					<a
						role='button'
						className='dropdown-toggle text-start text-dark text-decoration-none'
						data-bs-toggle='dropdown'
						aria-expanded='false'
					>
						Shop by <br /> category
					</a>
					<div
						className='dropdown-menu dropup-center mt-3 p-3 shadow link-underline-opacity-25-hover'
						style={{ width: '63rem' }}
					>
						<div className='row row-cols-4 gy-3 gx-4'>
							{categories.map((category) => {
								return (
									<div className='col' key={category.id}>
										<h6>{category.name}</h6>
										{category.children.map((item) => {
											return (
												<p key={item.id} className='text-nowrap text-truncate'>
													{item.name}
												</p>
											);
										})}
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div className='input-group'>
					<div className='input-group-text rounded-start-pill px-4'>
						<i className='bi bi-search'></i>
					</div>
					<input
						type='search'
						className='form-control'
						placeholder='Search for anything'
					/>
					<div className='input-group-text rounded-end-pill'>
						<select
							name='categoryId'
							id='categoryId'
							className='form-select border-0 shadow-none bg-transparent overflow-hidden'
							style={{ width: '12rem' }}
						>
							<option value='0'>All Categories</option>
							{categories.map((category) => {
								return (
									<option key={category.id} value={category.id}>
										{category.name}
									</option>
								);
							})}
						</select>
					</div>
				</div>
				<button
					type='button'
					className='btn btn-primary btn-lg rounded-pill px-5 mx-3'
				>
					Search
				</button>
			</div>
		</nav>
	);
}

export default HeaderSearch;
