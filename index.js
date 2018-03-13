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
			<header class="dashboard-header"><h2>Joe Bloggs' Workout Programs</h2></header>
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
		<div class="screen-shader"></div>

			<nav>
			<div class="burger-icon">[Menu]</div>
			<h3>StrengthExchange</h3>
		</nav>
		
		
		<section class="dashboard">
			<header class="dashboard-header"><h2>Joe Bloggs' Workout Programs</h2></header>
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
		<section class="edit-program-calendar-sidebar">
			<a class="close-sidebar-widget">></a>
			
				<header class="sidebar-header">
					<h2>Press Your Car</h2>
				</header>

			
			<button>Delete this workout program</button>
			<h3 class="week-heading">Week 1</h3>
			<ul class="calendar-week">
				<li class="calendar-day">
					<span class="li-text">Mon</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Tue</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Wed</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Thu</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Fri</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Sat</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Sun</span>
				</li>
			</ul>
						<h3 class="week-heading">Week 2</h3>
			<ul class="calendar-week">
				<li class="calendar-day">
					<span class="li-text">Mon</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Tue</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Wed</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Thu</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Fri</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Sat</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Sun</span>
				</li>
			</ul>
						<h3 class="week-heading">Week 3</h3>
			<ul class="calendar-week">
				<li class="calendar-day">
					<span class="li-text">Mon</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Tue</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Wed</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Thu</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Fri</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Sat</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Sun</span>
				</li>
			</ul>
			<button class="add-week">Add a week</button>
			<button class="remove-week">Remove final week</button>
			</section>
				<footer><span>Footer</span><footer/>
`;

// INDIVIDUAL WORKOUT VIEW
	} else if (count === 3) {
		nextWireframeHtml = `
		<div class="screen-shader"></div>

				<nav>
			<div class="burger-icon">[Menu]</div>
			<h3>StrengthExchange</h3>
		</nav>
		
		
		<section class="dashboard">
			<header class="dashboard-header"><h2>Joe Bloggs' Workout Programs</h2></header>
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
		<section class="edit-program-calendar-sidebar">
			<a class="close-sidebar-widget">></a>
			
				<header class="sidebar-header">
					<h2>Press Your Car</h2>
				</header>

			
			<button>Delete this workout program</button>
			<h3 class="week-heading">Week 1</h3>
			<ul class="calendar-week">
				<li class="calendar-day">
					<span class="li-text">Mon</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Tue</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Wed</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Thu</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Fri</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Sat</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Sun</span>
				</li>
			</ul>
						<h3 class="week-heading">Week 2</h3>
			<ul class="calendar-week">
				<li class="calendar-day">
					<span class="li-text">Mon</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Tue</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Wed</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Thu</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Fri</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Sat</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Sun</span>
				</li>
			</ul>
						<h3 class="week-heading">Week 3</h3>
			<ul class="calendar-week">
				<li class="calendar-day">
					<span class="li-text">Mon</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Tue</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Wed</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Thu</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Fri</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Sat</span>
				</li>
				<li class="calendar day">
					<span class="li-text">Sun</span>
				</li>
			</ul>
			<button class="add-week">Add a week</button>
			<button class="remove-week">Remove final week</button>
			</section>
				
	
	<section class="edit-workout-sidebar">
			<a class="close-sidebar-widget">></a>
		
		<header class="sidebar-header">
			<h2>Press Your Car <br> Fri Week 1</h2>
		</header>
		
		<main class="individual-workout">
			<button>Delete this workout</button>
			<p><span>53</span> users have signed-up to this workout so far.</p>


<form>
	<label for="workout-summary">Your Summary</label><br>
	<textarea class="workout-summary" id="workout-summary" type="text" value="" placeholder="Your Summary"></textarea>
	<br><br>
	<table class="workout-table">
		<tr>
			<th>Exercise</th>
			<th>Weight</th>
			<th>Reps</th>
			<th>Sets</th>
		</tr>
		<tr>
			<td><input type="text" value="Squat" placeholder="Exercise"></td>
			<td><input type="text" value="130" placeholder="Weight"></td>
			<td><input type="text" value="5" placeholder="Reps"></td>
			<td><input type="text" value="3" placeholder="Sets"></td>
		</tr>
		<tr>
			<td colspan="4"><textarea type="text" class="comments-box" value="" placeholder="Your Comments"></textarea></td>
		</tr>

		<tr>
			<td><input type="text" value="Press" placeholder="Exercise"></td>
			<td><input type="text" value="60" placeholder="Weight"></td>
			<td><input type="text" value="5" placeholder="Reps"></td>
			<td><input type="text" value="3" placeholder="Sets"></td>
		</tr>
		<tr>
			<td colspan="4"><textarea type="text" class="comments-box" value="" placeholder="Your Comments"></textarea></td>
		</tr>

		<tr>
			<td><input type="text" value="" placeholder="Exercise"></td>
			<td><input type="text" value="" placeholder="Weight"></td>
			<td><input type="text" value="" placeholder="Reps"></td>
			<td><input type="text" value="" placeholder="Sets"></td>
		</tr>
		<tr>
			<td colspan="4"><textarea type="text" class="comments-box" value="" placeholder="Your Comments"></textarea></td>
		</tr>
	</table>
</form>
<br><button>Add another exercise</button>
<br><button> Save changes </button>

		</main>
	</section>
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
			<div class="form-wrapper">
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
			</div>
		</section>
	</div>
	<footer><span>Footer</span><footer/>




		 `
		 count = 0 
	}
	$('.wireframe-content').html(nextWireframeHtml);
	count++;
}

$(rotateWireframe)
$('.next-wireframe-button').on('click', rotateWireframe);
