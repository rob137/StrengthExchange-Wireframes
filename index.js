let count = 3;

function rotateWireframe() {
	let nextWireframeHtml;
	
	if (count === 1) {
		nextWireframeHtml = `


		<nav>
			<div class="burger-icon">[Menu]</div>
			<h3>StrengthExchange</h3>
		</nav>
		<section class="dashboard">
			<header class="dashboard-header"><h2>Joe Bloggs' Workouts</h2></header>
			<main class="workouts">
				<button class="add-workout-button">Add new workout</button>
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
		</section>
		<footer><span>Footer</span><footer/>

		`;

	// EDIT WORKOUT PROGRAM
	} else if (count === 2) {
		nextWireframeHtml = `
	
		<nav>
				<div class="burger-icon">[Menu]</div>
				<h3>StrengthExchange</h3>
		</nav>
		<header class="program-calendar-header">
			<h2>Joe Bloggs' Beach Workout Program</h2>
		</header>
		<main class="program-calendar">
			<h3 class="week-heading">Week 1</h3>
			<ul class="calendar-week">
				<li class="calendar-day">
					<span class="li-text">Day 1</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Day 2</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Day 3</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Day 4</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Day 5</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Day 6</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Day 7</span>
				</li>
			</ul>
						<h3 class="week-heading">Week 2</h3>
			<ul class="calendar-week">
				<li class="calendar-day">
					<span class="li-text">Day 1</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Day 2</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Day 3</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Day 4</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Day 5</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Day 6</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Day 7</span>
				</li>
			</ul>
						<h3 class="week-heading">Week 3</h3>
			<ul class="calendar-week">
				<li class="calendar-day">
					<span class="li-text">Day 1</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Day 2</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Day 3</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Day 4</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Day 5</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Day 6</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Day 7</span>
				</li>
			</ul>
			<button class="add-week">Add a week</button>
			<button class="remove-week">Remove final week</button>
			
				<footer><span>Footer</span><footer/>
`;

	// EDIT INDIVIDUAL WORKOUT
	} else if (count ===3) {
		nextWireframeHtml = `
			<nav>
		<div class="burger-icon">[Menu]</div>
		<h3>StrengthExchange</h3>
	</nav>
	<header class="edit-workout-header">
		<h2>Joe Bloggs' Beach Workout - Day 5</h2>
	</header>
	<main class="edit-individual-workout">
		<form>
			<h2>Edit workout</h2>
			<label>Exercise</label><br>
			<input type="text" name=""><br>
			<label>Weight</label><br>
			<input type="number" name=""><br>
			<label>Reps</label><br>
			<input type="number" name=""><br>
			<label>Sets</label><br>
			<input type="number" name=""><br>
			<label>Time</label><br>
			<input type="time" name=""><br>
			<label>Notes</label><br>
			<input type="text" name=""><br><br>
			<input type="submit" value="Add To Workout" name="Add">
			<button>Cancel</button>
		</form>
	</main>
	<footer><span>Footer</span><footer/>

		`; 
	
	// LANDING PAGE (index.html)
	} else if (count === 4) {
		nextWireframeHtml = `
		
					<nav>
		<div class="burger-icon">[Menu]</div>
		<h3>StrengthExchange</h3>
	</nav>
	<header class="edit-workout-header">
		<h2>Joe Bloggs' Beach Workout - Day 5</h2>
	</header>
	<main class="edit-individual-workout">
		<form>
			<h2>Edit workout</h2>
			<label>Exercise</label><br>
			<input type="text" name=""><br>
			<label>Weight</label><br>
			<input type="number" name=""><br>
			<label>Reps</label><br>
			<input type="number" name=""><br>
			<label>Sets</label><br>
			<input type="number" name=""><br>
			<label>Notes</label><br>
			<input type="text" name=""><br><br>
			<input type="submit" value="Add To Workout" name="Add">
			<button>Cancel</button>
		</form>
	</main>
	<footer><span>Footer</span><footer/>


	`;
		
	} else {

		nextWireframeHtml = `




		<div class="wireframe-content">
		<section class="hero landing-page-section">
			<h1>StrengthExchange</h1>
		</section>
		<section class="description landing-page-section">
			<p class="description-para">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</section>
		<section class="login-signup landing-page-section">
			<h2>Sign Up</h2>
			<p>Already registered? Click <a href="blank">here</a> to sign in</p>
			<form>
				<label for="name">Name</label><br>
				<input id="name" type="text" name=""><br>
				<label for="email">Email</label><br>
				<input id="email" type="text" name=""><br>
				<label for="password">Password</label><br>
				<input id="password" type="text" name=""><br>
				<label for="confirm-password">Confirm password</label><br>
				<input id="confirm-password" type="text" name=""><br><br>
				<input type="submit" name="sign up" class="submit-button">
			</form>
		</section>
	</div>
	<footer><span>Footer</span><footer/>




		 `
		 count = 0 
	}
	$('.wireframe-content').html(nextWireframeHtml);
	count++
	console.log(1);
}

$(rotateWireframe)
$('.next-wireframe-button').on('click', rotateWireframe);
