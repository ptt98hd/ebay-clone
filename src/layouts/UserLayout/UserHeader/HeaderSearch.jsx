import { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../../contexts/UserContext';
import {
	Button,
	Col,
	Container,
	Dropdown,
	Form,
	Image,
	InputGroup,
	Navbar,
	Row,
	Stack,
} from 'react-bootstrap';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';

function HeaderSearch() {
	const { categories } = useContext(UserContext);

	const parentCategories = categories.filter(
		(category) => category.parentId === null
	);

	const childCategories = categories.filter(
		(category) => category.parentId !== null
	);

	return (
		<Navbar expanded className='py-3 border-bottom'>
			<Container className='gap-3'>
				<Navbar.Brand as={Link} to='/' className='p-0 m-0'>
					<Image src='/ebay.svg' alt='eBay' style={{ height: '3rem' }} />
				</Navbar.Brand>
				<Dropdown className='d-none d-lg-block'>
					<Dropdown.Toggle
						variant='primary'
						size='lg'
						className='rounded-pill px-4 border-0'
						id='categories-menu'
					>
						Categories
					</Dropdown.Toggle>
					<Dropdown.Menu
						align={'start'}
						className='mt-3 p-3 shadow link-underline-opacity-25-hover'
						style={{ width: '63rem' }}
					>
						<Row className='row-cols-3 g-4'>
							{parentCategories.map((parentCategory) => {
								return (
									<Col key={`category-parent-${parentCategory.id}`}>
										<h6 className='fw-bold mb-3 fs-5'>{parentCategory.name}</h6>
										<Stack direction='vertical' gap={3}>
											{childCategories
												.filter(
													(childCategory) =>
														childCategory.parentId == parentCategory.id
												)
												.map((childCategory) => {
													return (
														<Link
															key={`category-child-${childCategory.id}`}
															to={`/product?category=${childCategory.id}`}
															className='text-decoration-none text-dark text-nowrap text-truncate'
														>
															{childCategory.name}
														</Link>
													);
												})}
										</Stack>
									</Col>
								);
							})}
						</Row>
					</Dropdown.Menu>
				</Dropdown>
				<InputGroup>
					<InputGroupText className='rounded-start-pill px-4'>
						<i className='bi bi-search'></i>
					</InputGroupText>
					<Form.Control
						type='search'
						placeholder='Search for anything'
						name='query'
						id='search-product-name'
					/>
					<InputGroupText className='rounded-end-pill'>
						<Form.Select
							name='categoryId'
							id='categoryId'
							className='form-select border-0 shadow-none bg-transparent overflow-hidden'
							style={{ width: '12rem' }}
						>
							<option value='0'>All Categories</option>
							{parentCategories.map((parentCategory) => {
								return (
									<option key={parentCategory.id} value={parentCategory.id}>
										{parentCategory.name}
									</option>
								);
							})}
						</Form.Select>
					</InputGroupText>
				</InputGroup>
				<Button
					type='button'
					variant='primary'
					size='lg'
					className='rounded-pill px-5'
				>
					Search
				</Button>
			</Container>
		</Navbar>
	);
}

export default HeaderSearch;
