import React from 'react';
import { Container, Nav, Navbar, Dropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HeaderNav() {
	return (
		<Navbar expanded className='p-0 border-bottom'>
			<Container className='container justify-content-between'>
				<Nav>
					<Nav.Item>
						<Nav.Link>
							Hi! <Link to='/authentication'>Sign In</Link> or{' '}
							<Link to='register'>Register</Link>
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link>Daily Deals</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link>Brand Outlet</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link>Gift Cards</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link>Help & Contact</Nav.Link>
					</Nav.Item>
				</Nav>
				<Nav>
					<Nav.Item>
						<Nav.Link>Ship to</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link>Sell</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Dropdown align='end'>
							<Dropdown.Toggle as={Nav.Link}>Watchlist</Dropdown.Toggle>
							<Dropdown.Menu className='shadow'>
								<Dropdown.Item as={Link} to='/'>
									Action
								</Dropdown.Item>
								<Dropdown.Item as={Link} to='/'>
									Another action
								</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item as={Link} to='/'>
									Something else here
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Nav.Item>
					<Nav.Item>
						<Dropdown align='end'>
							<Dropdown.Toggle as={Nav.Link}>My eBay</Dropdown.Toggle>
							<Dropdown.Menu className='shadow'>
								<Dropdown.Item>Action</Dropdown.Item>
								<Dropdown.Item>Another action</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item>Something else here</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link>
							<i className='bi bi-bell' />
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link className='pe-0'>
							<i className='bi bi-cart'></i>
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default HeaderNav;
