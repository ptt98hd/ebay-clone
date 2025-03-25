import { useContext } from 'react';
import UserContext from '../../../contexts/UserContext';
import { Col, Image, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomeCategories() {
	const { categories } = useContext(UserContext);

	const parentCategories = categories.filter(
		(category) => category.parentId === null
	);

	return (
		<section>
			<h3 className='mb-4'>Explore Popular Categories</h3>
			<div id='categories' className='carousel slide' data-bs-ride='carousel'>
				<div className='carousel-inner'>
					<div className='carousel-item active'>
						<Row className='row row-cols-6 g-4'>
							{parentCategories.map((parentCategory) => {
								return (
									<Col key={parentCategory.id}>
										<Stack
											as={Link}
											to='/shoping'
											gap={3}
											className='text-decoration-none text-dark'
										>
											<div className='rounded-circle p-4 bg-body-tertiary'>
												<Image
													src={parentCategory.image}
													className='img-fluid rounded-circle'
												/>
											</div>
											<p className='text-center text-truncate fw-semibold'>
												{parentCategory.name}
											</p>
										</Stack>
									</Col>
								);
							})}
						</Row>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HomeCategories;
