import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Avatar } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useAuth, logout } from '../../Authcontext';
import styles from '../../styles/UserAvatar.module.css';

function UserAvatar() {
	const { currentUser } = useAuth();
	const router = useRouter();
	function handleLoginClick() {
		router.push('/login');
	}

	function handleLogout() {
		logout();
		if (router.pathname === '/checkout') router.push('/login');
		else router.push('/');
	}

	function handleRegisterClick() {
		router.push('/signup');
	}
	function loggedInMenuItems() {
		return (
			<>
				<MenuItem id="1" disabled fontWeight="bold">
					{currentUser ? currentUser?.displayName : currentUser?.email}
				</MenuItem>
				<MenuItem id="2" onClick={handleLogout}>
					Logout
				</MenuItem>
			</>
		);
	}

	function loggedOutMenuItems() {
		return (
			<>
				<MenuItem id="3" disabled fontWeight="bold">
					GUEST USER
				</MenuItem>
				<MenuItem id="4" onClick={handleLoginClick}>
					Login
				</MenuItem>
				<MenuItem id="5" onClick={handleRegisterClick}>
					Register
				</MenuItem>
			</>
		);
	}

	return (
		<div className="UserAvatarContainer">
			<Menu>
				<MenuButton>
					<Avatar
						name={currentUser ? currentUser?.displayName : currentUser?.email}
					/>
				</MenuButton>
				<MenuList>
					{currentUser ? loggedInMenuItems() : loggedOutMenuItems()}
				</MenuList>
			</Menu>
		</div>
	);
}

export default React.memo(UserAvatar);
