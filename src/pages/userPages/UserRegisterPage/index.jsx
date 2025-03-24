import { useEffect, useState } from 'react';
import { Card, Container, Form, Stack, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { fetcher } from '../../../services/api';

function UserRegisterPage() {
	const navigate = useNavigate();
	const [fullname, setFullname] = useState('');
	const [fullnameHelp, setFullnameHelp] = useState('');
	const [email, setEmail] = useState('');
	const [emailHelp, setEmailHelp] = useState('');
	const [password, setPassword] = useState('');
	const [passwordHelp, setPasswordHelp] = useState('');
	const [validated, setValidated] = useState(false);

	useEffect(() => {
		const validateForm = () => {
			if (!fullname.trim()) {
				setFullnameHelp('Fullname is required.');
				return false;
			}
			setFullnameHelp('');
			if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
				setEmailHelp('A valid email address is required.');
				return false;
			}
			setEmailHelp('');
			if (password.length < 6) {
				setPasswordHelp('Password must be at least 6 characters long.');
				return false;
			}
			setPasswordHelp('');
			return true;
		};
		setValidated(validateForm());
	}, [fullname, email, password]);

	const handleSubmit = async () => {
		const chekEmail = await fetcher.get('/users', { params: { email } });
		if (chekEmail && chekEmail.data && chekEmail.data.length > 0) {
			alert('Register failed:', 'Email already exists');
		} else {
			await fetcher.post('/users', {
				fullname,
				email,
				password,
			});
			alert('Register successful!');
			navigate('/authentication');
		}
	};

	return (
		<Container className='d-flex justify-content-center'>
			<Card className='border-0' style={{ width: '32rem' }}>
				<Card.Header className='text-center border-0'>
					<h2>Create an account</h2>
					<p className='m-0'>
						Already have an account? <Link to='/authentication'>Sign in</Link>
					</p>
				</Card.Header>
				<Card.Body className='bg-body-tertiary border-0'>
					<Stack direction='vertical' gap={3}>
						<Form.FloatingLabel controlId='fullname' label='Fullname'>
							<Form.Control
								type='text'
								placeholder='John Doe'
								className='shadow-none'
								required
								onChange={(event) => setFullname(event.target.value)}
							/>
							<Form.Text id='fullnameHelp' className='text-danger'>
								{fullnameHelp}
							</Form.Text>
						</Form.FloatingLabel>
						<Form.FloatingLabel controlId='email' label='Email Address'>
							<Form.Control
								type='email'
								placeholder='example@email.com'
								className='shadow-none'
								required
								onChange={(event) => setEmail(event.target.value)}
							/>
							<Form.Text id='emailHelp' className='text-danger'>
								{emailHelp}
							</Form.Text>
						</Form.FloatingLabel>
						<Form.FloatingLabel controlId='password' label='Password'>
							<Form.Control
								type='password'
								placeholder='password'
								className='shadow-none'
								onChange={(event) => setPassword(event.target.value)}
							/>
							<Form.Text id='passwordHelp' className='text-danger'>
								{passwordHelp}
							</Form.Text>
						</Form.FloatingLabel>
						<Button
							variant='success'
							size='lg'
							className='rounded-pill fw-medium'
							disabled={!validated}
							onClick={handleSubmit}
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
					</Stack>
				</Card.Body>
			</Card>
		</Container>
	);
}

export default UserRegisterPage;
