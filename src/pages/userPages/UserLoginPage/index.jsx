import React from 'react';
import {
	Card,
	Container,
	Form,
	Stack,
	Button,
	InputGroup,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetcher } from '../../../services/api';

function UserLoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [saved, setSaved] = useState(false);
	const navigate = useNavigate();
	console.log(email, password, saved);

	const handleLogin = async () => {
		try {
			const response = await fetcher.get('/users', {
				params: { email, password },
			});
			const data = response.data;
			if (data && data.length === 1) {
				const uid = data[0].id;
				saved
					? localStorage.setItem('uid', JSON.stringify(uid))
					: sessionStorage.setItem('uid', JSON.stringify(uid));
				navigate('/');
			} else {
				alert('Login failed:', 'Wrong email or password');
			}
		} catch (error) {
			console.log(error);
			alert('Login failed:', 'Unknown error');
		}
	};

	return (
		<Container className='d-flex justify-content-center'>
			<Card className='border-0' style={{ width: '32rem' }}>
				<Card.Header className='text-center border-0'>
					<h4 className='fs-4 fw-bold'>Sign in to your account</h4>
					<p className='m-0'>
						New to eBay? <Link to='/register'>Create Account</Link>
					</p>
				</Card.Header>
				<Card.Body className='bg-body-tertiary border-0'>
					<Stack direction='vertical' gap={3}>
						<Form.FloatingLabel controlId='email' label='Email Address'>
							<Form.Control
								type='email'
								placeholder='example@email.com'
								className='shadow-none'
								required
								onChange={(event) => setEmail(event.target.value)}
							/>
						</Form.FloatingLabel>

						<Form.FloatingLabel controlId='password' label='Password'>
							<Form.Control
								type='password'
								placeholder='password'
								className='shadow-none'
								onChange={(event) => setPassword(event.target.value)}
							/>
						</Form.FloatingLabel>
						<Button
							variant='success'
							size='lg'
							className='rounded-pill fw-medium'
							onClick={handleLogin}
						>
							Submit
						</Button>
						<div className='position-relative text-center'>
							<hr />
							<span className='d-block position-absolute top-50 start-50 translate-middle bg-body-tertiary px-2'>
								Or Continue With
							</span>
						</div>

						<Button
							size='lg'
							className='rounded-pill fw-medium'
							variant='danger'
						>
							Google
						</Button>
						<Button
							size='lg'
							className='rounded-pill fw-medium'
							variant='primary'
						>
							Facebook
						</Button>
						<Button size='lg' className='rounded-pill fw-medium' variant='dark'>
							Apple
						</Button>
						<Form.Check
							type='checkbox'
							label='Stay signed in?'
							id='stay-signed-in'
							className='mx-auto'
							checked={saved}
							onChange={(event) => setSaved(event.target.checked)}
						/>
					</Stack>
				</Card.Body>
			</Card>
		</Container>
	);
}

export default UserLoginPage;
