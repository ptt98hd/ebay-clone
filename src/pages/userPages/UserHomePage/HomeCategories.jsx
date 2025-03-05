import { useContext } from 'react';
import UserContext from '../../../contexts/UserContext';

function HomeCategories() {
	const { categories } = useContext(UserContext);

	return (
		<section>
			<h3 className='mb-4'>Explore Popular Categories</h3>
			<div id='categories' className='carousel slide' data-bs-ride='carousel'>
				<div className='carousel-inner'>
					<div className='carousel-item active'>
						<div className='row row-cols-6 g-4'>
							{categories.map((category) => {
								return (
									<div className='col' key={category.id}>
										<div className='vstack gap-3'>
											<div
												className='rounded-circle p-4 bg-body-tertiary'
												// style={{ backgroundColor: '#f7f7f7' }}
											>
												<img src={category.image} className='img-fluid' />
											</div>
											<p className='text-center text-truncate fw-semibold'>
												{category.name}
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HomeCategories;
