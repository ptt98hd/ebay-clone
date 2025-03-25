import React, { useState, useEffect } from 'react';
import { fetcher } from '../../../services/api';
import {
	Container,
	Row,
	Col,
	Card,
	Button,
	Form,
	Dropdown,
	Badge,
	ListGroup,
	Pagination,
} from 'react-bootstrap';
import {
	StarFill,
	Heart,
	Eye,
	Filter,
	SortDown,
	ChevronDown,
	ChevronRight,
} from 'react-bootstrap-icons';

const UserShopingPage = () => {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [filters, setFilters] = useState({});
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage] = useState(12);
	const [sortOption, setSortOption] = useState('Best Match');

	console.log(categories);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const categoriesRes = await fetcher.get('/categories');
				setCategories(categoriesRes.data);
				const productsRes = await fetcher.get('/products');
				setProducts(productsRes.data);
				const filtersRes = await fetcher.get('/filters');
				setFilters(filtersRes.data);
				setLoading(false);
			} catch (error) {
				console.error('Error fetching data:', error);
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	// Format price with VND
	const formatPrice = (price) => {
		return (
			new Intl.NumberFormat('vi-VN', {
				style: 'decimal',
				maximumFractionDigits: 2,
			}).format(price) + ' VND'
		);
	};

	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = products.slice(
		indexOfFirstProduct,
		indexOfLastProduct
	);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	const sortProducts = (option) => {
		setSortOption(option);
		let sortedProducts = [...products];

		switch (option) {
			case 'Price: Low to High':
				sortedProducts.sort((a, b) => a.price - b.price);
				break;
			case 'Price: High to Low':
				sortedProducts.sort((a, b) => b.price - a.price);
				break;
			case 'Newly Listed':
				break;
			default:
				break;
		}

		setProducts(sortedProducts);
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<Container fluid className='mt-3'>
			<Row>
				{/* Sidebar Filters */}
				<Col md={3} className='mb-4'>
					<Card>
						<Card.Header className='bg-light'>
							<h5>Shop by Category</h5>
						</Card.Header>
						<ListGroup variant='flush'>
							{categories.map((category) => (
								<ListGroup.Item key={`category-${category.id}`} action>
									<ChevronRight className='me-2' />
									{category.name}
								</ListGroup.Item>
							))}
						</ListGroup>
					</Card>

					<Card className='mt-3'>
						<Card.Header className='bg-light'>
							<h5>Filter</h5>
						</Card.Header>
						<Card.Body>
							{Object.entries(filters).map(([filterName, options]) => (
								<div key={filterName} className='mb-3'>
									<Dropdown>
										<Dropdown.Toggle
											variant='light'
											className='w-100 text-start d-flex justify-content-between align-items-center'
										>
											{filterName}
										</Dropdown.Toggle>
										<Dropdown.Menu className='w-100'>
											{options.map((option, idx) => (
												<Dropdown.Item key={idx}>
													<Form.Check
														type='checkbox'
														id={`${filterName}-${idx}`}
														label={option}
													/>
												</Dropdown.Item>
											))}
										</Dropdown.Menu>
									</Dropdown>
								</div>
							))}
						</Card.Body>
					</Card>
				</Col>

				{/* Main Content */}
				<Col md={9}>
					<div className='d-flex justify-content-between align-items-center mb-3'>
						<h4>Collectible Sneakers</h4>
						<div className='d-flex align-items-center'>
							<span className='me-2'>{products.length} Results</span>
							<Dropdown>
								<Dropdown.Toggle
									variant='light'
									className='d-flex align-items-center'
								>
									<SortDown className='me-1' /> {sortOption}
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item onClick={() => sortProducts('Best Match')}>
										Best Match
									</Dropdown.Item>
									<Dropdown.Item
										onClick={() => sortProducts('Price: Low to High')}
									>
										Price: Low to High
									</Dropdown.Item>
									<Dropdown.Item
										onClick={() => sortProducts('Price: High to Low')}
									>
										Price: High to Low
									</Dropdown.Item>
									<Dropdown.Item onClick={() => sortProducts('Newly Listed')}>
										Newly Listed
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</div>
					</div>

					<Row xs={1} sm={2} lg={3} className='g-4'>
						{currentProducts.map((product) => (
							<Col key={product.id}>
								<Card className='h-100'>
									{product.isSponsored && (
										<Badge
											bg='warning'
											text='dark'
											className='position-absolute top-0 start-0 m-1'
										>
											Sponsored
										</Badge>
									)}
									<div className='position-absolute top-0 end-0 m-1'>
										<Button variant='light' size='sm'>
											<Heart />
										</Button>
									</div>
									<Card.Img
										variant='top'
										src={product.image}
										style={{
											height: '180px',
											objectFit: 'contain',
											padding: '10px',
										}}
									/>
									<Card.Body>
										<Card.Title className='fs-6'>{product.title}</Card.Title>
										<div className='d-flex align-items-center mb-2'>
											{product.originalPrice ? (
												<>
													<span className='text-danger fw-bold me-2'>
														{formatPrice(product.price)}
													</span>
													<span className='text-decoration-line-through text-muted'>
														{formatPrice(product.originalPrice)}
													</span>
												</>
											) : (
												<span className='fw-bold'>
													{formatPrice(product.price)}
												</span>
											)}
										</div>
										<div className='text-muted small mb-2'>
											{product.shipping}
										</div>
										{product.watchCount && (
											<div className='small'>
												<Eye className='me-1' /> {product.watchCount} watching
											</div>
										)}
									</Card.Body>
									<Card.Footer className='bg-white border-0'>
										<Button
											variant='outline-primary'
											size='sm'
											className='w-100'
										>
											Buy It Now
										</Button>
										<Button
											variant='outline-secondary'
											size='sm'
											className='w-100 mt-2'
										>
											Add to cart
										</Button>
									</Card.Footer>
								</Card>
							</Col>
						))}
					</Row>

					{/* Pagination */}
					<div className='d-flex justify-content-center mt-4'>
						<Pagination>
							<Pagination.Prev
								disabled={currentPage === 1}
								onClick={() => paginate(currentPage - 1)}
							/>
							{[
								...Array(Math.ceil(products.length / productsPerPage)).keys(),
							].map((number) => (
								<Pagination.Item
									key={number + 1}
									active={number + 1 === currentPage}
									onClick={() => paginate(number + 1)}
								>
									{number + 1}
								</Pagination.Item>
							))}
							<Pagination.Next
								disabled={
									currentPage === Math.ceil(products.length / productsPerPage)
								}
								onClick={() => paginate(currentPage + 1)}
							/>
						</Pagination>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default UserShopingPage;
