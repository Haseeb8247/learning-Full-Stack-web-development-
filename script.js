const plan = [

/* =========================================================
   SUBJECT 1 — FRONTEND DEVELOPMENT
   ========================================================= */

/* DAY 1 */
{
  d:1,
  s:"frontend",
  u:"Frontend • HTML & CSS",
  t:"HTML Structure & Semantic HTML",
  h:2,
  items:[
    "Understand HTML document structure: <!DOCTYPE>, html, head and body",
    "Create page metadata using title, meta charset and viewport",
    "Understand headings from h1 to h6 and proper heading hierarchy",
    "Use paragraphs, strong, emphasis, lists and block/inline elements",
    "Understand semantic HTML and why semantic elements matter",
    "Use header, nav, main, section, article, aside and footer",
    "Create a meaningful page structure without unnecessary div elements"
  ],
  practice:"Build a complete semantic HTML page for your personal portfolio with header, navigation, about, skills, projects and footer."
},

/* DAY 2 */
{
  d:2,
  s:"frontend",
  u:"Frontend • HTML & CSS",
  t:"HTML Forms, Tables, Links & Images",
  h:2,
  items:[
    "Create hyperlinks using anchor elements and href",
    "Create internal page links and navigation links",
    "Add images using img, src, alt, width and height",
    "Understand relative paths and file/folder paths",
    "Create HTML tables using table, tr, th and td",
    "Understand table headers, rows and columns",
    "Create forms using form, label, input, textarea, select and button",
    "Understand input types: text, email, password, number, date and checkbox",
    "Connect labels with inputs using for and id attributes",
    "Understand required, placeholder, name and value attributes"
  ],
  practice:"Create a portfolio contact page containing navigation links, images, a skills table and a complete contact form."
},

/* DAY 3 */
{
  d:3,
  s:"frontend",
  u:"Frontend • HTML & CSS",
  t:"CSS Selectors, Box Model & Styling",
  h:2,
  items:[
    "Understand how CSS is connected to HTML",
    "Use element, class and ID selectors",
    "Use descendant, child and attribute selectors",
    "Understand pseudo-classes such as :hover and :focus",
    "Understand CSS specificity and selector priority",
    "Work with colors, backgrounds, borders and shadows",
    "Understand margin, padding, border and content",
    "Understand width, height, max-width and min-width",
    "Use box-sizing: border-box",
    "Control fonts, font sizes, line heights and text spacing"
  ],
  practice:"Take your HTML portfolio and completely style it using selectors, colors, spacing, typography, borders and the CSS box model."
},

/* DAY 4 */
{
  d:4,
  s:"frontend",
  u:"Frontend • HTML & CSS",
  t:"Flexbox, Grid & Responsive Design",
  h:2,
  items:[
    "Understand Flexbox containers and flex items",
    "Use flex-direction, justify-content and align-items",
    "Use flex-wrap and gap",
    "Create navigation bars and card layouts with Flexbox",
    "Understand CSS Grid rows and columns",
    "Use grid-template-columns and grid-template-rows",
    "Use gap and grid-column/grid-row",
    "Understand responsive layouts",
    "Use media queries for mobile, tablet and desktop",
    "Make images, cards and navigation responsive"
  ],
  practice:"Create a responsive portfolio homepage using Flexbox and Grid that works on mobile, tablet and desktop.",
  project:"Personal Portfolio — complete the first working version."
},

/* DAY 5 */
{
  d:5,
  s:"frontend",
  u:"Frontend • JavaScript Fundamentals",
  t:"JavaScript Variables, Data Types & Operators",
  h:2,
  items:[
    "Understand what JavaScript is and where it runs",
    "Declare variables using let, const and understand var",
    "Understand variable naming and reassignment",
    "Learn string, number, boolean, null and undefined data types",
    "Use typeof to inspect data types",
    "Understand arithmetic operators",
    "Use comparison operators: ==, ===, !=, !==, >, <, >= and <=",
    "Use logical operators: &&, || and !",
    "Understand type conversion between strings and numbers",
    "Use template literals for dynamic strings"
  ],
  practice:"Write small JavaScript programs for calculations, string manipulation, comparisons and simple user-data processing."
},

/* DAY 6 */
{
  d:6,
  s:"frontend",
  u:"Frontend • JavaScript Fundamentals",
  t:"Conditions, Loops, Functions & Scope",
  h:2,
  items:[
    "Write if, else if and else statements",
    "Use nested conditions",
    "Use the ternary operator",
    "Understand switch statements",
    "Write for loops",
    "Write while and do...while loops",
    "Use break and continue",
    "Create functions using function declarations",
    "Understand parameters and return values",
    "Use arrow functions",
    "Understand local, global and block scope"
  ],
  practice:"Solve at least 10 JavaScript problems involving conditions, loops and functions."
},

/* DAY 7 */
{
  d:7,
  s:"frontend",
  u:"Frontend • JavaScript Fundamentals",
  t:"Arrays, Objects & Strings",
  h:2,
  items:[
    "Create and access JavaScript arrays",
    "Add and remove array elements",
    "Understand array indexes and length",
    "Use push, pop, shift and unshift",
    "Use map, filter and find",
    "Use forEach for array iteration",
    "Create JavaScript objects with properties",
    "Access object properties using dot and bracket notation",
    "Add, update and delete object properties",
    "Use common string methods",
    "Understand string searching, slicing and replacing"
  ],
  practice:"Create a small product dataset using arrays and objects, then filter, search, transform and display the data."
},

/* DAY 8 */
{
  d:8,
  s:"frontend",
  u:"Frontend • JavaScript Fundamentals",
  t:"Modern JavaScript & Destructuring",
  h:2,
  items:[
    "Understand destructuring assignment",
    "Destructure arrays",
    "Destructure objects",
    "Use spread syntax",
    "Use rest parameters",
    "Use default parameters",
    "Use optional chaining",
    "Use nullish coalescing",
    "Combine arrays, objects and functions",
    "Write cleaner modern JavaScript code"
  ],
  practice:"Refactor your previous JavaScript exercises using destructuring, spread/rest, optional chaining and modern syntax.",
  project:"Small JavaScript applications — start."
},

/* DAY 9 */
{
  d:9,
  s:"frontend",
  u:"Frontend • JavaScript Fundamentals",
  t:"Build a JavaScript Application",
  h:2,
  items:[
    "Plan application requirements",
    "Break the application into functions",
    "Create the application HTML structure",
    "Connect JavaScript to the page",
    "Manage application state with variables",
    "Use arrays/objects for application data",
    "Handle user actions",
    "Validate user input",
    "Handle empty and invalid input",
    "Test normal and edge-case scenarios"
  ],
  practice:"Build one complete JavaScript application such as a calculator, expense tracker, task manager or product manager.",
  project:"Small JavaScript applications — complete."
},

/* DAY 10 */
{
  d:10,
  s:"frontend",
  u:"Frontend • Browser JavaScript",
  t:"DOM Selection & Manipulation",
  h:2,
  items:[
    "Understand the Document Object Model",
    "Understand the relationship between HTML and DOM",
    "Select elements using getElementById",
    "Select elements using querySelector",
    "Select multiple elements using querySelectorAll",
    "Change text using textContent",
    "Change HTML using innerHTML",
    "Change CSS using style properties",
    "Add and remove CSS classes",
    "Create new DOM elements",
    "Append and remove DOM elements"
  ],
  practice:"Build an interactive webpage where JavaScript dynamically creates, updates and removes content."
},

/* DAY 11 */
{
  d:11,
  s:"frontend",
  u:"Frontend • Browser JavaScript",
  t:"Events, Event Listeners & Form Validation",
  h:2,
  items:[
    "Understand browser events",
    "Use onclick and other event handlers",
    "Use addEventListener",
    "Handle click events",
    "Handle input and change events",
    "Handle submit events",
    "Prevent default form submission",
    "Read values from form fields",
    "Validate required fields",
    "Validate email and number inputs",
    "Display validation messages to users"
  ],
  practice:"Build a registration/contact form with JavaScript event handling and complete client-side validation."
},

/* DAY 12 */
{
  d:12,
  s:"frontend",
  u:"Frontend • Browser JavaScript",
  t:"Local Storage & JSON",
  h:2,
  items:[
    "Understand browser Local Storage",
    "Save values using localStorage.setItem",
    "Read values using localStorage.getItem",
    "Remove stored values",
    "Understand that Local Storage stores strings",
    "Convert JavaScript objects to JSON",
    "Use JSON.stringify",
    "Use JSON.parse",
    "Store arrays and objects in Local Storage",
    "Restore application state after page refresh"
  ],
  practice:"Build a persistent task manager where tasks remain available after closing and reopening the browser."
},

/* DAY 13 */
{
  d:13,
  s:"frontend",
  u:"Frontend • Browser JavaScript",
  t:"Fetch API, Promises & Async/Await",
  h:2,
  items:[
    "Understand client-server API communication",
    "Understand the Fetch API",
    "Make GET requests using fetch",
    "Read JSON responses",
    "Understand Promises",
    "Understand pending, fulfilled and rejected states",
    "Use then and catch",
    "Convert Promise code to async/await",
    "Use try/catch for async errors",
    "Display loading, success and error states"
  ],
  practice:"Fetch product/user data from a public API and display it dynamically with loading and error states."
},

/* DAY 14 */
{
  d:14,
  s:"frontend",
  u:"Frontend • Browser JavaScript",
  t:"Product / Karigar Management UI",
  h:2,
  items:[
    "Design the management dashboard layout",
    "Create product/karigar input forms",
    "Display records dynamically",
    "Add new records",
    "Edit existing records",
    "Delete records",
    "Validate form input",
    "Store records using Local Storage",
    "Search and filter displayed records",
    "Create a clean responsive interface"
  ],
  practice:"Combine DOM manipulation, events, forms, validation, Local Storage and JSON into one management interface.",
  project:"Product/Karigar Management UI — complete."
},

/* DAY 15 */
{
  d:15,
  s:"frontend",
  u:"Frontend • React",
  t:"React Components, Props, State & Events",
  h:2,
  items:[
    "Understand why React is used",
    "Create a React project",
    "Understand React component-based architecture",
    "Create functional components",
    "Import and export components",
    "Pass data using props",
    "Understand component state",
    "Create state with useState",
    "Handle button and user events",
    "Pass event handlers between components"
  ],
  practice:"Build a small React application with reusable Header, Sidebar, Card and Form components."
},

/* DAY 16 */
{
  d:16,
  s:"frontend",
  u:"Frontend • React",
  t:"React Forms & Hooks",
  h:2,
  items:[
    "Create controlled React inputs",
    "Handle form submission",
    "Store form values in state",
    "Validate React forms",
    "Understand React Hooks",
    "Use useState for component state",
    "Use useEffect for side effects",
    "Understand dependency arrays",
    "Fetch data inside useEffect",
    "Handle loading and error states"
  ],
  practice:"Create a React product form that stores state, validates input and loads data using useEffect."
},

/* DAY 17 */
{
  d:17,
  s:"frontend",
  u:"Frontend • React",
  t:"React Routing, APIs & Component Architecture",
  h:2,
  items:[
    "Understand client-side routing",
    "Create multiple React routes",
    "Create navigation between pages",
    "Create reusable layout components",
    "Separate UI components from data logic",
    "Connect React to a REST API",
    "Fetch API data into components",
    "Display API loading states",
    "Display API errors",
    "Organize React folders and components"
  ],
  practice:"Create a multi-page React application with Dashboard, Products, Users and Settings routes connected to an API."
},

/* DAY 18 */
{
  d:18,
  s:"frontend",
  u:"Frontend • React",
  t:"React Dashboard Project",
  h:2,
  items:[
    "Create dashboard layout",
    "Create reusable dashboard cards",
    "Display statistics",
    "Display lists/tables",
    "Create forms",
    "Connect dashboard to API data",
    "Add routing",
    "Manage component state",
    "Handle loading and errors",
    "Make dashboard responsive"
  ],
  practice:"Build a complete React Dashboard using components, props, state, hooks, routing and API integration.",
  project:"React Dashboard — complete."
},


/* =========================================================
   SUBJECT 2 — BACKEND & DATABASE
   ========================================================= */

/* DAY 19 */
{
  d:19,
  s:"backend",
  u:"Backend • Python Backend",
  t:"Flask, Routes & HTTP Fundamentals",
  h:2,
  items:[
    "Understand backend/server-side development",
    "Understand Flask application structure",
    "Create a Flask application",
    "Run a Flask development server",
    "Create basic Flask routes",
    "Understand URL routing",
    "Return HTML responses",
    "Understand HTTP request and response",
    "Read request data",
    "Return appropriate responses"
  ],
  practice:"Create a Flask application with Home, About and API routes."
},

/* DAY 20 */
{
  d:20,
  s:"backend",
  u:"Backend • Python Backend",
  t:"REST API Development",
  h:2,
  items:[
    "Understand REST API architecture",
    "Understand resources and endpoints",
    "Return JSON responses from Flask",
    "Understand GET requests",
    "Understand POST requests",
    "Understand PUT/PATCH requests",
    "Understand DELETE requests",
    "Understand HTTP status codes",
    "Handle API errors",
    "Organize Flask project files"
  ],
  practice:"Build a CRUD-style Flask REST API for products with GET, POST, PUT and DELETE endpoints.",
  project:"Basic REST API — complete."
},

/* DAY 21 */
{
  d:21,
  s:"backend",
  u:"Backend • SQL & Database",
  t:"Database Fundamentals & CRUD",
  h:2,
  items:[
    "Understand why applications use databases",
    "Understand relational databases",
    "Understand database tables",
    "Create tables",
    "Understand rows and columns",
    "Choose appropriate data types",
    "Understand primary keys",
    "Understand foreign keys",
    "Insert records",
    "Update records",
    "Delete records",
    "Read records using SELECT"
  ],
  practice:"Create an SQLite inventory database with products, categories and stock records."
},

/* DAY 22 */
{
  d:22,
  s:"backend",
  u:"Backend • SQL & Database",
  t:"SQL Queries, Filtering, Grouping & Joins",
  h:2,
  items:[
    "Write SELECT queries",
    "Filter data using WHERE",
    "Use comparison operators in SQL",
    "Sort data using ORDER BY",
    "Group records using GROUP BY",
    "Use COUNT, SUM, AVG, MIN and MAX",
    "Understand INNER JOIN",
    "Understand LEFT JOIN",
    "Join multiple related tables",
    "Combine filtering, grouping and aggregation"
  ],
  practice:"Write at least 20 SQL queries against your inventory database, including filtering, aggregation and joins."
},

/* DAY 23 */
{
  d:23,
  s:"backend",
  u:"Backend • SQL & Database",
  t:"Constraints, Indexes, Transactions & PostgreSQL",
  h:2,
  items:[
    "Understand NOT NULL constraints",
    "Understand UNIQUE constraints",
    "Understand DEFAULT values",
    "Understand CHECK constraints",
    "Understand referential integrity",
    "Understand database indexes",
    "Understand when indexes improve queries",
    "Understand database transactions",
    "Understand COMMIT and ROLLBACK",
    "Understand differences between SQLite and PostgreSQL",
    "Understand the basic PostgreSQL setup"
  ],
  practice:"Improve your inventory database with constraints and indexes, then practice transaction handling.",
  project:"Inventory database — complete."
},

/* DAY 24 */
{
  d:24,
  s:"backend",
  u:"Backend • ORM & Authentication",
  t:"SQLAlchemy Models & Database Relationships",
  h:2,
  items:[
    "Understand ORM and why it is useful",
    "Install and configure SQLAlchemy",
    "Create SQLAlchemy models",
    "Map Python classes to database tables",
    "Define model columns",
    "Create primary keys with models",
    "Create foreign-key relationships",
    "Understand one-to-many relationships",
    "Understand many-to-many relationships",
    "Query database records using SQLAlchemy",
    "Understand database migrations"
  ],
  practice:"Create User, Product and Category models with appropriate relationships using SQLAlchemy."
},

/* DAY 25 */
{
  d:25,
  s:"backend",
  u:"Backend • ORM & Authentication",
  t:"User Authentication & Authorization",
  h:2,
  items:[
    "Create user registration endpoint",
    "Validate registration data",
    "Hash passwords securely",
    "Never store plain-text passwords",
    "Create login functionality",
    "Verify password hashes",
    "Understand sessions",
    "Understand JWT authentication",
    "Protect authenticated API routes",
    "Understand authorization",
    "Create user roles",
    "Implement role-based permissions"
  ],
  practice:"Build registration and login APIs, then protect inventory endpoints so only authorized users can access them.",
  project:"User + inventory API — build."
},

/* DAY 26 */
{
  d:26,
  s:"backend",
  u:"Backend • Full-Stack Integration",
  t:"React + Flask + Database Integration",
  h:2,
  items:[
    "Connect React frontend to Flask backend",
    "Configure API endpoints",
    "Send GET requests from React",
    "Send POST requests from React",
    "Send PUT/PATCH requests from React",
    "Send DELETE requests from React",
    "Display backend data in React",
    "Implement frontend CRUD operations",
    "Connect authentication to the frontend",
    "Handle API validation errors",
    "Handle network/API failures"
  ],
  practice:"Connect your React application to the Flask API and implement a complete authenticated CRUD workflow."
},

/* DAY 27 */
{
  d:27,
  s:"backend",
  u:"Backend • Full-Stack Integration",
  t:"File Uploads, Pagination, Search & Filtering",
  h:2,
  items:[
    "Understand multipart/form-data",
    "Handle file uploads with Flask",
    "Validate uploaded files",
    "Store uploaded files safely",
    "Understand pagination",
    "Create paginated API responses",
    "Implement frontend pagination controls",
    "Implement backend search",
    "Implement database filtering",
    "Combine search, filtering and pagination",
    "Display results cleanly in React"
  ],
  practice:"Add file upload, pagination, search and filtering to your inventory application.",
  project:"Full-stack inventory application — complete core features."
},


/* =========================================================
   SUBJECT 3 — PROFESSIONAL SOFTWARE DEVELOPMENT
   ========================================================= */

/* DAY 28 */
{
  d:28,
  s:"professional",
  u:"Professional • Git, Debugging & Testing",
  t:"Git, GitHub, Debugging & Testing",
  h:2,
  items:[
    "Understand version control",
    "Initialize a Git repository",
    "Understand working tree and staging area",
    "Use git add",
    "Create commits using git commit",
    "Write meaningful commit messages",
    "Create and switch Git branches",
    "Merge branches",
    "Push code to GitHub",
    "Create pull requests",
    "Use browser DevTools for debugging",
    "Debug frontend JavaScript errors",
    "Debug Flask/backend errors",
    "Understand application logging",
    "Write basic unit tests",
    "Understand API testing",
    "Use pytest for Python testing"
  ],
  practice:"Create a GitHub repository for your full-stack project, use branches and commits, then write tests for important backend functionality."
},

/* DAY 29 */
{
  d:29,
  s:"professional",
  u:"Professional • Security",
  t:"Web Application Security",
  h:2,
  items:[
    "Understand authentication vs authorization",
    "Understand secure password storage",
    "Understand SQL injection",
    "Learn how parameterized queries prevent SQL injection",
    "Understand Cross-Site Scripting (XSS)",
    "Understand Cross-Site Request Forgery (CSRF)",
    "Understand Cross-Origin Resource Sharing (CORS)",
    "Validate user input on the backend",
    "Understand secure cookies",
    "Store secrets in environment variables",
    "Never commit API keys or passwords",
    "Understand HTTPS",
    "Understand basic OWASP security concepts",
    "Review authentication and authorization security"
  ],
  practice:"Audit your existing full-stack application for common security problems and fix the issues you can identify.",
  project:"Secure your previous application."
},

/* DAY 30 */
{
  d:30,
  s:"professional",
  u:"Professional • Deployment, DevOps & System Design",
  t:"Deployment, DevOps & System Design",
  h:3,
  items:[
    "Understand basic Linux commands",
    "Understand Linux directories and permissions",
    "Understand application servers",
    "Configure production environment variables",
    "Understand Docker containers",
    "Create a Dockerfile",
    "Understand Docker images and containers",
    "Use Docker Compose",
    "Run PostgreSQL with Docker",
    "Understand production PostgreSQL deployment",
    "Understand Nginx as a reverse proxy",
    "Understand Gunicorn for Flask deployment",
    "Connect a domain to a server",
    "Understand DNS records",
    "Configure HTTPS",
    "Understand basic CI/CD pipelines",
    "Understand client-server architecture",
    "Understand API architecture",
    "Understand application scalability",
    "Understand caching",
    "Understand database indexing for performance",
    "Understand load balancing",
    "Understand queues",
    "Understand background jobs",
    "Understand file storage",
    "Understand WebSockets",
    "Understand monolithic architecture",
    "Understand distributed architecture",
    "Understand reliability",
    "Understand application monitoring"
  ],
  practice:"Deploy your full-stack application, document its architecture, and draw the complete flow from browser → React → API → Flask → SQLAlchemy → PostgreSQL.",
  project:"Deploy your application + System Design project."
}

];
const key = "fullstack30-progress-v1";
let state = JSON.parse(localStorage.getItem(key) || "{}");
let currentFilter = "all";

