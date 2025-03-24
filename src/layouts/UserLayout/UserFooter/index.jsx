import React from 'react';
import { Button, Col, Container, Form, Nav, Row, Stack } from 'react-bootstrap';

function UserFooter() {
	return (
		<footer className='bg-body-tertiary py-5 mt-auto border-top'>
			<Container>
				<Row>
					<Col className='col-6 col-md-2 mb-3'>
						<h5>Section</h5>
						<Nav className='flex-column'>
							<Nav.Item className='mb-2'>
								<Nav.Link href='#' className='p-0 text-body-secondary'>
									Home
								</Nav.Link>
							</Nav.Item>
							<Nav.Item className='mb-2'>
								<Nav.Link className='p-0 text-body-secondary'>
									Features
								</Nav.Link>
							</Nav.Item>
							<Nav.Item className='mb-2'>
								<Nav.Link className='p-0 text-body-secondary'>Pricing</Nav.Link>
							</Nav.Item>
							<Nav.Item className='mb-2'>
								<Nav.Link className='p-0 text-body-secondary'>FAQs</Nav.Link>
							</Nav.Item>
							<Nav.Item className='mb-2'>
								<Nav.Link className='p-0 text-body-secondary'>About</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
					<Col className='col-6 col-md-2 mb-3'>
						<h5>Section</h5>
						<Nav className='flex-column'>
							<Nav.Item className='mb-2'>
								<Nav.Link href='#' className='p-0 text-body-secondary'>
									Home
								</Nav.Link>
							</Nav.Item>
							<Nav.Item className='mb-2'>
								<Nav.Link className='p-0 text-body-secondary'>
									Features
								</Nav.Link>
							</Nav.Item>
							<Nav.Item className='mb-2'>
								<Nav.Link className='p-0 text-body-secondary'>Pricing</Nav.Link>
							</Nav.Item>
							<Nav.Item className='mb-2'>
								<Nav.Link className='p-0 text-body-secondary'>FAQs</Nav.Link>
							</Nav.Item>
							<Nav.Item className='mb-2'>
								<Nav.Link className='p-0 text-body-secondary'>About</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
					<Col className='col-6 col-md-2 mb-3'>
						<h5>Section</h5>
						<Nav className='flex-column'>
							<Nav.Item className='mb-2'>
								<Nav.Link href='#' className='p-0 text-body-secondary'>
									Home
								</Nav.Link>
							</Nav.Item>
							<Nav.Item className='mb-2'>
								<Nav.Link className='p-0 text-body-secondary'>
									Features
								</Nav.Link>
							</Nav.Item>
							<Nav.Item className='mb-2'>
								<Nav.Link className='p-0 text-body-secondary'>Pricing</Nav.Link>
							</Nav.Item>
							<Nav.Item className='mb-2'>
								<Nav.Link className='p-0 text-body-secondary'>FAQs</Nav.Link>
							</Nav.Item>
							<Nav.Item className='mb-2'>
								<Nav.Link className='p-0 text-body-secondary'>About</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
					<Col className='col-md-6 mb-3'>
						<Form>
							<h5>Subscribe to our newsletter</h5>
							<p>Monthly digest of what's new and exciting from us.</p>
							<Stack direction='vertical' gap={2} className='flex-sm-row w-100'>
								<Form.Label htmlFor='subscribe' className='visually-hidden'>
									Email address
								</Form.Label>
								<Form.Control
									id='subscribe'
									type='email'
									placeholder='Email address'
								/>
								<Button variant='primary' type='button'>
									Subscribe
								</Button>
							</Stack>
						</Form>
					</Col>
				</Row>

				<Stack
					direction='vertical'
					className='flex-sm-row justify-content-between py-4 my-4 border-top'
				>
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
				</Stack>
			</Container>
		</footer>
	);
}

export default UserFooter;
