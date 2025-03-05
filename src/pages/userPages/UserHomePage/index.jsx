import HomeBanner from './HomeBanner';
import HomeCategories from './HomeCategories';
import Promotion from './Promotion';

function UserHomePage() {
	return (
		<main className='vstack gap-5'>
			<HomeBanner />
			<HomeCategories />
			<Promotion />
		</main>
	);
}

export default UserHomePage;
