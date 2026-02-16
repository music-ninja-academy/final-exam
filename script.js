// --- Banco de Datos: 100 Preguntas del Examen Ninja (VERIFICADO: 100% Contenido del Libro) ---
const allQuestions = [
    // --- DAY 1 & 2: RHYTHM & DURATION (25 Questions) ---
    { cat: "Rhythm", q: "How many beats does a Quarter Note (TA) last?", options: ["1 beat", "2 beats", "4 beats", "1/2 beat"], correct: 0 },
    { cat: "Rhythm", q: "Which note lasts for 2 beats (TA-A)?", options: ["Quarter Note", "Half Note", "Whole Note", "Eighth Note"], correct: 1 },
    { cat: "Rhythm", q: "How many beats does a Whole Note (TA-A-A-A) last?", options: ["1 beat", "2 beats", "3 beats", "4 beats"], correct: 3 },
    { cat: "Rhythm", q: "What does a Quarter Rest (Z symbol) mean?", options: ["Play loud", "Silence for 1 beat", "Play fast", "Silence for 4 beats"], correct: 1 },
    { cat: "Rhythm", q: "Which note looks like an empty circle (no stem)?", options: ["Quarter Note", "Half Note", "Whole Note", "Eighth Note"], correct: 2 },
    { cat: "Rhythm", q: "How many Quarter Notes fit into one Whole Note?", options: ["Two", "Three", "Four", "Eight"], correct: 2 },
    { cat: "Rhythm", q: "In our 4-beat box, how many beats are in a bar?", options: ["3 beats", "4 beats", "5 beats", "2 beats"], correct: 1 },
    { cat: "Rhythm", q: "Which note has a black head and a stem?", options: ["Whole Note", "Quarter Note", "Half Note", "Rest"], correct: 1 },
    { cat: "Rhythm", q: "What sound do we use for two Eighth Notes?", options: ["TA", "TA-A", "TI-TI", "SHHH"], correct: 2 },
    { cat: "Rhythm", q: "Rhythm Math: Quarter Note + Quarter Note = ?", options: ["1 beat", "2 beats", "3 beats", "4 beats"], correct: 1 },
    { cat: "Rhythm", q: "Rhythm Math: Half Note + Half Note = ?", options: ["2 beats", "3 beats", "4 beats", "6 beats"], correct: 2 },
    { cat: "Rhythm", q: "Rhythm Math: Whole Note - Quarter Note = ?", options: ["1 beat", "2 beats", "3 beats", "0 beats"], correct: 2 },
    { cat: "Rhythm", q: "Which rest looks like a lightning bolt or a 'Z'?", options: ["Quarter Rest", "Half Rest", "Whole Rest", "Eighth Rest"], correct: 0 },
    { cat: "Rhythm", q: "What happens when two Eighth Notes are together?", options: ["They get faster", "They get louder", "They hold hands with a beam", "They disappear"], correct: 2 },
    { cat: "Rhythm", q: "Which figure represents the fastest sound in our book?", options: ["Whole Note", "Half Note", "Quarter Note", "Eighth Note (TI)"], correct: 3 },
    { cat: "Rhythm", q: "Which note has an empty head AND a stem?", options: ["Quarter Note", "Half Note", "Whole Note", "Eighth Note"], correct: 1 },
    { cat: "Rhythm", q: "If you see a 'Z' (Quarter Rest), what do you do?", options: ["Clap once", "Stomp your feet", "Stay silent for 1 beat", "Shout 'Hey!'"], correct: 2 },
    { cat: "Rhythm", q: "How many Eighth Notes (TI) equal one Quarter Note (TA)?", options: ["One", "Two", "Three", "Four"], correct: 1 },
    { cat: "Rhythm", q: "Which note fills the whole 4-beat measure?", options: ["Quarter Note", "Half Note", "Whole Note", "Eighth Note"], correct: 2 },
    { cat: "Rhythm", q: "Rhythm Math: TA + TA + TA + TA = ?", options: ["2 beats", "3 beats", "4 beats", "5 beats"], correct: 2 },
    { cat: "Rhythm", q: "What is the heartbeat of music called?", options: ["The Pulse/Beat", "The Melody", "The Volume", "The Silence"], correct: 0 },
    { cat: "Rhythm", q: "Rhythm Math: Half Note (2) + Quarter Note (1) = ?", options: ["2 beats", "3 beats", "4 beats", "5 beats"], correct: 1 },
    { cat: "Rhythm", q: "Which note is the longest in our Ninja training?", options: ["Whole Note", "Half Note", "Quarter Note", "Eighth Note"], correct: 0 },
    { cat: "Rhythm", q: "Does a Stem (stick) go up or down?", options: ["Always Up", "Always Down", "It can go both ways", "It never has a stem"], correct: 2 },
    { cat: "Rhythm", q: "Rhythm Math: Whole Note (4) - Half Note (2) = ?", options: ["1 beat", "2 beats", "3 beats", "4 beats"], correct: 1 },

    // --- DAY 3 & 6: THE STAFF & CLEFS (25 Questions) ---
    { cat: "The Staff", q: "How many lines does a music staff have?", options: ["4 lines", "5 lines", "6 lines", "10 lines"], correct: 1 },
    { cat: "The Staff", q: "How many spaces are inside the staff?", options: ["3 spaces", "4 spaces", "5 spaces", "6 spaces"], correct: 1 },
    { cat: "The Staff", q: "We count lines and spaces starting from...", options: ["The Top", "The Middle", "The Bottom", "Left to Right"], correct: 2 },
    { cat: "The Clefs", q: "What is the symbol for the Upper Dojo (High Notes)?", options: ["Bass Clef", "Treble Clef", "Alto Clef", "Rhythm Clef"], correct: 1 },
    { cat: "The Clefs", q: "What is the symbol for the Basement (Low Notes)?", options: ["Treble Clef", "Bass Clef", "Tenor Clef", "Soprano Clef"], correct: 1 },
    { cat: "The Clefs", q: "The Treble Clef circles around which line?", options: ["1st Line", "2nd Line (G)", "3rd Line", "5th Line"], correct: 1 },
    { cat: "The Clefs", q: "The Bass Clef has two dots around which line?", options: ["3rd Line", "4th Line (F)", "5th Line", "2nd Line"], correct: 1 },
    { cat: "The Staff", q: "Which line is the 'Ground Floor' (Line 1)?", options: ["Top line", "Middle line", "Bottom line", "Second line"], correct: 2 },
    { cat: "The Staff", q: "Notes can live on Lines or in...", options: ["Boxes", "Spaces", "Triangles", "Circles"], correct: 1 },
    { cat: "The Staff", q: "Which Clef is usually for the Right Hand?", options: ["Bass Clef", "Treble Clef", "Percussion Clef", "Tenor Clef"], correct: 1 },
    { cat: "The Staff", q: "Which Clef is usually for the Left Hand?", options: ["Treble Clef", "Alto Clef", "Bass Clef", "Violin Clef"], correct: 2 },
    { cat: "The Staff", q: "What happens to the pitch when notes go HIGHER on the staff?", options: ["Sound gets lower", "Sound gets higher", "Sound stops", "Sound gets softer"], correct: 1 },
    { cat: "The Staff", q: "In the Bass Clef, which line is the 'F Line' (between the dots)?", options: ["1st Line", "2nd Line", "3rd Line", "4th Line"], correct: 3 },
    { cat: "The Staff", q: "In the Treble Clef, which line is the 'G Line' (inside the swirl)?", options: ["1st Line", "2nd Line", "3rd Line", "4th Line"], correct: 1 },
    { cat: "Grand Staff", q: "What connects the Treble and Bass staves together?", options: ["A rope", "A Brace/Bracket", "A bridge", "A heavy line"], correct: 1 },
    { cat: "Grand Staff", q: "Which note is the 'Magic Portal' between the two clefs?", options: ["High C", "Low C", "Middle C", "Floating C"], correct: 2 },
    { cat: "Grand Staff", q: "How is Middle C written?", options: ["On the 1st line", "In a space", "On its own tiny line", "Without a head"], correct: 2 },
    { cat: "The Staff", q: "Notes in spaces are like...", options: ["Birds flying", "Faces in windows", "Cars on the road", "Fish in the sea"], correct: 1 },
    { cat: "The Clefs", q: "Another name for the Treble Clef is...", options: ["F Clef", "G Clef", "C Clef", "H Clef"], correct: 1 },
    { cat: "The Clefs", q: "Another name for the Bass Clef is...", options: ["G Clef", "F Clef", "C Clef", "D Clef"], correct: 1 },
    { cat: "The Staff", q: "If a note is in a Space, the next note up is on a...", options: ["Space", "Line", "Rest", "Clef"], correct: 1 },
    { cat: "The Staff", q: "The note Middle C floats...", options: ["Above the Treble Staff", "Below the Bass Staff", "Between the two Staves", "On the top line"], correct: 2 },
    { cat: "Grand Staff", q: "When notes go UP the ladder (staff), they sound...", options: ["Lower", "Higher", "Softer", "Slower"], correct: 1 },
    { cat: "Grand Staff", q: "When notes go DOWN the ladder (staff), they sound...", options: ["Higher", "Lower", "Louder", "Faster"], correct: 1 },
    { cat: "Grand Staff", q: "Does Middle C belong to both hands?", options: ["Yes, it's the bridge", "No, only Right Hand", "No, only Left Hand", "Never"], correct: 0 },

    // --- DAY 4 & 5: DYNAMICS & EXPRESSION (20 Questions) ---
    { cat: "Dynamics", q: "What does 'Dynamics' mean in music?", options: ["Speed", "Volume (Loud/Soft)", "Rhythm", "Silence"], correct: 1 },
    { cat: "Dynamics", q: "What does the symbol 'p' stand for?", options: ["Power", "Piano (Soft)", "Presto", "Pause"], correct: 1 },
    { cat: "Dynamics", q: "What does the symbol 'f' stand for?", options: ["Fast", "Fun", "Forte (Loud)", "Finish"], correct: 2 },
    { cat: "Dynamics", q: "Which animal represents 'Piano' (p) in our Dojo?", options: ["Lion", "Elephant", "Mouse", "Bear"], correct: 2 },
    { cat: "Dynamics", q: "Which animal represents 'Forte' (f) in our Dojo?", options: ["Butterfly", "Lion", "Ant", "Fish"], correct: 1 },
    { cat: "Dynamics", q: "What does 'mf' (Mezzo Forte) mean?", options: ["Medium Loud", "Mega Fast", "More Fun", "Medium Soft"], correct: 0 },
    { cat: "Dynamics", q: "What does 'mp' (Mezzo Piano) mean?", options: ["Medium Power", "Medium Soft", "More Piano", "Mega Play"], correct: 1 },
    { cat: "Dynamics", q: "To play 'Piano', you should touch the keys...", options: ["With a lot of weight", "Gently and lightly", "With a fist", "Very fast"], correct: 1 },
    { cat: "Dynamics", q: "To play 'Forte', you should use...", options: ["Just your finger tips", "Arm weight and energy", "Your elbows", "No energy"], correct: 1 },
    { cat: "Tempo", q: "What does 'Tempo' mean?", options: ["Volume", "Speed of the music", "The notes used", "The instrument"], correct: 1 },
    { cat: "Tempo", q: "What does 'Adagio' mean?", options: ["Fast", "Very Fast", "Slow and calm", "Bumpy"], correct: 2 },
    { cat: "Tempo", q: "What does 'Allegro' mean?", options: ["Slow", "Fast and energetic", "Sleepy", "Sad"], correct: 1 },
    { cat: "Tempo", q: "Which animal walks at an 'Adagio' pace?", options: ["Cheetah", "Rabbit", "Turtle/Elephant", "Horse"], correct: 2 },
    { cat: "Tempo", q: "Which animal runs at an 'Allegro' pace?", options: ["Snail", "Sloth", "Cheetah/Horse", "Turtle"], correct: 2 },
    { cat: "Expression", q: "A dot above or below a note means 'Staccato'. How do you play it?", options: ["Smooth", "Short and bouncy (like hot ice)", "Long", "Loud"], correct: 1 },
    { cat: "Expression", q: "A curved line connecting different notes is 'Legato'. How do you play it?", options: ["Choppy", "Smooth and connected (like glue)", "Fast", "Silent"], correct: 1 },
    { cat: "Expression", q: "Legato means walking like...", options: ["A robot", "A kangaroo jumping", "Gliding on ice", "Running"], correct: 2 },
    { cat: "Expression", q: "Staccato means walking like...", options: ["A ghost", "Tiptoeing on hot sand", "Sliding", "Sleeping"], correct: 1 },
    { cat: "Tempo", q: "Which is faster: Adagio or Allegro?", options: ["Adagio", "Allegro", "They are the same", "Neither"], correct: 1 },
    { cat: "Dynamics", q: "Which is louder: p or f?", options: ["p", "f", "They are equal", "Depends on the day"], correct: 1 },

    // --- DAY 5 & KEYBOARD MASTERY (20 Questions) ---
    { cat: "Keyboard", q: "How are the black keys grouped?", options: ["Groups of 2 and 3", "Groups of 4 and 5", "All strictly equal", "Groups of 1 and 2"], correct: 0 },
    { cat: "Keyboard", q: "Where is the note C located?", options: ["Left of the 3 black keys", "Left of the 2 black keys", "Right of the 2 black keys", "In the middle of 3 black keys"], correct: 1 },
    { cat: "Keyboard", q: "Where is the note F located?", options: ["Left of the 3 black keys", "Right of the 3 black keys", "Left of the 2 black keys", "Middle of 2 black keys"], correct: 0 },
    { cat: "Keyboard", q: "If you go to the RIGHT on the piano, the sound gets...", options: ["Lower", "Higher", "Slower", "Darker"], correct: 1 },
    { cat: "Keyboard", q: "If you go to the LEFT on the piano, the sound gets...", options: ["Higher", "Lower", "Brighter", "Faster"], correct: 1 },
    { cat: "Keyboard", q: "The musical alphabet goes from A to...", options: ["Z", "M", "G", "H"], correct: 2 },
    { cat: "Keyboard", q: "After G, what is the next note?", options: ["H", "A", "B", "C"], correct: 1 },
    { cat: "Keyboard", q: "What is the note in the middle of the 2 black keys?", options: ["C", "D", "E", "F"], correct: 1 },
    { cat: "Keyboard", q: "What comes after E on the keyboard?", options: ["D", "F", "G", "A"], correct: 1 },
    { cat: "Keyboard", q: "What comes before C on the keyboard?", options: ["A", "B", "D", "E"], correct: 1 },
    { cat: "Keyboard", q: "Which finger is Number 1?", options: ["Pinky", "Index", "Thumb", "Middle"], correct: 2 },
    { cat: "Keyboard", q: "Which finger is Number 5?", options: ["Thumb", "Ring", "Middle", "Pinky"], correct: 3 },
    { cat: "Keyboard", q: "Middle C is closest to...", options: ["The floor", "The brand name/center", "The far right", "The pedals"], correct: 1 },
    { cat: "Keyboard", q: "Low sounds (Basement) are usually played with the...", options: ["Right Hand", "Left Hand", "Nose", "Elbow"], correct: 1 },
    { cat: "Keyboard", q: "High sounds (Upper Dojo) are usually played with the...", options: ["Left Hand", "Right Hand", "Feet", "Chin"], correct: 1 },
    { cat: "Keyboard", q: "The distance from C to the next C is called an...", options: ["Octave", "Step", "Skip", "Bridge"], correct: 0 },
    { cat: "Keyboard", q: "Which key is to the right of F?", options: ["E", "G", "A", "B"], correct: 1 },
    { cat: "Keyboard", q: "Which key is to the left of B?", options: ["C", "A", "G", "F"], correct: 1 },
    { cat: "Keyboard", q: "The musical alphabet only has how many letters?", options: ["5 letters", "7 letters", "10 letters", "26 letters"], correct: 1 },
    { cat: "Keyboard", q: "Where does the 'Treble Clef' usually live on the piano?", options: ["Left Side", "Right Side", "Under the piano", "On the pedals"], correct: 1 },

    // --- DAY 7: INTERVALS & NINJA MASTERY (10 Questions) ---
    { cat: "Intervals", q: "A Step moves from...", options: ["Line to Line", "Space to Space", "Line to next Space (Neighbor)", "Line to Space (skipping one)"], correct: 2 },
    { cat: "Intervals", q: "A Skip moves from...", options: ["Line to next Space", "Line to next Line (or Space to Space)", "Space to Line", "Same note"], correct: 1 },
    { cat: "Intervals", q: "The distance from C to E (skipping D) is a...", options: ["2nd (Step)", "3rd (Skip)", "4th", "5th"], correct: 1 },
    { cat: "Intervals", q: "The distance from C to D (next door) is a...", options: ["2nd (Step)", "3rd (Skip)", "Octave", "Unison"], correct: 0 },
    { cat: "Intervals", q: "Playing two notes at the same time is called a...", options: ["Scale", "Chord / Harmony", "Melody", "Silence"], correct: 1 },
    { cat: "Intervals", q: "Two notes on the same line with the same name are...", options: ["A 2nd", "Unison / Same", "An Octave", "A 5th"], correct: 1 },
    { cat: "Intervals", q: "A melody is like...", options: ["A sentence or story", "A random noise", "A single word", "A silence"], correct: 0 },
    { cat: "Ninja Test", q: "What is the most important tool for a Music Ninja?", options: ["The Sword", "The Ears", "The Mask", "The Shoes"], correct: 1 },
    { cat: "Ninja Test", q: "To master a song, you must practice...", options: ["Once a year", "Fast and sloppy", "Slowly and carefully", "With eyes closed only"], correct: 2 },
    { cat: "Ninja Test", q: "What defines a Black Belt Musician?", options: ["Speed only", "Volume only", "Control and Expression", "Playing random notes"], correct: 2 }
];

