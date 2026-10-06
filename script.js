/* ===== QUESTION BANK: [question, [options], correctIndex] ===== */
const BANK = {
  python: [
    ["Which function prints output to the screen in Python?", ["echo()", "print()", "console.log()", "write()"], 1],
    ["Which keyword is used to define a function?", ["def", "function", "func", "define"], 0],
    ["What is the type of the value 3.14?", ["int", "str", "float", "decimal"], 2],
    ["Which of these data types is immutable?", ["list", "dict", "set", "tuple"], 3],
    ["Which symbol starts a single-line comment?", ["//", "#", "/*", "--"], 1],
    ["Which function returns the number of items in a list?", ["size()", "count()", "len()", "length()"], 2],
    ["Which list method adds an item to the end?", ["append()", "add()", "push()", "insert_end()"], 0],
    ["What does 3 ** 2 evaluate to?", ["6", "5", "32", "9"], 3],
    ["Which keyword starts a loop over a sequence?", ["foreach", "for", "loop", "each"], 1],
    ["What does the // operator do?", ["Float division", "Modulus", "Floor division", "Exponent"], 2],
    ["Which collection stores key-value pairs?", ["dict", "list", "tuple", "set"], 0],
    ["Which keyword is used for an 'else if' branch?", ["elseif", "else if", "elsif", "elif"], 3],
    ["What does range(3) generate?", ["1, 2, 3", "0, 1, 2", "0, 1, 2, 3", "1, 2"], 1],
    ["Which block handles an exception?", ["catch", "rescue", "except", "handle"], 2],
    ["Which function converts the string \"42\" to an integer?", ["int()", "str()", "num()", "float()"], 0],
    ["What is the output of \"Hi\" * 3?", ["Hi3", "Error", "Hi Hi Hi", "HiHiHi"], 3],
    ["Which keyword brings a module into your program?", ["include", "import", "using", "require"], 1],
    ["What does len(\"Python\") return?", ["5", "7", "6", "4"], 2],
    ["Which expression creates an empty dictionary?", ["[]", "()", "{}", "dict[]"], 2],
    ["Which statement skips to the next loop iteration?", ["break", "pass", "skip", "continue"], 3]
  ],
  html: [
    ["What does HTML stand for?", ["Hyper Tool Markup Language", "Hyper Text Markup Language", "High Text Machine Language", "Home Text Markup Level"], 1],
    ["Which tag creates the largest heading?", ["<h6>", "<head>", "<h1>", "<heading>"], 2],
    ["Which tag creates a hyperlink?", ["<a>", "<link>", "<href>", "<url>"], 0],
    ["Which attribute holds the destination of a link?", ["src", "href", "link", "target"], 1],
    ["Which tag displays an image?", ["<image>", "<pic>", "<src>", "<img>"], 3],
    ["Which tag inserts a line break?", ["<br>", "<lb>", "<break>", "<nl>"], 0],
    ["Which tag creates an unordered list?", ["<ol>", "<list>", "<ul>", "<li>"], 2],
    ["Which attribute provides alternative text for an image?", ["title", "alt", "caption", "name"], 1],
    ["Which tag defines a table row?", ["<td>", "<th>", "<row>", "<tr>"], 3],
    ["What does <!DOCTYPE html> declare?", ["A CSS file", "A script", "The document is HTML5", "A comment"], 2],
    ["Which semantic tag is meant for navigation links?", ["<nav>", "<menu>", "<links>", "<navigate>"], 0],
    ["Which input type hides the characters typed?", ["hidden", "secret", "text", "password"], 3],
    ["Which attribute opens a link in a new tab?", ["target=\"_blank\"", "new=\"tab\"", "open=\"new\"", "href=\"_new\""], 0],
    ["Which tag sets the title shown on the browser tab?", ["<header>", "<title>", "<meta>", "<h1>"], 1],
    ["Which tag creates an ordered (numbered) list?", ["<ul>", "<nl>", "<ol>", "<dl>"], 2],
    ["Which form attribute sets where the data is sent?", ["method", "target", "send", "action"], 3],
    ["Which attribute makes an input field mandatory?", ["required", "must", "needed", "validate"], 0],
    ["Which element contains metadata such as <title> and <meta>?", ["<body>", "<head>", "<header>", "<top>"], 1],
    ["Which semantic tag represents the bottom section of a page?", ["<bottom>", "<end>", "<footer>", "<base>"], 2],
    ["Which tag embeds a video file?", ["<movie>", "<media>", "<embedvideo>", "<video>"], 3]
  ],
  css: [
    ["What does CSS stand for?", ["Cascading Style Sheets", "Computer Style System", "Creative Style Syntax", "Colorful Style Sheets"], 0],
    ["Which property changes the text color?", ["font-color", "text-color", "color", "foreground"], 2],
    ["Which symbol selects a class?", ["#", ".", "*", "&"], 1],
    ["Which symbol selects an id?", ["#", ".", "@", "$"], 0],
    ["Which property sets the background color?", ["bgcolor", "color-background", "background-color", "back-color"], 2],
    ["Which property changes the text size?", ["text-size", "font-size", "size", "font-style"], 1],
    ["Which property adds space outside an element's border?", ["padding", "spacing", "gap", "margin"], 3],
    ["Which property adds space inside an element's border?", ["padding", "margin", "inset", "border-space"], 0],
    ["Which declaration turns an element into a flex container?", ["flex: on", "display: flex", "layout: flex", "position: flex"], 1],
    ["Which property rounds the corners of an element?", ["corner-radius", "round", "border-radius", "border-curve"], 2],
    ["Which declaration hides an element but keeps its space?", ["display: none", "hidden: true", "opacity: none", "visibility: hidden"], 3],
    ["What is the default value of the position property?", ["static", "relative", "absolute", "fixed"], 0],
    ["Which property centres flex items along the main axis?", ["align-items: center", "justify-content: center", "text-align: center", "flex-center: true"], 1],
    ["Which unit is relative to the root font size?", ["em", "px", "rem", "pt"], 2],
    ["Which pseudo-class applies when the mouse is over an element?", [":active", ":focus", ":over", ":hover"], 3],
    ["Which property controls the stacking order of elements?", ["z-index", "layer", "stack", "order-index"], 0],
    ["What does box-sizing: border-box do?", ["Removes the border", "Includes padding and border in the width", "Adds a margin", "Makes the box square"], 1],
    ["Which declaration creates a two-dimensional layout grid?", ["display: table", "display: columns", "display: grid", "display: matrix"], 2],
    ["Which property makes text bold?", ["font-weight", "text-bold", "font-style", "bold"], 0],
    ["Which rule is used to build responsive layouts?", ["@import", "@keyframes", "@font-face", "@media"], 3]
  ],
  javascript: [
    ["Which keyword declares a constant?", ["var", "let", "const", "fixed"], 2],
    ["Which method prints to the browser console?", ["console.log()", "print()", "echo()", "log.console()"], 0],
    ["Which operator checks strict equality?", ["=", "==", "===", "!=="], 2],
    ["Which array method adds an item to the end?", ["add()", "append()", "insert()", "push()"], 3],
    ["What does typeof \"hello\" return?", ["\"text\"", "\"string\"", "\"char\"", "\"word\""], 1],
    ["Which event fires when an element is clicked?", ["onpress", "onhit", "onclick", "ontouch"], 2],
    ["Which method selects an element by its id?", ["document.getElementById()", "document.selectId()", "document.findId()", "document.id()"], 0],
    ["What does NaN stand for?", ["No assigned number", "Not a Number", "Null and None", "New array name"], 1],
    ["Which array method loops over every element?", ["each()", "loop()", "forEach()", "iterate()"], 2],
    ["What does JSON.parse() do?", ["Converts an object to a string", "Deletes JSON data", "Sends data to a server", "Converts a JSON string to an object"], 3],
    ["Which operator means logical AND?", ["&&", "||", "!", "&"], 0],
    ["What is the result of \"5\" + 3?", ["8", "\"53\"", "NaN", "Error"], 1],
    ["Which keyword declares a block-scoped variable that can change?", ["const", "static", "let", "fixed"], 2],
    ["What does setTimeout() do?", ["Stops a loop", "Pauses the whole page", "Repeats a function forever", "Runs a function after a delay"], 3],
    ["Which array method removes the last element?", ["pop()", "shift()", "remove()", "delete()"], 0],
    ["Which symbol is used for an arrow function?", ["->", "=>", "==>", "<-"], 1],
    ["Which method converts a number to a string?", ["str()", "string()", "toString()", "parseString()"], 2],
    ["What does null represent?", ["Zero", "An empty string", "An undefined variable", "An intentional absence of a value"], 3],
    ["Which method creates a new HTML element?", ["document.createElement()", "document.newElement()", "document.makeTag()", "document.add()"], 0],
    ["Which browser feature keeps data after the tab is closed?", ["sessionStorage", "localStorage", "memory", "variables"], 1]
  ]
};

