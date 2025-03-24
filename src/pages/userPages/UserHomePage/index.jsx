import HomeBanner from './HomeBanner';
import HomeCategories from './HomeCategories';
import Promotion from './Promotion';
import { Stack } from 'react-bootstrap';

function UserHomePage() {
	return (
		<Stack direction='vertical' gap={5}>
			<HomeBanner />
			<HomeCategories />
			<Promotion />
		</Stack>
	);
}

export default UserHomePage;
