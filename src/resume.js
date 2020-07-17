export const intro = "Hello, world! I'm Anna. Welcome to my portfolio of web development projects."

export const projects = {
  kite: {
    title: 'Kite Games',
    subtitle: "Multiplayer Party Games Site",
    icon: "gamepad",
    style: "1",
    description: "Kite Games is a real-time multiplayer party games website built with my friends Ji and Lizzy using React and Firebase. One of the more interesting challenges of this project was building our admin Express server as a single, central source of truth for coordinating many players. The idea was inspired by our transition mid-cohort to social distancing, and the games that we played together during happy hours at Fullstack. We created several games during the course of the project, and I'd like to add more in the future in addition to streamlining our existing codebase.",
    link: "http://www.kite.games/",
    repo: "https://github.com/AJL-Cap/Kite",
    youtube: "https://www.youtube.com/watch?v=ECHcCAnJn0E&feature=youtu.be"
  },
  holeFoods: {
    title: 'Hole Foods',
    subtitle: "Donut E-Commerce Site",
    icon: "shopping-cart",
    style: "2",
    description: "This is my team's version of Fullstack's signature Grace Shopper Project built with Sequelize and Express on the back end; Redux and React on the front end. One of the more interesting challenges of this project was coordinating the cart on the session for the unauthenticated user and the database cart for logged in users. I created Express middleware to handle the changes at log in and sign up. Now that I've seen many Grace Shopper projects as a teaching fellow, I have lots of ideas for how to refactor this code.",
    link: "http://www.holefoods.io/",
    repo: "https://github.com/Hole-Foods/grace-shopper"
  },
  sailor: {
    title: 'Sailor',
    subtitle: "Astrology Calendar App",
    icon: "moon-o",
    style: "3",
    description: "Sailor is my solo hackathon project that I built with my friends in mind as users. It's a Sailor Moon-themed astrology calendar app built with React Native and ephemeris data. It displays relevant information about planetary movement marked on a calendar (for example Mercury retrograde marked in Sailor Mercury blue), and also generates small daily horoscopes. I'd like to integrate Firebase in the future to create a more personalized and customizable user experience.",
    repo: "https://github.com/rosebutch/sailor"
  },
}

export const experience = [
  {
    title: "Teaching Fellow at Fullstack Academy",
    bullets: ["Managed 14 student projects, guiding architectural decisions and providing feedback in office hours and daily stand-up meetings", "Led 12 weekly workshops covering algorithms, data structures, system design, and other computer science topics", "Clarified coding concepts and extensively debugged student code in over a hundred help tickets"]
  }, {
    title: "School Technology Assistant",
    bullets: ["Founded Girls Who Code and Gaming electives for students, teaching them coding basics and encouraging them to pursue a career in tech", "Performed troubleshooting and repair on over a thousand student and staff computers, 8 printers, and varied audiovisual equipment ", "Provided technology training to over 100 teachers", "Managed tech assets with GoGuardian, IncidentIQ, and Google Admin"]
  }, {
    title: "Legal Assistant at a Consumer Rights Firm",
    bullets: ["Created a new system for easily recording and sharing contact information of potential new clients and scheduling reaching out to them regarding their cases, resulting in a significant increase in new clients", "Created spreadsheets to organize large amounts of data for use by attorneys"]
  }, {
    title: "Swim Instructor",
    bullets: ["Taught babies, children, and adults how to swim, specializing in helping those with anxiety feel comfortable in the water with basic safety skills", "Used Excel to make and update spreadsheets tracking swimmers’ progress through the program"]
  }, {
    title: "Doggy Daycare Attendant",
    bullets: ["Cared for a large number of dogs, maintaining their meal and rest schedules and keeping their environment clean and orderly", "Provided highly personalized customer service to the dog parents, from following complex care instructions to the letter, to sending photos and stories of the dog's activities during longer overnight stays"]
  }
]
export const skills = [["JavaScript", "React (hooks and lifecycle methods)", "Redux", "Node.js", "Express", "PostgreSQL", "Sequelize", "Git", "HTML", "CSS", "Firebase Auth", "Firebase Realtime Database"], ["Mocha", "Chai", "Jasmine", "Python", "Bootstrap", "React Native", "NoSQL", "Gatsby", "Netlify"],["Heroku", "socket.io", "Ephemeris", "Moment", "Firestore"]]

export const softSkills = ["I'm great at helping people feel comfortable and focus the task at hand.",
"I'm an expert at explaining technical concepts without being overwhelmed by the details. I've also become fantastic at debugging by noticing all the details.", `I love to code as a team, and I live by <a href="https://www.shinetheory.com/">Aminatou Sow and Ann Friedman's Shine Theory</a> of mutual investment and collaboration.`]

export const bio = "I became interested in coding while trying to solve a puzzle in a video game with my software developer girlfriend, who pointed out that it could be solved with an algorithm. After that, I followed my interest through a couple free online courses, which led me to start a Girls Who Code club at the school where I worked. As I was encouraging the students to pursue coding as a career, I found that I was also encouraging myself. I applied to Fullstack Academy’s Grace Hopper Program, where I thrived. I became a teaching fellow to assist and encourage other students, as well as to hone my debugging skills. I’ve always loved solving problems in creative ways, and that’s what I hope to do as a software developer."

const resume = {
  intro, projects, experience, skills, softSkills, bio
}
export default resume
