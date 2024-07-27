document.getElementById('chat-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const heightCm = parseFloat(document.getElementById('height').value);
    const weightKg = parseFloat(document.getElementById('weight').value);
    
    if (isNaN(heightCm) || isNaN(weightKg) || heightCm <= 0 || weightKg <= 0) {
        appendMessage('Please enter valid height and weight.', 'ai-message');
        return;
    }

    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);
    
    let suggestion = '';

    if (bmi < 18.5) {
        suggestion = `
            <h3>Underweight (BMI: ${bmi.toFixed(1)})</h3>
            <p>Gym Exercises</p>
            <p>1.Compound Exercises:</p>
            <ul>
                <li><strong>Squats:</strong> Great for building lower body and core strength</li>
                <li><strong>Deadlifts:</strong> Target multiple muscle groups, including back, legs, and core.</li>
                <li><strong>Bench Press:</strong> Focuses on chest, shoulders, and triceps.</li>
                <li><strong>Overhead Press:</strong>  Strengthens shoulders and upper chest</li>
                <li><strong>Pull-Ups/Chin-Ups: </strong> Excellent for back, biceps, and forearms.</li>
            </ul>
            <p>2.Isolation Exercises:</p>
            <ul>
                <li><strong>Bicep Curls:</strong> Target the biceps specifically.</li>
                <li><strong>Tricep Extensions:</strong>  Focus on triceps.</li>
                <li><strong>Leg Curls and Extensions:</strong>  Isolate the hamstrings and quadriceps</li>
                
            </ul>
            <p>3.Cardio:</p>
            <ul>
                <li> While cardio isn't a primary focus for weight gain, incorporating light to moderate cardio can help maintain cardiovascular health.</li>
            </ul>
             <p>Non Gym Exercises</p>
            <p>1.Bodyweight Exercises:</p>
            <ul>
                <li><strong> Push-Ups:</strong> Build chest, shoulders, and triceps.</li>
                <li><strong>Pull-Ups:</strong> Strengthen the back and biceps (can use a doorway pull-up bar).</li>
                <li><strong>Squats:</strong>  Work on the lower body and core.</li>
                <li><strong>Lunges:</strong>  Target the legs and glutes.</li>
                <li><strong>Planks:</strong> Improve core strength and stability.</li>
            </ul>
             <p>2.Resistance Band Exercises:</p>
            <ul>
                <li><strong>Band Rows:</strong>  For the back and biceps.</li>
                <li><strong> Band Chest Press:</strong> Focus on chest and triceps.</li>
                <li><strong>Band Squats: </strong>Add resistance to your squats.</li>
            </ul>
             <p>Nutrition Tips</p>
            <p><strong>1.Caloric Surplus:</strong> Consume more calories than you burn. Focus on nutrient-dense foods.</p>
            <ul>
                <li><strong>Protein:</strong> Essential for muscle growth (chicken, fish, eggs, legumes).</li>
                <li><strong>Carbohydrates:</strong> Provide energy (whole grains, vegetables, fruits).</li>
                <li><strong>Healthy Fats:</strong> : Support overall health (nuts, seeds, avocados).</li>
            </ul>
            <p><strong>2.Frequent Meals:</strong>Eat smaller, more frequent meals throughout the day.</p>
            <p><strong>3.Protein Shakes:</strong>Can be an easy way to increase protein intake and calories..</p>
            <p><strong>4.Stay Hydrated:</strong> Drink plenty of water.</p>
            <p><strong>5.Stay Avoid Empty Calories:</strong>  Limit sugary snacks and drinks that don't provide nutritional value.</p>

        `;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        suggestion = `
            <h3>Normal Weight (BMI: ${bmi.toFixed(1)})</h3>
            <h3>Gym Workouts </h3>
<h4>Strength Training: </h4>
<ul>
<li><strong>Frequency:</strong> 3-4 times a week.</li>

<li><strong>Focus:</strong> Full-body workouts or split routines (e.g., upper/lower body).</li>

<li><strong>Exercises:</strong> Squats, deadlifts, bench presses, rows, pull-ups, and shoulder presses.</li>

<li><strong>Reps/Sets:</strong> 3-4 sets of 8-12 reps for each exercise.</li>

</ul>

<h4>Cardiovascular Training:</h4>
<ul>
<li><strong>Frequency:</strong> 2-3 times a week.</li>
<li><strong>Types:</strong> Running, cycling, rowing, or HIIT (High-Intensity Interval Training).</li>
<li><strong>Duration:</strong> 20-30 minutes per session.</li>
</ul>

<h4>Flexibility and Mobility:</h4>
<ul>

<li><strong>Frequency:</strong> 2-3 times a week.</li>
<li><strong>Activities:</strong> Yoga, stretching routines, foam rolling.</li>
</ul>

 <h3>Home Workouts </h3>

<h4>Bodyweight Exercises:</h4>
<ul>

<li><strong>Exercises:</strong> Push-ups, squats, lunges, planks, burpees.</li>
<li><strong>Routine:</strong> 3-4 sets of 10-15 reps for each exercise.</li>
</ul>

<h4>Resistance Bands:</h4>
<ul>

<li><strong>Exercises:</strong> Band squats, band rows, band presses, band curls.</li></ul>

<h4>Cardio:</h4>
<ul>
<li><strong>Routine:</strong> 3 sets of 12-15 reps.</li>

<li><strong>Types:</strong> Jump rope, high knees, mountain climbers.</li>
<li><strong>Duration:</strong> 20-30 minutes.</li>
</ul>

<h4>Flexibility:</h4>
<ul>
<li><strong>Routine:</strong> Stretch major muscle groups or follow an online yoga video.</li>
</ul>
 <h3>Diet Plan</h3>

<h4>Macronutrient Distribution:</h4>
<ul>
<li><strong>Protein:</strong> 
15-25% of total calories (e.g., lean meats, fish, eggs, legumes).</li>
<li><strong>Carbohydrates:</strong> 45-55% of total calories (e.g., whole grains, fruits, vegetables).</li>
<li><strong>Fats:</strong> 20-35% of total calories (e.g., avocados, nuts, olive oil).</li>
</ul>
<h4>Meal Timing:</h4>
<ul>
<li><strong>Pre-Workout:</strong> Light snack with carbs and protein (e.g., banana and yogurt).</li>
<li><strong>Post-Workout:</strong> Balanced meal with protein and carbs (e.g., chicken with quinoa and vegetables).</li>
</ul>
<h4>Hydration:</h4>
<ul>
<li><strong>Water Intake:</strong> Aim for 8-10 glasses per day, more if you're active.</li>
</ul>
<h4>General Tips:</h4>
<ul>
<li><strong>Balanced Meals:</strong> Incorporate a variety of nutrient-dense foods.</li>
<li><strong>Avoid Processed Foods:</strong> Minimize sugar and refined carbs.</li>
<li><strong>Moderation:</strong> Enjoy treats occasionally but keep them in check.</li>
</ul>
        `;
    } else if (bmi >= 25 && bmi < 29.9) {
        suggestion = `
            <h3>Overweight (BMI: ${bmi.toFixed(1)})</h3>
           
            <p>Focus on low-impact exercises and fat reduction:</p>
            For weight loss at home, it's effective to combine cardiovascular exercises, strength training, and flexibility workouts. Here’s a well-rounded routine you can follow:

            <h3>Without Gym Exercise</h3>

<ul>
<h3>Cardiovascular Exercises</h3>
<li><strong>Jumping Jacks –</strong> 3 sets of 1 minute</li>
<li><strong>High Knees – </strong>3 sets of 1 minute</li>
<li><strong>Burpees – </strong>3 sets of 10-15 reps</li>
<li><strong>Mountain Climbers –</strong> 3 sets of 1 minute</li>
<li><strong>Strength Training</strong>
<li><strong>Bodyweight Squats –</strong> 3 sets of 15-20 reps</li>
<li><strong>Push-ups –</strong> 3 sets of 10-15 reps (modify with knee push-ups if needed)</li>
<li><strong>Lunges –</strong> 3 sets of 12 reps per leg</li>
<li><strong>Plank –</strong> 3 sets of 30-60 seconds</li>
<strong>Flexibility and Core</strong>
<li><strong>Leg Raises – </strong>3 sets of 15 reps</li>
<li><strong>Russian Twists –</strong> 3 sets of 20 reps (10 each side)</li>
<li><strong>Bicycle Crunches – </strong>3 sets of 15 reps per side</li>
<li><strong>Stretching – </strong>10 minutes of full-body stretches</li>
<strong>Tips</strong>
<li><strong>Warm-Up:</strong> Start with 5-10 minutes of light cardio (e.g., marching in place) to get your muscles ready.</li>
<li><strong>Cool Down:</strong> End with stretching to improve flexibility and aid recovery.</li>
<li><strong>Consistency:</strong> Aim to exercise 3-5 times a week for the best results.</li>
<li><strong>Nutrition:</strong> Pair exercise with a balanced diet for effective weight loss.</ul></li>



<h3>Gym Exercise</h3>
<strong>Cardiovascular Exercises</strong>
<li><strong>Treadmill Running –</strong> 20-30 minutes at a moderate to high intensity.</li>
<li><strong>Rowing Machine –</strong> 15-20 minutes at a steady pace.</li>
<li><strong>Elliptical Trainer – </strong>20-30 minutes with varying resistance levels.</li>
<li><strong>Cycling –</strong> 20-30 minutes on a stationary bike.</li>
<strong>Strength Training</strong>
<li><strong>Squats – </strong>3 sets of 12-15 reps (use weights for added resistance).</li>
<li><strong>Deadlifts –</strong> 3 sets of 10-12 reps.</li>
<li><strong>Bench Press –</strong> 3 sets of 10-12 reps.</li>
<li><strong>Lat Pulldowns –</strong> 3 sets of 12-15 reps.</li>
<li><strong>Dumbbell Lunges – </strong>3 sets of 12 reps per leg.</li>
<li><strong>Shoulder Press – </strong>3 sets of 12-15 reps.</li>
<li><strong>Bicep Curls – </strong>3 sets of 15 reps.</li>
<li><strong>Tricep Dips – </strong>3 sets of 12-15 reps.</li>
<li><strong>HIIT (High-Intensity Interval Training)</strong>
<li><strong>Burpees – </strong>30 seconds on, 30 seconds off (repeat for 10-15 minutes).</li>
<li><strong>Jump Rope –</strong> 1 minute on, 1 minute off (repeat for 10 minutes).</li>
<li><strong>Kettlebell Swings –</strong> 30 seconds on, 30 seconds off (repeat for 10 minutes).</li>
<strong>Core Workouts</strong>
<li><strong>Plank –</strong> 3 sets of 30-60 seconds.</li>
<li><strong>Cable Woodchoppers – </strong>3 sets of 12-15 reps per side.</li>
<li><strong>Hanging Leg Raises –</strong> 3 sets of 10-12 reps.</li>
<li><strong>Russian Twists –</strong> 3 sets of 20 reps (10 each side).</li>
<strong>Tips</strong>
<li><strong>Warm-Up:</strong> Start with 5-10 minutes of light cardio to prepare your body.</li>
<li><strong>Cool Down: </strong>End with stretching or foam rolling to aid recovery.</li>
<li><strong>Progressive </strong>Overload: Gradually increase the weight or intensity of your exercises.</li>
<li><strong>Consistency:</strong> Aim for 3-5 workouts per week, balancing cardio and strength training.</li>

<h3> Nutrition Tips</h3>
<strong>1. Balanced Meals</strong>
<li><strong>Include Protein:</strong> Incorporate lean proteins like chicken, turkey, tofu, beans, and fish. Protein helps build muscle and keeps you full longer.</li>
<li><strong>Add Fiber:</strong> Eat plenty of fruits, vegetables, and whole grains. Fiber aids digestion and helps you feel satisfied.</li>
<li><strong>Healthy Fats:</strong> Include sources of healthy fats such as avocados, nuts, seeds, and olive oil. These fats support overall health and can help control appetite.</li>
<strong>2. Portion Control</strong>
<li><strong>Watch Portions:</strong> Be mindful of portion sizes to avoid overeating. Using smaller plates can help manage portions.</li>
<li><strong>Avoid Eating Out of Boredom:</strong> Stick to eating at scheduled times and avoid snacking out of habit.</li>
<strong>3. Hydration</strong>
<li><strong>Drink Water</strong>: Stay hydrated by drinking plenty of water throughout the day. Sometimes thirst can be mistaken for hunger.</li>
<li><strong>Limit Sugary Drinks:</strong> Avoid sugary beverages like sodas and fruit juices, which can add unnecessary calories.</li>
<strong>4. Reduce Processed Foods</strong>
<li><strong>Minimize Processed Foods:</strong> Cut back on processed and sugary foods, such as candy, pastries, and fast food, which are often high in empty calories.</li>
<li><strong>Read Labels:</strong> Check food labels for hidden sugars, unhealthy fats, and excessive sodium.</li>
<strong>5. Mindful Eating</strong>
<li><strong>Eat Slowly:</strong> Take your time to eat and enjoy your food. Eating slowly can help you recognize when you’re full and prevent overeating.</li>
<li><strong>Avoid Distractions:</strong> Try to eat without distractions like TV or smartphones to focus on your meal and better gauge hunger cues.</li>
<strong>6. Plan and Prep</strong>
<li><strong>Meal Planning:</strong> Plan your meals ahead of time to ensure you have healthy options readily available and to avoid impulsive, less nutritious choices.</li>
<li><strong>Prep Ahead:</strong> Prepare meals or ingredients in advance to make it easier to stick to your healthy eating goals.</li>
<strong>7. Control Cravings</strong>
<li><strong>Healthy Snacks:</strong> Keep healthy snacks on hand, such as fruits, vegetables, or nuts, to manage cravings and avoid unhealthy options.</li>
<li><strong>Manage Stress:</strong> Find healthy ways to manage stress, such as exercise or meditation, to avoid stress-related eating.</li>
<strong>8. Balanced Eating Habits</strong>
<li><strong>Eat Regularly:</strong> Avoid skipping meals, as this can lead to overeating later. Aim for regular meals and snacks to keep your metabolism steady.</li>
<strong>9. Consult a Professional</strong>
<li><strong>Seek Guidance:</strong> Consider consulting a registered dietitian or nutritionist for personalized advice and support tailored to your specific needs and goals.</li>
        
        `;
    } else {
        suggestion = `
            <h3>Obesity (BMI: ${bmi.toFixed(1)})</h3>
            <p>Start with gentle exercises and progress gradually:</p>
            <ul>
                <li><strong>Gentle Cardio:</strong> Water aerobics, stationary cycling, or walking on a treadmill.</li>
                <li><strong>Strength Training:</strong> Chair exercises, resistance bands, light weight lifting.</li>
                <li><strong>Flexibility:</strong> Gentle yoga or stretching to enhance mobility and reduce stiffness.</li>
                <li><strong>Consult a Professional:</strong> Seek advice before starting a new exercise regimen, especially if you have health concerns.</li>
            </ul>
        `;
    }

    appendMessage(`Your BMI is ${bmi.toFixed(1)}. ${suggestion}`);
    document.getElementById('chat-form').reset();
});

function appendMessage(text, type) {
    const chatLog = document.getElementById('chat-log');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', type);
    messageDiv.innerHTML = text;
    chatLog.appendChild(messageDiv);
    chatLog.scrollTop = chatLog.scrollHeight;
}``


