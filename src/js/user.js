var User = (function () {
	
	function login(loginForm) {
		return fetch('https://api.overseas.ncnu.edu.tw/users/login', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include',
			body: JSON.stringify(loginForm)
		});
	}

	function logout() {
		return fetch('https://api.overseas.ncnu.edu.tw/users/logout', {
			method: "POST",
			credentials: 'include'
		});
	}

	function isLogin() {
		return fetch('https://api.overseas.ncnu.edu.tw/users/login', {
			credentials: 'include'
		});
	}

	return {
		login, 
		logout, 
		isLogin
	}
})();
