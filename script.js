// --- Banco de Datos: 100 Preguntas del Examen Ninja (Nivel 1st Dan) ---
const allQuestions = [
    // --- DAY 1 & 2: RHYTHM & DURATION (25 Questions) ---
    { cat: "Rhythm", q: "How many beats does a Quarter Note (TA) last?", options: ["1 beat", "2 beats", "4 beats", "1/2 beat"], correct: 0 },
    { cat: "Rhythm", q: "Which note lasts for 2 beats?", options: ["Quarter Note", "Half Note", "Whole Note", "Eighth Note"], correct: 1 },
    { cat: "Rhythm", q: "How many beats does a Whole Note (TA-A-A-A) last?", options: ["1 beat", "2 beats", "3 beats", "4 beats"], correct: 3 },
    { cat: "Rhythm", q: "What does a Quarter Rest (Z symbol) mean?", options: ["Play loud", "Silence for 1 beat", "Play fast", "Silence for 4 beats"], correct: 1 },
    { cat: "Rhythm", q: "Which note looks like an empty circle?", options: ["Quarter Note", "Half Note", "Whole Note", "Eighth Note"], correct: 2 },
    { cat: "Rhythm", q: "How many Quarter Notes fit into one Whole Note?", options: ["Two", "Three", "Four", "Eight"], correct: 2 },
    { cat: "Rhythm", q: "If the Time Signature is 4/4, how many beats are in a bar?", options: ["3 beats", "4 beats", "5 beats", "2 beats"], correct: 1 },
    { cat: "Rhythm", q: "Which note has a stem (stick) but no flag?", options: ["Whole Note", "Quarter Note", "Eighth Note", "Sixteenth Note"], correct: 1 },
    { cat: "Rhythm", q: "What do we say for two Eighth Notes?", options: ["TA", "TA-A", "TI-TI", "SHHH"], correct: 2 },
    { cat: "Rhythm", q: "Rhythm Math: Quarter Note + Quarter Note = ?", options: ["1 beat", "2 beats", "3 beats", "4 beats"], correct: 1 },
    { cat: "Rhythm", q: "Rhythm Math: Half Note + Half Note = ?", options: ["2 beats", "3 beats", "4 beats", "6 beats"], correct: 2 },
    { cat: "Rhythm", q: "Rhythm Math: Whole Note - Quarter Note = ?", options: ["1 beat", "2 beats", "3 beats", "0 beats"], correct: 2 },
    { cat: "Rhythm", q: "Which rest looks like a heavy hat used by a magician?", options: ["Quarter Rest", "Half Rest", "Whole Rest", "Eighth Rest"], correct: 1 },
    { cat: "Rhythm", q: "What happens when two Eighth Notes hold hands?", options: ["They become faster", "They become louder", "They share a beam", "They stop playing"], correct: 2 },
    { cat: "Rhythm", q: "Which is the fastest note in our Dojo?", options: ["Whole Note", "Half Note", "Quarter Note", "Eighth Note"], correct: 3 },
    { cat: "Rhythm", q: "A dot adds half the value to a note. How long is a Dotted Half Note?", options: ["2 beats", "3 beats", "4 beats", "1 beat"], correct: 1 },
    { cat: "Rhythm", q: "If you see a 'Z' (Quarter Rest), what do you do?", options: ["Clap once", "Stomp your feet", "Stay silent for 1 beat", "Shout 'Hey!'"], correct: 2 },
    { cat: "Rhythm", q: "How many Eighth Notes equal one Quarter Note?", options: ["One", "Two", "Three", "Four"], correct: 1 },
    { cat: "Rhythm", q: "Which note is the 'King of the Bar' taking up all 4 beats?", options: ["Quarter Note", "Half Note", "Whole Note", "Eighth Note"], correct: 2 },
    { cat: "Rhythm", q: "In 3/4 time, how many beats are in a measure?", options: ["Three", "Four", "Two", "Six"], correct: 0 },
    { cat: "Rhythm", q: "What represents a heartbeat in music?", options: ["The Pulse", "The Melody", "The Volume", "The Silence"], correct: 0 },
    { cat: "Rhythm", q: "Which symbol tells you the end of a song?", options: ["Repeat Sign", "Double Bar Line", "Treble Clef", "Forte"], correct: 1 },
    { cat: "Rhythm", q: "What does a Repeat Sign look like?", options: ["Two thin lines", "One thick line", "Double bar with two dots", "A zig-zag line"], correct: 2 },
    { cat: "Rhythm", q: "Rhythm Math: Quarter + Quarter + Half = ?", options: ["2 beats", "3 beats", "4 beats", "5 beats"], correct: 2 },
    { cat: "Rhythm", q: "Which note has an empty head and a stem?", options: ["Whole Note", "Half Note", "Quarter Note", "Eighth Note"], correct: 1 },

    // --- DAY 3 & 6: THE STAFF & CLEFS (25 Questions) ---
    { cat: "The Staff", q: "How many lines does a music staff have?", options: ["4 lines", "5 lines", "6 lines", "10 lines"], correct: 1 },
    { cat: "The Staff", q: "How many spaces are inside the staff?", options: ["3 spaces", "4 spaces", "5 spaces", "6 spaces"], correct: 1 },
    { cat: "The Staff", q: "We count lines and spaces starting from...", options: ["The Top", "The Middle", "The Bottom", "Left to Right"], correct: 2 },
    { cat: "The Clefs", q: "What is the symbol for the Upper Dojo (High Notes)?", options: ["Bass Clef", "Treble Clef", "Alto Clef", "Rhythm Clef"], correct: 1 },
    { cat: "The Clefs", q: "What is the symbol for the Basement (Low Notes)?", options: ["Treble Clef", "Bass Clef", "Tenor Clef", "Soprano Clef"], correct: 1 },
    { cat: "The Clefs", q: "The Treble Clef circles around which line?", options: ["1st Line", "2nd Line (G)", "3rd Line", "5th Line"], correct: 1 },
    { cat: "The Clefs", q: "The Bass Clef has two dots around which line?", options: ["3rd Line", "4th Line (F)", "5th Line", "2nd Line"], correct: 1 },
    { cat: "The Staff", q: "What is the name of the note on the 1st Line of Treble Clef?", options: ["E", "G", "B", "D"], correct: 0 },
    { cat: "The Staff", q: "What is the name of the note in the 1st Space of Treble Clef?", options: ["F", "A", "C", "E"], correct: 0 },
    { cat: "The Staff", q: "Which note sits on top of the Treble Staff (above the 5th line)?", options: ["F", "G", "A", "C"], correct: 1 },
    { cat: "The Staff", q: "What word helps us remember the Treble Clef spaces?", options: ["FACE", "ACEG", "EGBDF", "GBDFA"], correct: 0 },
    { cat: "The Staff", q: "What phrase helps us remember the Treble Clef lines?", options: ["All Cows Eat Grass", "Every Good Boy Deserves Fudge", "Good Boys Do Fine Always", "Great Big Dogs Fight Animals"], correct: 1 },
    { cat: "The Staff", q: "In the Bass Clef, what note is on the 5th (Top) Line?", options: ["G", "A", "B", "F"], correct: 1 },
    { cat: "The Staff", q: "Which note lives in the 'Basement' (Bass Clef) 2nd space?", options: ["A", "C", "E", "G"], correct: 1 },
    { cat: "Grand Staff", q: "What connects the Treble and Bass staves together?", options: ["A rope", "A Brace", "A bridge", "A heavy line"], correct: 1 },
    { cat: "Grand Staff", q: "Which note is the 'Magic Portal' between the two clefs?", options: ["High C", "Low C", "Middle C", "Floating C"], correct: 2 },
    { cat: "Grand Staff", q: "How is Middle C written?", options: ["On the 1st line", "In a space", "On a Ledger Line", "Without a head"], correct: 2 },
    { cat: "The Staff", q: "What is a Ledger Line?", options: ["A very long line", "A tiny line for extra notes", "A curved line", "A double bar"], correct: 1 },
    { cat: "The Clefs", q: "Another name for the Treble Clef is...", options: ["F Clef", "G Clef", "C Clef", "H Clef"], correct: 1 },
    { cat: "The Clefs", q: "Another name for the Bass Clef is...", options: ["G Clef", "F Clef", "C Clef", "D Clef"], correct: 1 },
    { cat: "The Staff", q: "The note B in Treble Clef is on the...", options: ["1st line", "2nd line", "3rd line", "Middle line"], correct: 2 },
    { cat: "The Staff", q: "The note D in Treble Clef hangs...", options: ["Above the staff", "Below the 1st line", "On the 4th line", "Inside the G clef"], correct: 1 },
    { cat: "Grand Staff", q: "When notes go UP on the staff, the pitch gets...", options: ["Lower", "Higher", "Softer", "Slower"], correct: 1 },
    { cat: "Grand Staff", q: "When notes go DOWN on the staff, the pitch gets...", options: ["Higher", "Lower", "Louder", "Faster"], correct: 1 },
    { cat: "Grand Staff", q: "Can Middle C be written in both Clefs?", options: ["Yes, using ledger lines", "No, only Treble", "No, only Bass", "Never"], correct: 0 },

    // --- DAY 4 & 5: DYNAMICS & EXPRESSION (20 Questions) ---
    { cat: "Dynamics", q: "What does 'Dynamics' mean in music?", options: ["Speed", "Volume (Loud/Soft)", "Rhythm", "Silence"], correct: 1 },
    { cat: "Dynamics", q: "What does the symbol 'p' stand for?", options: ["Power", "Piano (Soft)", "Presto", "Pause"], correct: 1 },
    { cat: "Dynamics", q: "What does the symbol 'f' stand for?", options: ["Fast", "Fun", "Forte (Loud)", "Finish"], correct: 2 },
    { cat: "Dynamics", q: "Which animal represents 'Piano' (p)?", options: ["Lion", "Elephant", "Mouse", "Bear"], correct: 2 },
    { cat: "Dynamics", q: "Which animal represents 'Forte' (f)?", options: ["Butterfly", "Lion", "Ant", "Fish"], correct: 1 },
    { cat: "Dynamics", q: "What does 'mf' (Mezzo Forte) mean?", options: ["Medium Loud", "Mega Fast", "More Fun", "Medium Soft"], correct: 0 },
    { cat: "Dynamics", q: "What does 'mp' (Mezzo Piano) mean?", options: ["Medium Power", "Medium Soft", "More Piano", "Mega Play"], correct: 1 },
    { cat: "Dynamics", q: "If you see a 'crescendo' (<), you should...", options: ["Get softer", "Get louder", "Stop playing", "Speed up"], correct: 1 },
    { cat: "Dynamics", q: "If you see a 'diminuendo' (>), you should...", options: ["Get louder", "Get softer", "Slow down", "Jump"], correct: 1 },
    { cat: "Tempo", q: "What does 'Tempo' mean?", options: ["Volume", "Speed of the music", "The notes used", "The instrument"], correct: 1 },
    { cat: "Tempo", q: "What does 'Adagio' mean?", options: ["Fast", "Very Fast", "Slow and calm", "Bumpy"], correct: 2 },
    { cat: "Tempo", q: "What does 'Allegro' mean?", options: ["Slow", "Fast and energetic", "Sleepy", "Sad"], correct: 1 },
    { cat: "Tempo", q: "Which animal walks at an 'Adagio' pace?", options: ["Cheetah", "Rabbit", "Turtle", "Horse"], correct: 2 },
    { cat: "Tempo", q: "Which animal runs at an 'Allegro' pace?", options: ["Snail", "Sloth", "Cheetah", "Turtle"], correct: 2 },
    { cat: "Expression", q: "A dot above or below a note means 'Staccato'. How do you play it?", options: ["Smooth", "Short and bouncy", "Long", "Loud"], correct: 1 },
    { cat: "Expression", q: "A curved line connecting different notes is 'Legato'. How do you play it?", options: ["Choppy", "Smooth and connected", "Fast", "Silent"], correct: 1 },
    { cat: "Expression", q: "A curved line connecting the SAME note is a...", options: ["Slur", "Tie", "Bridge", "Skip"], correct: 1 },
    { cat: "Expression", q: "What does an Accent (>) sign mean?", options: ["Play softer", "Play that note stronger", "Play faster", "Play slower"], correct: 1 },
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
    { cat: "Keyboard", q: "A 'Sharp' (#) means play the key to the...", options: ["Left", "Right (Higher)", "Bottom", "Top"], correct: 1 },
    { cat: "Keyboard", q: "A 'Flat' (b) means play the key to the...", options: ["Right", "Left (Lower)", "Middle", "Back"], correct: 1 },
    { cat: "Keyboard", q: "Which key is to the right of F?", options: ["E", "G", "A", "B"], correct: 1 },
    { cat: "Keyboard", q: "Which key is to the left of B?", options: ["C", "A", "G", "F"], correct: 1 },

    // --- DAY 7: INTERVALS & NINJA MASTERY (10 Questions) ---
    { cat: "Intervals", q: "A Step moves from...", options: ["Line to Line", "Space to Space", "Line to next Space", "Line to Space (skipping one)"], correct: 2 },
    { cat: "Intervals", q: "A Skip moves from...", options: ["Line to next Space", "Line to next Line", "Space to Line", "Same note"], correct: 1 },
    { cat: "Intervals", q: "The distance from C to E (skipping D) is a...", options: ["2nd", "3rd", "4th", "5th"], correct: 1 },
    { cat: "Intervals", q: "The distance from C to D (next door) is a...", options: ["2nd", "3rd", "Octave", "Unison"], correct: 0 },
    { cat: "Intervals", q: "Playing two notes at the same time is called a...", options: ["Scale", "Chord / Harmony", "Melody", "Silence"], correct: 1 },
    { cat: "Intervals", q: "Two notes on the same line with the same name are...", options: ["A 2nd", "Unison", "An Octave", "A 5th"], correct: 1 },
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
