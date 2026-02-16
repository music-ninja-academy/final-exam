// --- Banco de Datos: 50 Preguntas del Examen Ninja ---
const allQuestions = [
    // Categoría 1: Las Notas [cite: 542-582]
    { cat: "The Notes", q: "How many lines are on a staff?", options: ["4 lines", "5 lines", "6 lines"], correct: 1 },
    { cat: "The Notes", q: "What symbol is at the start of the staff for high notes?", options: ["Bass Clef", "Treble Clef", "Repeat Sign"], correct: 1 },
    { cat: "The Notes", q: "On which line does the note G live in Treble Clef?", options: ["1st line", "2nd line", "5th line"], correct: 1 },
    { cat: "The Notes", q: "What note is found in the 1st space (bottom)?", options: ["F", "A", "C"], correct: 0 },
    { cat: "The Notes", q: "What note has a ledger line (hat) below the staff?", options: ["D", "G", "Middle C"], correct: 2 },
    { cat: "The Notes", q: "If a note is on the 3rd line (middle), what is it?", options: ["G", "B", "D"], correct: 1 },
    { cat: "The Notes", q: "What note lives in the 2nd space?", options: ["A", "C", "E"], correct: 0 },
    { cat: "The Notes", q: "What note is on the 1st line (bottom)?", options: ["E", "G", "F"], correct: 0 },
    { cat: "The Notes", q: "How do we count the lines of the staff?", options: ["Top to bottom", "Bottom to top", "No order"], correct: 1 },
    { cat: "The Notes", q: "Which note 'hangs' right under the 1st line?", options: ["D", "C", "E"], correct: 0 },

    // Categoría 2: El Ritmo [cite: 584-624]
    { cat: "Rhythm", q: "How long does a Quarter Note (TA) last?", options: ["1 beat", "2 beats", "4 beats"], correct: 0 },
    { cat: "Rhythm", q: "How long does a Half Note (TA-A) last?", options: ["1 beat", "2 beats", "3 beats"], correct: 1 },
    { cat: "Rhythm", q: "Which figure lasts 4 beats?", options: ["Quarter Note", "Eighth Note", "Whole Note"], correct: 2 },
    { cat: "Rhythm", q: "How many eighth notes (TI) equal a Quarter Note?", options: ["2", "3", "4"], correct: 0 },
    { cat: "Rhythm", q: "What syllable do we use for two eighth notes?", options: ["TA-A", "TI-TI", "SHHH"], correct: 1 },
    { cat: "Rhythm", q: "What does a lightning bolt or 'Z' symbol mean?", options: ["Play loud", "Quarter Rest (Silence)", "Repeat"], correct: 1 },
    { cat: "Rhythm", q: "In 4/4 time, how many beats fit in the box?", options: ["3 beats", "4 beats", "2 beats"], correct: 1 },
    { cat: "Rhythm", q: "Which sum equals 4 beats?", options: ["Half + Half", "Quarter + Quarter", "Eighth + Quarter"], correct: 0 },
    { cat: "Rhythm", q: "Which figure runs the fastest?", options: ["Quarter", "Half", "Eighth"], correct: 2 },
    { cat: "Rhythm", q: "What is the line called that joins two eighth notes?", options: ["Beam / Connecting Bar", "String", "Staff"], correct: 0 },

    // Categoría 3: El Teclado [cite: 626-666]
    { cat: "Keyboard", q: "How do we find Middle C on the piano?", options: ["Left of 3 black keys", "Left of 2 black keys", "Any white key"], correct: 1 },
    { cat: "Keyboard", q: "Black keys are grouped in...", options: ["Groups of 2 and 3", "Groups of 1 and 2", "All equal"], correct: 0 },
    { cat: "Keyboard", q: "Playing towards the right of the piano makes the sound...", options: ["Lower", "Higher", "Quieter"], correct: 1 },
    { cat: "Keyboard", q: "Which note is 'trapped' between the 2 black keys?", options: ["C", "D", "E"], correct: 1 },
    { cat: "Keyboard", q: "Which note is to the left of the 3 black keys?", options: ["F", "G", "A"], correct: 0 },
    { cat: "Keyboard", q: "What color are keys with sharps or flats?", options: ["White", "Black", "Red"], correct: 1 },
    { cat: "Keyboard", q: "After the note B, which note starts again?", options: ["A", "C", "E"], correct: 1 },
    { cat: "Keyboard", q: "Which right-hand finger starts on Middle C?", options: ["Finger 5 (Pinky)", "Finger 1 (Thumb)", "Finger 3 (Middle)"], correct: 1 },
    { cat: "Keyboard", q: "The white key to the right of C is...", options: ["D", "B", "E"], correct: 0 },
    { cat: "Keyboard", q: "Where are the low sounds (like a bear)?", options: ["Left", "Right", "Middle"], correct: 0 },

    // Categoría 4: Intervalos [cite: 668-708]
    { cat: "Intervals", q: "C to D (neighboring keys) is a...", options: ["Second (2nd)", "Third (3rd)", "Fifth (5th)"], correct: 0 },
    { cat: "Intervals", q: "C to E (skipping one note) is a...", options: ["Second", "Third (3rd)", "Octave"], correct: 1 },
    { cat: "Intervals", q: "How does a Third look on the staff?", options: ["Line to next Line", "Line to Space neighbor", "Very far"], correct: 0 },
    { cat: "Intervals", q: "The 'big leap' from C to G is a...", options: ["Fourth", "Fifth (5th)", "Sixth"], correct: 1 },
    { cat: "Intervals", q: "A melody moving by steps (C-D-E) is...", options: ["Seconds", "Fifth leaps", "Octaves"], correct: 0 },
    { cat: "Intervals", q: "The interval C to F (1-2-3-4) is a...", options: ["Third", "Fourth", "Fifth"], correct: 1 },
    { cat: "Intervals", q: "Which interval is 'jumping a puddle'?", options: ["Second", "Third", "Unison"], correct: 1 },
    { cat: "Intervals", q: "Two notes on the same line with the same name is a...", options: ["Unison", "Second", "Chord"], correct: 0 },
    { cat: "Intervals", q: "What is the distance between E and G?", options: ["Second", "Third", "Fourth"], correct: 1 },
    { cat: "Intervals", q: "What is the distance between D and E?", options: ["Second", "Third", "Fifth"], correct: 0 },

    // Categoría 5: Dinámicas [cite: 710-750]
    { cat: "Feeling", q: "What does 'f' under a note mean?", options: ["Fine", "Forte (Loud)", "Fantastic"], correct: 1 },
    { cat: "Feeling", q: "What does 'p' mean?", options: ["Piano (Soft)", "Small", "Pause"], correct: 0 },
    { cat: "Feeling", q: "What does 'mf' mean?", options: ["Very Loud", "Mezzoforte (Medium)", "Ugly"], correct: 1 },
    { cat: "Feeling", q: "A dot above a note (Staccato) means it sounds...", options: ["Long and sticky", "Short and bouncy", "Very loud"], correct: 1 },
    { cat: "Feeling", q: "A curved line joining notes (Legato) means...", options: ["Detached", "Smooth and connected", "Fast"], correct: 1 },
    { cat: "Feeling", q: "Which animal represents Forte?", options: ["Mouse", "Lion", "Ant"], correct: 1 },
    { cat: "Feeling", q: "Which animal represents Piano (soft)?", options: ["Elephant", "Tiny Mouse", "Dog"], correct: 1 },
    { cat: "Feeling", q: "Staccato feels like...", options: ["Walking on hot ice", "Swimming in honey", "Sleeping"], correct: 0 },
    { cat: "Feeling", q: "To play Piano (p), you...", options: ["Hit hard", "Stroke keys gently", "Play nothing"], correct: 1 },
    { cat: "Feeling", q: "To play Forte (f), you...", options: ["Use weight and energy", "Use your nail", "Play fast"], correct: 0 }
];

