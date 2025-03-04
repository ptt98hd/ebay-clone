import HeaderCategory from './HeaderCategory';
import HeaderNav from './HeaderNav';
import HeaderSearch from './HeaderSearch';

function UserHeader() {
	return (
		<header>
			<HeaderNav />
			<HeaderSearch />
			{/* <HeaderCategory /> */}
		</header>
	);
}

export default UserHeader;
