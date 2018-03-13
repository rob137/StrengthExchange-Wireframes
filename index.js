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
						<span class="li-program-name vertical-center">Jumbo Body</span>
					</li>
					<li>
						<span class="li-program-name vertical-center">Sort-of Toned</span>
					</li>
					<li>
						<span class="li-program-name vertical-center">Spherical Powerlifter</span>
					</li>
					<li>
						<span class="li-program-name vertical-center">Big Arms For Christmas</span>
					</li>
					<li>
						<span class="li-program-name vertical-center">Home Gym Mayhem</span>
					</li>
					<li>
						<span class="li-program-name vertical-center">Gymnast in a Week</span>
					</li>
					<li>
						<span class="li-program-name vertical-center">Press Your Car</span>
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
						<span class="li-program-name vertical-center">Jumbo Body</span>
					</li>
					<li>
						<span class="li-program-name vertical-center">Sort-of Toned</span>
					</li>
					<li>
						<span class="li-program-name vertical-center">Spherical Powerlifter</span>
					</li>
					<li>
						<span class="li-program-name vertical-center">Big Arms For Christmas</span>
					</li>
					<li>
						<span class="li-program-name vertical-center">Home Gym Mayhem</span>
					</li>
					<li>
						<span class="li-program-name vertical-center">Gymnast in a Week</span>
					</li>
					<li>
						<span class="li-program-name vertical-center">Press Your Car</span>
					</li>
				</ul>
			</main>
		</section>
		<section class="edit-program-calendar-sidebar">
			<a class="close-sidebar-widget vertical-center close-sidebar-widget vertical-center-1">></a>
			
				<header class="sidebar-header">
					<h2>Press Your Car</h2>
				</header>

			
			<button>Delete this workout program</button>
			<h3 class="week-heading">Week 1</h3>
			<ul class="calendar-week">
				<li class="calendar-day">
					<span class="li-day">Mon</span>
					<img src="./images/squat.png" alt="Squat">
				</li>
				<li class="calendar day">
					<span class="li-day">Tue</span>
					<img src="./images/pillow.jpg" alt="Rest">
				</li>
				<li class="calendar day">
					<span class="li-day">Wed</span>
					<img src="./images/chinup.png" alt="Chinup">
				</li>
				<li class="calendar day">
					<span class="li-day">Thu</span>
					<img src="./images/pillow.jpg" alt="Rest">
				</li>
				<li class="calendar day">
					<span class="li-day">Fri</span>
					<img src="./images/row.jpg" alt="Row">
				</li>
				<li class="calendar day">
					<span class="li-day">Sat</span>
					<img src="./images/pillow.jpg" alt="Rest">
				</li>
				<li class="calendar day">
					<span class="li-day">Sun</span>
					<img src="./images/pillow.jpg" alt="Rest">
				</li>
			</ul>
						<h3 class="week-heading">Week 2</h3>
			<ul class="calendar-week">
				<li class="calendar-day">
					<span class="li-day">Mon</span>
					<img src="./images/front-squat.png" alt="Front squat">
				</li>
				<li class="calendar day">
					<span class="li-day">Tue</span>
					<img src="./images/pillow.jpg" alt="Rest">
				</li>
				<li class="calendar day">
					<span class="li-day">Wed</span>
					<img src="./images/powerclean.jpg" alt="Powerclean">
				</li>
				<li class="calendar day">
					<span class="li-day">Thu</span>
					<img src="./images/pillow.jpg" alt="Rest">
				</li>
				<li class="calendar day">
					<span class="li-day">Fri</span>
					<img src="./images/pushup.png" alt="Pushup">
				</li>
				<li class="calendar day">
					<span class="li-day">Sat</span>
					<img src="./images/pillow.jpg" alt="Rest">
				</li>
				<li class="calendar day">
					<span class="li-day">Sun</span>
					<img src="./images/pillow.jpg" alt="Rest">
				</li>
			</ul>
						<h3 class="week-heading">Week 3</h3>
			<ul class="calendar-week">
				<li class="calendar-day">
					<span class="li-day">Mon</span>
					<img src="./images/press.jpg" alt="Press">
				</li>
				<li class="calendar day">
					<span class="li-day">Tue</span>
					<img src="./images/pillow.jpg" alt="Rest">
				</li>
				<li class="calendar day">
					<span class="li-day">Wed</span>
					<img src="./images/pullup.png" alt="Pullup">
				</li>
				<li class="calendar day">
					<span class="li-day">Thu</span>
					<img src="./images/pillow.jpg" alt="Rest">
				</li>
				<li class="calendar day">
					<span class="li-day">Fri</span>
					<img src="./images/row.jpg" alt="Row">
				</li>
				<li class="calendar day">
					<span class="li-day">Sat</span>
					<img src="./images/pillow.jpg" alt="Rest">
				</li>
				<li class="calendar day">
					<span class="li-day">Sun</span>
					<img src="./images/pillow.jpg" alt="Rest">
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
						<span class="li-program-name vertical-center">Jumbo Body</span>
					</li>
					<li>
						<span class="li-program-name vertical-center">Sort-of Toned</span>
					</li>
					<li>
						<span class="li-program-name vertical-center">Spherical Powerlifter</span>
					</li>
					<li>
						<span class="li-program-name vertical-center">Big Arms For Christmas</span>
					</li>
					<li>
						<span class="li-program-name vertical-center">Home Gym Mayhem</span>
					</li>
					<li>
						<span class="li-program-name vertical-center">Gymnast in a Week</span>
					</li>
					<li>
						<span class="li-program-name vertical-center">Press Your Car</span>
					</li>
				</ul>
			</main>
		</section>
		<section class="edit-program-calendar-sidebar">
			<a class="close-sidebar-widget vertical-center close-sidebar-widget vertical-center-1">></a>
			
				<header class="sidebar-header">
					<h2>Press Your Car</h2>
				</header>

			
			<button>Delete this workout program</button>
			<h3 class="week-heading">Week 1</h3>
			<ul class="calendar-week">
				<li class="calendar-day">
					<span class="li-day">Mon</span>
				</li>
				<li class="calendar day">
					<span class="li-day">Tue</span>
				</li>
				<li class="calendar day">
					<span class="li-day">Wed</span>
				</li>
				<li class="calendar day">
					<span class="li-day">Thu</span>
				</li>
				<li class="calendar day">
					<span class="li-day">Fri</span>
				</li>
				<li class="calendar day">
					<span class="li-day">Sat</span>
				</li>
				<li class="calendar day">
					<span class="li-day">Sun</span>
				</li>
			</ul>
						<h3 class="week-heading">Week 2</h3>
			<ul class="calendar-week">
				<li class="calendar-day">
					<span class="li-day">Mon</span>
				</li>
				<li class="calendar day">
					<span class="li-day">Tue</span>
				</li>
				<li class="calendar day">
					<span class="li-day">Wed</span>
				</li>
				<li class="calendar day">
					<span class="li-day">Thu</span>
				</li>
				<li class="calendar day">
					<span class="li-day">Fri</span>
				</li>
				<li class="calendar day">
					<span class="li-day">Sat</span>
				</li>
				<li class="calendar day">
					<span class="li-day">Sun</span>
				</li>
			</ul>
						<h3 class="week-heading">Week 3</h3>
			<ul class="calendar-week">
				<li class="calendar-day">
					<span class="li-day">Mon</span>
				</li>
				<li class="calendar day">
					<span class="li-day">Tue</span>
				</li>
				<li class="calendar day">
					<span class="li-day">Wed</span>
				</li>
				<li class="calendar day">
					<span class="li-day">Thu</span>
				</li>
				<li class="calendar day">
					<span class="li-day">Fri</span>
				</li>
				<li class="calendar day">
					<span class="li-day">Sat</span>
				</li>
				<li class="calendar day">
					<span class="li-day">Sun</span>
				</li>
			</ul>
			<button class="add-week">Add a week</button>
			<button class="remove-week">Remove final week</button>
			</section>
				
	
	<section class="edit-workout-sidebar">
			<a class="close-sidebar-widget vertical-center close-sidebar-widget vertical-center-2">></a>
		
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
			<td><input type="number" value="130" placeholder="Weight"></td>
			<td><input type="number" value="5" placeholder="Reps"></td>
			<td><input type="number" value="3" placeholder="Sets"></td>
		</tr>
		<tr>
			<td colspan="4"><textarea type="text" class="comments-box" value="" placeholder="Your Comments"></textarea></td>
		</tr>

		<tr>
			<td><input type="text" value="Press" placeholder="Exercise"></td>
			<td><input type="number" value="60" placeholder="Weight"></td>
			<td><input type="number" value="5" placeholder="Reps"></td>
			<td><input type="number" value="3" placeholder="Sets"></td>
		</tr>
		<tr>
			<td colspan="4"><textarea type="text" class="comments-box" value="" placeholder="Your Comments"></textarea></td>
		</tr>

		<tr>
			<td><input type="text" value="" placeholder="Exercise"></td>
			<td><input type="number" value="" placeholder="Weight"></td>
			<td><input type="number" value="" placeholder="Reps"></td>
			<td><input type="number" value="" placeholder="Sets"></td>
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
			<h1 class="vertical-center">StrengthExchange</h1>
		</section>
		<section class="description landing-page-section">
			<p class="description-para vertical-center">
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
			<div class="form-wrapper horizontal-center">
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