const allTasks = plan.flatMap(x => x.items);
const totalTopics = allTasks.length;

function save(){localStorage.setItem(key, JSON.stringify(state));}
function taskKey(d,i){return `d${d}-t${i}`;}
function isDone(d,i){return !!state[taskKey(d,i)];}
function dayDone(day){return day.items.every((_,i)=>isDone(day.d,i));}
function doneCount(day){return day.items.filter((_,i)=>isDone(day.d,i)).length;}
function hoursDone(){return plan.reduce((sum,day)=>sum+(dayDone(day)?day.h:day.h*doneCount(day)/day.items.length),0);}
function updateStats(){
  const topicsDone = plan.reduce((n,d)=>n+doneCount(d),0);
  const daysDone = plan.filter(dayDone).length;
  const pct = Math.round((topicsDone/totalTopics)*100);
  document.getElementById("progressPercent").textContent = pct+"%";
  document.getElementById("progressBar").style.width = pct+"%";
  document.getElementById("progressText").textContent = `${daysDone} / 30 days complete`;
  document.getElementById("daysDone").textContent = daysDone;
  document.getElementById("tasksDone").textContent = topicsDone;
  document.getElementById("tasksTotal").innerHTML = `/ ${totalTopics}<br>TASKS DONE`;
  document.getElementById("topicsDone").textContent = topicsDone;
  document.getElementById("topicsTotal").innerHTML = `/ ${totalTopics}<br>TOPICS DONE`;
  document.getElementById("hoursDone").textContent = Math.round(hoursDone()*10)/10;
}
function render(){
  const list=document.getElementById("dayList");
  list.innerHTML="";
  const visible=plan.filter(d=>currentFilter==="all"||d.s===currentFilter);
  visible.forEach(day=>{
    const done=doneCount(day), total=day.items.length, complete=done===total;
    const el=document.createElement("article");
    el.className="day-card"+(complete?" done":"");
    el.innerHTML=`<div class="day-main">
      <div class="day-num">${String(day.d).padStart(2,"0")}</div>
      <div><div class="day-title">${day.t}</div><div class="day-sub">${day.u} • ${day.h} hrs • ${done}/${total} topics</div></div>
      <div class="day-progress">${complete?"✓ COMPLETE":`${done}/${total}`} <span class="chevron">›</span></div>
    </div>`;
    el.querySelector(".day-main").onclick=()=>openDay(day.d);
    list.appendChild(el);
  });
  updateStats();
}
function openDay(num){
  const day=plan.find(x=>x.d===num);
  const modal=document.getElementById("dayModal"), content=document.getElementById("modalContent");
  const complete=dayDone(day);
  content.innerHTML=`<div class="modal-kicker">DAY ${day.d} • ${day.h} HOURS</div>
    <span class="subject-tag">${day.s==="frontend"?"SUBJECT 1 • FRONTEND":day.s==="backend"?"SUBJECT 2 • BACKEND & DATABASE":"SUBJECT 3 • PROFESSIONAL SOFTWARE"}</span>
    <h2>${day.t}</h2><div class="modal-desc">${day.u}</div>
    <div class="task-group"><h3>Learn + complete</h3>
      ${day.items.map((item,i)=>`<div class="task ${isDone(day.d,i)?"done":""}">
        <input type="checkbox" id="task-${day.d}-${i}" ${isDone(day.d,i)?"checked":""}>
        <label for="task-${day.d}-${i}">${item}</label></div>`).join("")}
    </div>
    <div class="task-group"><h3>Practice</h3><div class="project">${day.practice}</div></div>
    ${day.project?`<div class="task-group"><h3>Project</h3><div class="project">${day.project}</div></div>`:""}
    <button id="completeDay" class="complete-day ${complete?"completed":""}">${complete?"Day completed ✓":"Mark day complete"}</button>`;
  day.items.forEach((_,i)=>{
    document.getElementById(`task-${day.d}-${i}`).addEventListener("change",e=>{
      state[taskKey(day.d,i)]=e.target.checked;
      if(!e.target.checked) delete state[taskKey(day.d,i)];
      save(); openDay(day.d); render();
    });
  });
  document.getElementById("completeDay").onclick=()=>{
    day.items.forEach((_,i)=>state[taskKey(day.d,i)]=true);
    save(); openDay(day.d); render();
  };
  modal.classList.remove("hidden");
}
document.getElementById("closeModal").onclick=()=>document.getElementById("dayModal").classList.add("hidden");
document.querySelector(".modal-backdrop").onclick=()=>document.getElementById("dayModal").classList.add("hidden");
document.getElementById("resetBtn").onclick=()=>{
  if(confirm("Reset all 30-day progress?")){state={};save();render();}
};
document.querySelectorAll(".filter").forEach(btn=>btn.onclick=()=>{
  document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active"); currentFilter=btn.dataset.filter; render();
});
render();