const NAMES = { python: "Python", html: "HTML", css: "CSS", javascript: "JavaScript" };

/* ===== STATE ===== */
let category = "", list = [], current = 0, score = 0, answered = false;
const $ = (id) => document.getElementById(id);
const views = ["homeView", "quizView", "resultView"];

/* ===== HELPERS ===== */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showView(id) {
  views.forEach((v) => ($(v).style.display = v === id ? "block" : "none"));
  $("footer").style.display = id === "homeView" ? "block" : "none";
  if (id !== "homeView") window.scrollTo({ top: 0 });
}

function getBest(cat) {
  try { return Number(localStorage.getItem("ev-best-" + cat)); } catch (e) { return 0; }
}
function saveBest(cat, value) {
  try { localStorage.setItem("ev-best-" + cat, value); } catch (e) {}
}
function refreshBest() {
  Object.keys(NAMES).forEach((cat) => {
    const b = getBest(cat);
    $("best-" + cat).textContent = b ? "Best: " + b + "/20" : "Best: –";
  });
}

/* ===== QUIZ FLOW ===== */
function startQuiz(cat) {
  category = cat;
  list = shuffle(BANK[cat]);
  current = 0;
  score = 0;
  $("catName").textContent = NAMES[cat];
  showView("quizView");
  loadQuestion();
}

