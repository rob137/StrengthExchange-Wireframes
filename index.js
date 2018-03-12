let count = 0;

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
				<button class="add-workout-button">Create new workout</button>
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
			<h2>Beach Workout Program</h2>
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
			</main>
				<footer><span>Footer</span><footer/>
`;

// INDIVIDUAL WORKOUT VIEW
	} else if (count ===3) {
		nextWireframeHtml = `
	<nav>
		<div class="burger-icon">[Menu]</div>
		<h3>StrengthExchange</h3>
	</nav>
	

	<header class="workout-header">
		<h2>Beach Workout - Day 5</h2>
	</header>
	
	<main class="individual-workout">
		<p class="workout-comments">Comments: This is a medium effort day following Wedesday's harder session.  Use the squats as a chance 
		to practise form.  You are unlikely to need a belt, but you should wear one if it will be needed to ensure you complete all sets.  The deadlifts are strictly optional.  You should only attempt them if you feel up to the task today.  There will be plenty of 
		chances to make up for this later - today's main goal is active rest.</p><br>
		<p><span class="exercise-details">Squat - 130kg - 3 sets of 5 reps.</span><button>Edit</edit><button>Remove</button>  
		<br><span class="exercise-comments">Comments: Do not perform pause squats.</span> </p> <br>
		<p><span class="exercise-details">Overhead Press - 60kg - 3 sets of 5 reps.</span><button>Edit</edit><button>Remove</button></p> <br>
		<p><span class="exercise-details">Deadlift - 160kg - 1 set of 5 reps.</span><button>Edit</edit><button>Remove</button>
		<br><span class="exercise-comments">Comments: Optional.  Only attempt if you feel well-rested.</span> </p> <br>
		<button>Add exercise</button>
	</main>
	<footer><span>Footer</span><footer/>


		`; 
	
	// EDIT INDIVIDUAL EXERCISE
	} else if (count === 4) {
		nextWireframeHtml = `
					<nav>
		<div class="burger-icon">[Menu]</div>
		<h3>StrengthExchange</h3>
	</nav>
	<header class="edit-exercise-header">
		<h2>Beach Workout - Day 5</h2>
	</header>
	<main class="edit-individual-exercise">
		<form>
			<h2>Edit exercise</h2>
			<label for="exercise">Exercise</label><br>
			<input type="text" id="exercise"><br>
			<label for="weight">Weight</label><br>
			<input type="number" id="weight"><br>
			<label for="reps">Reps</label><br>
			<input type="number" id="reps"><br>
			<label for="sets">Sets</label><br>
			<input type="number" id="sets"><br>
			<label for="notes">Notes</label><br>
			<input class="workout-notes" type="text" id="notes"><br><br>
			<input type="submit" value="Add To Workout" name="Add">
			<button>Cancel</button>
		</form>
	</main>
	<footer><span>Footer</span><footer/>


	`;

	// LANDING PAGE (index.html)		
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