// --- Lógica del Juego Actualizada (Nivel 1st Dan) ---
let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
const PASSING_SCORE = 16; // Necesita 16/20 (80%) para aprobar

function startQuiz() {
    if (localStorage.getItem("diplomaClaimed") === "true") {
        alert("You have already claimed your diploma! Check your email inbox.");
        return; 
    }
    
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    
    // Barajar MEJORADO y elegir 20 preguntas
    selectedQuestions = allQuestions.sort(() => Math.random() - 0.5).slice(0, 20);
    currentQuestionIndex = 0;
    score = 0;
    
    showQuestion();
}

function showQuestion() {
    const q = selectedQuestions[currentQuestionIndex];
    const optionsContainer = document.getElementById('options-container');
    
    // Actualizar texto y UI
    document.getElementById('question-text').innerText = q.q;
    document.getElementById('category-display').innerText = `Ninja Challenge: ${q.cat}`;
    document.getElementById('progress').style.width = `${((currentQuestionIndex) / 20) * 100}%`;
    
    // Limpiar y generar 4 botones de opciones
    optionsContainer.innerHTML = '';
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.className = 'btn-option';
        // Aseguramos que el CSS de tu web permita 4 botones (display grid o flex column va bien)
        btn.onclick = () => handleAnswer(index);
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(selectedIndex) {
    if (selectedIndex === selectedQuestions[currentQuestionIndex].correct) {
        score++;
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < 20) { // Ahora son 20 preguntas
        showQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    document.getElementById('quiz-container').classList.add('hidden');
    
    // Feedback mejorado según el puntaje
    if (score >= PASSING_SCORE) {
        document.getElementById('form-diploma').classList.remove('hidden');
    } else {
        let msg = `Score: ${score}/20. `;
        if(score > 10) msg += "Close call, Ninja! ";
        else msg += "More training is needed. ";
        msg += "You need at least 16 correct answers to earn the Black Belt 1st Dan.";
        
        alert(msg);
        location.reload(); // Reiniciar
    }
}

const FORMSPREE_ID = "xlgnezyo";

const legalTexts = {
    privacy: `
        <h2>Privacy Policy</h2>
        <p><strong>Information Collection:</strong> To issue your Music Ninja Academy diploma, we only collect your name and email address. We do not store any other personal or financial data.</p>
        <p><strong>Data Usage:</strong> Your name is used specifically for the diploma certificate, and your email is used to deliver the PDF. We do not share your information with third parties.</p>
    `,
    terms: `
        <h2>Terms of Service</h2>
        <p><strong>Educational Content:</strong> All lessons, challenges, and materials within the Music Ninja Academy are for personal, non-commercial use only. Redistribution of our content is prohibited.</p>
        <p><strong>Symbolic Recognition:</strong> The diploma granted upon completion is a symbolic recognition of your progress. It does not constitute an official academic degree or professional certification.</p>
        <p><strong>User Conduct:</strong> Users are expected to interact with our platform respectfully. Any attempt to exploit or disrupt the academy services will result in access termination.</p>
    `,
    support: `
        <h2>Support Center</h2>
        <p>Need help? Send us a message and we'll get back to you.</p>
        <form id="contact-form" onsubmit="handleSupportSubmit(event)">
            <input type="text" name="name" id="sup-name" placeholder="Your Name" required style="width:100%; margin-bottom:10px; padding:10px; border-radius:5px; border:1px solid #444; background:#222; color:#fff;">
            <input type="email" name="email" id="sup-email" placeholder="Your Email" required style="width:100%; margin-bottom:10px; padding:10px; border-radius:5px; border:1px solid #444; background:#222; color:#fff;">
            <textarea name="message" id="sup-message" placeholder="How can we help?" required style="width:100%; margin-bottom:10px; padding:10px; border-radius:5px; border:1px solid #444; background:#222; color:#fff; height:100px;"></textarea>
            <button type="submit" id="sup-submit-btn" class="btn-primary" style="width:100%;">Send Message</button>
        </form>
        <p id="sup-status" style="margin-top:10px; font-size:0.8rem;"></p>
    `
};

// Le ponemos 2 min de cooldown entre cada envío de mail

async function handleSupportSubmit(event) {
    event.preventDefault();
    
    const status = document.getElementById('sup-status');
    const btn = document.getElementById('sup-submit-btn');
    const lastSent = localStorage.getItem('last_support_sent');
    const now = Date.now();
    const cooldown = 2 * 60 * 1000; // 2 minutos

    // 1. Chequeo de Cooldown
    if (lastSent && (now - lastSent < cooldown)) {
        const remaining = Math.ceil((cooldown - (now - lastSent)) / 1000);
        status.style.color = "#ff4444";
        status.innerText = "Ninja, slow down! Wait " + remaining + " seconds.";
        return;
    }

    // 2. Preparar datos
    const formData = new FormData(event.target);
    status.style.color = "#ffd700";
    status.innerText = "Sending to the masters...";
    btn.disabled = true;

    // 3. Envío Real a Formspree vía Fetch (AJAX)
    try {
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            status.style.color = "#00ff00";
            status.innerText = "Message sent! Check your inbox soon.";
            localStorage.setItem('last_support_sent', Date.now());
            event.target.reset();
        } else {
            throw new Error();
        }
    } catch (error) {
        status.style.color = "#ff4444";
        status.innerText = "Oops! Something went wrong. Try again later.";
    } finally {
        btn.disabled = false;
    }
}

// Fin del cooldown

function openModal(type) {
    document.getElementById('modal-body').innerHTML = legalTexts[type];
    document.getElementById('legal-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('legal-modal').style.display = 'none';
}

// Cerrar si hacen clic fuera del cuadro
window.onclick = function(event) {
    let modal = document.getElementById('legal-modal');
    if (event.target == modal) {
        closeModal();
    }
}

// --- Manejo del Formulario Final ---
document.getElementById('diploma-request').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // 1. Capturamos los datos y el botón
    const name = document.getElementById('student-name').value;
    const email = document.getElementById('student-email').value;
    const btn = e.target.querySelector('button'); // El botón de envío
    
    // URL de tu Webhook de Make.com (¡Pegá la tuya acá!)
    const MAKE_WEBHOOK_URL = "https://hook.us2.make.com/azcdvrasiy9jjogf6rey8jbtcv9xm4dr";

    // 2. Deshabilitamos el botón para evitar que le den mil clics
    btn.disabled = true;
    btn.innerText = "Sending Diploma...";

    try {
        // 3. Enviamos los datos a Make.com
        const response = await fetch(MAKE_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                student_name: name,
                student_email: email,
                exam_score: score // Usamos la variable global 'score' que ya tenés
            })
        });

        if (response.ok) {
            // 4. Éxito: Guardamos en el navegador que ya lo pidió y avisamos
            localStorage.setItem("diplomaClaimed", "true");
            alert(`Congratulations ${name}! Your Master Scroll is being prepared. Check your email ${email} in a few minutes.`);
            btn.innerText = "Diploma Requested!";
        } else {
            throw new Error("Server error");
        }
    } catch (error) {
        // 5. Error: Rehabilitamos el botón para que pruebe de nuevo
        console.error("Error sending to Make:", error);
        alert("Oops! Something went wrong. Please try again.");
        btn.disabled = false;
        btn.innerText = "Mail My Diploma";
    }
});