function loadQuestion() {
  answered = false;
  const q = list[current];
  const options = shuffle(q[1].map((text, i) => ({ text, correct: i === q[2] })));

  $("qCount").textContent = "QUESTION " + (current + 1) + " OF " + list.length;
  $("scoreNow").textContent = score;
  $("bar").style.width = ((current + 1) / list.length) * 100 + "%";
  $("question").textContent = q[0];

  const box = $("options");
  box.innerHTML = "";
  options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "opt";
    const letter = document.createElement("i");
    letter.textContent = "ABCD"[i];
    const label = document.createElement("span");
    label.textContent = opt.text;
    btn.append(letter, label);
    btn.onclick = () => selectAnswer(btn, opt.correct);
    btn.dataset.correct = opt.correct;
    box.appendChild(btn);
  });

  $("nextBtn").disabled = true;
  $("nextBtn").textContent = current === list.length - 1 ? "Finish Quiz" : "Next Question →";
}

function selectAnswer(btn, isCorrect) {
  if (answered) return;
  answered = true;

  document.querySelectorAll(".opt").forEach((b) => {
    b.disabled = true;
    if (b.dataset.correct === "true") b.classList.add("correct");
  });

  if (isCorrect) {
    score++;
  } else {
    btn.classList.add("wrong");
  }

  $("scoreNow").textContent = score;
  $("nextBtn").disabled = false;
}

function nextQuestion() {
  if (!answered) return;
  if (current < list.length - 1) {
    current++;
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const total = list.length;
  const percent = Math.round((score / total) * 100);
  const previousBest = getBest(category);
  const isNewBest = score > previousBest;
  if (isNewBest) saveBest(category, score);

  let title, message;
  if (percent >= 90) {
    title = "Outstanding!";
    message = "Exceptional knowledge. You clearly have a strong command of " + NAMES[category] + ".";
  } else if (percent >= 75) {
    title = "Excellent Work";
    message = "You have a solid understanding of " + NAMES[category] + ". A little more practice will make it perfect.";
  } else if (percent >= 50) {
    title = "Good Effort";
    message = "You are on the right track. Review the basics and try again to improve your score.";
  } else {
    title = "Keep Practising";
    message = "Every expert started here. Revise the fundamentals and take the quiz again.";
  }

  $("resCat").textContent = NAMES[category].toUpperCase() + " QUIZ";
  $("resTitle").textContent = title;
  $("resScore").textContent = score + " / " + total;
  $("resPercent").textContent = percent + "% CORRECT";
  $("resMsg").textContent = message;
  $("resBest").textContent = isNewBest
    ? "★ New personal best!"
    : "Personal best: " + previousBest + " / " + total;

  refreshBest();
  showView("resultView");
}

function goHome() {
  refreshBest();
  showView("homeView");
}

/* ===== EVENTS ===== */
document.querySelectorAll(".cat-card").forEach((card) => {
  card.addEventListener("click", () => startQuiz(card.dataset.cat));
});

$("nextBtn").addEventListener("click", nextQuestion);
$("retryBtn").addEventListener("click", () => startQuiz(category));
$("quitBtn").addEventListener("click", goHome);
$("otherBtn").addEventListener("click", () => {
  goHome();
  $("categories").scrollIntoView();
});

// Navbar links also work while a quiz or result is open
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    if ($("homeView").style.display === "none") goHome();
  });
});

/* ===== INIT ===== */
showView("homeView");
refreshBest();