// --- Lógica del Juego ---
let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    if (localStorage.getItem("diplomaClaimed") === "true") {
        alert("You have already claimed your diploma! Check your email inbox.");
        return; // No deja empezar el quiz
    }
    
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    
    // Barajar y elegir 10 preguntas al azar
    selectedQuestions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
    showQuestion();
}

function showQuestion() {
    const q = selectedQuestions[currentQuestionIndex];
    const optionsContainer = document.getElementById('options-container');
    
    // Actualizar texto y UI
    document.getElementById('question-text').innerText = q.q;
    document.getElementById('category-display').innerText = q.cat;
    document.getElementById('progress').style.width = `${(currentQuestionIndex / 10) * 100}%`;
    
    // Limpiar y generar botones de opciones
    optionsContainer.innerHTML = '';
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.className = 'btn-option';
        btn.onclick = () => handleAnswer(index);
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(selectedIndex) {
    if (selectedIndex === selectedQuestions[currentQuestionIndex].correct) {
        score++;
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < 10) {
        showQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    document.getElementById('quiz-container').classList.add('hidden');
    
    if (score >= 8) {
        document.getElementById('form-diploma').classList.remove('hidden');
    } else {
        alert(`Score: ${score}/10. You need at least 8 correct answers to graduate. Keep practicing!`);
        location.reload(); // Reiniciar para intentarlo de nuevo
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
