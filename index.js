let count = 0
$('.next-wireframe-button').on('click', () => {
	let nextWireframeHtml;
	count++
	if (count === 1) {
		nextWireframeHtml = `<nav>
			<div class="burger-icon">[Menu]</div>
			<h3>StrengthExchange</h3>
		</nav>
		<section class="dashboard">
			<header><h2>Joe Bloggs' Workouts</h2></header>
			<main class="workouts">
				<ul>
					<li>
						<span class="li-text">Jumbo Body</span>
					</li>
					<li>
						<span class="li-text">Sort-of Toned</span>
					</li>
					<li>
						<span class="li-text">Spherical Powerlifter</span>
					</li>
					<li>
						<span class="li-text">Big Arms For Christmas</span>
					</li>
					<li>
						<span class="li-text">Home Gym Mayhem</span>
					</li>
					<li>
						<span class="li-text">Gymnast in a Week</span>
					</li>
					<li>
						<span class="li-text">Press Your Car</span>
					</li>
				</ul>
			</main>
		</section>`;
	} else if (count === 2) {
		nextWireframeHtml = ``;
	} else {
		nextWireframeHtml = `
			<section class="hero landing-page-section">
			<h1>StrengthExchange</h1>
		</section>
		<section class="description landing-page-section">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</section>
		<section class="login-signup landing-page-section">
			<h2>Sign Up</h2>
			<p>Already registered? Click <a>here</a> to sign in</p>
			<form>
				<label for="name">Name</label><br>
				<input id="name" type="text" name=""><br>
				<label for="email">Email</label><br>
				<input id="email" type="text" name=""><br>
				<label for="password">Password</label><br>
				<input id="password" type="text" name=""><br>
				<label for="confirm-password">Confirm password</label><br>
				<input id="confirm-password" type="text" name=""><br><br>
				<input type="submit" name="sign up">
			</form>
		</section>
	`;
		count = 0;
	}
	$('.wireframe-content').html(nextWireframeHtml)
});