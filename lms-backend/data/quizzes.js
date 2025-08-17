const quizzes = [
  {
    courseId: 1,
    questions: [
      {
        question: "What is the purpose of React's 'useState' hook?",
        options: ["Routing", "Styling", "State management", "Component mounting"],
        answer: "State management"
      },
      {
        question: "Which keyword is used to pass data to a React component?",
        options: ["state", "setState", "props", "context"],
        answer: "props"
      },
      {
        question: "React uses a ___ to improve performance.",
        options: ["Real DOM", "Shadow DOM", "Virtual DOM", "Mirror DOM"],
        answer: "Virtual DOM"
      }
    ]
  },
  {
    courseId: 2,
    questions: [
      {
        question: "What is Express.js used for in Node.js?",
        options: ["Styling", "Database", "Routing and Middleware", "UI"],
        answer: "Routing and Middleware"
      },
      {
        question: "Which method is used to handle async operations in Node.js?",
        options: ["setTimeout", "Promise", "forEach", "JSON"],
        answer: "Promise"
      },
      {
        question: "Which command initializes a Node.js project?",
        options: ["node init", "npm start", "npm init", "nodemon"],
        answer: "npm init"
      }
    ]
  },
  {
    courseId: 3,
    questions: [
      {
        question: "What does MERN stand for?",
        options: ["MongoDB, Express, React, Node", "MySQL, Express, React, Node", "Mongo, Electron, Redux, Nest", "Mango, Elm, React, Next"],
        answer: "MongoDB, Express, React, Node"
      },
      {
        question: "Which database is used in a MERN stack app?",
        options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
        answer: "MongoDB"
      },
      {
        question: "React handles which part of a MERN app?",
        options: ["Backend", "Database", "Frontend UI", "Server Routing"],
        answer: "Frontend UI"
      }
    ]
  },
  {
    courseId: 4,
    questions: [
      {
        question: "Which tag is used for the largest heading in HTML?",
        options: ["<h1>", "<heading>", "<h6>", "<head>"],
        answer: "<h1>"
      },
      {
        question: "CSS is used for?",
        options: ["Structuring data", "Backend logic", "Styling HTML", "Creating databases"],
        answer: "Styling HTML"
      },
      {
        question: "Which property sets the background color in CSS?",
        options: ["bg-color", "background", "color", "background-color"],
        answer: "background-color"
      }
    ]
  },
  {
    courseId: 5,
    questions: [
      {
        question: "What does UI stand for?",
        options: ["User Integration", "User Interface", "Universal Input", "Uniform Interaction"],
        answer: "User Interface"
      },
      {
        question: "What does UX focus on?",
        options: ["Design structure", "User feelings & experience", "UI buttons", "Performance only"],
        answer: "User feelings & experience"
      },
      {
        question: "Which is a popular tool for UI design?",
        options: ["MySQL", "MongoDB", "Figma", "Node.js"],
        answer: "Figma"
      }
    ]
  },
  {
    courseId: 6,
    questions: [
      {
        question: "Figma is a ___ based tool.",
        options: ["Desktop", "Browser", "Mobile", "CLI"],
        answer: "Browser"
      },
      {
        question: "Figma allows ___ collaboration.",
        options: ["Offline", "Real-time", "Single-user", "Console"],
        answer: "Real-time"
      },
      {
        question: "Which of these is NOT a Figma feature?",
        options: ["Prototyping", "Wireframing", "Server hosting", "Design Systems"],
        answer: "Server hosting"
      }
    ]
  },
  {
    courseId: 7,
    questions: [
      {
        question: "What is a design system?",
        options: ["Database model", "Design tool", "Reusable design components", "Programming language"],
        answer: "Reusable design components"
      },
      {
        question: "Grids in UI design help with?",
        options: ["Security", "Typography", "Layout alignment", "Animation"],
        answer: "Layout alignment"
      },
      {
        question: "Which unit is commonly used in grids?",
        options: ["Pixels", "Em", "Rows", "Columns"],
        answer: "Columns"
      }
    ]
  },
  {
    courseId: 8,
    questions: [
      {
        question: "What is typography in UI?",
        options: ["Image resolution", "Font style & text layout", "Button size", "Spacing only"],
        answer: "Font style & text layout"
      },
      {
        question: "Which is a serif font?",
        options: ["Roboto", "Arial", "Times New Roman", "Open Sans"],
        answer: "Times New Roman"
      },
      {
        question: "Which property controls space between lines?",
        options: ["letter-spacing", "line-height", "font-size", "padding"],
        answer: "line-height"
      }
    ]
  },
  {
    courseId: 9,
    questions: [
      {
        question: "Which of these is a supervised ML algorithm?",
        options: ["K-Means", "Linear Regression", "PCA", "Clustering"],
        answer: "Linear Regression"
      },
      {
        question: "What is the purpose of ML?",
        options: ["Write HTML", "Make predictions", "Design websites", "Create databases"],
        answer: "Make predictions"
      },
      {
        question: "Which library is used for ML in Python?",
        options: ["React", "NumPy", "scikit-learn", "Tailwind"],
        answer: "scikit-learn"
      }
    ]
  },
  {
    courseId: 10,
    questions: [
      {
        question: "Python is used in ML because?",
        options: ["Easy syntax", "Built-in AI support", "Django framework", "All of the above"],
        answer: "All of the above"
      },
      {
        question: "Which operator is used for exponentiation in Python?",
        options: ["^", "**", "//", "exp()"],
        answer: "**"
      },
      {
        question: "Which keyword is used for function in Python?",
        options: ["func", "function", "define", "def"],
        answer: "def"
      }
    ]
  },
  {
    courseId: 11,
    questions: [
      {
        question: "What is TensorFlow used for?",
        options: ["Database", "Web Hosting", "Deep Learning", "Game Design"],
        answer: "Deep Learning"
      },
      {
        question: "TensorFlow is developed by?",
        options: ["Facebook", "Amazon", "Google", "Apple"],
        answer: "Google"
      },
      {
        question: "Neural networks mimic the structure of?",
        options: ["Trees", "Databases", "Human brain", "Wires"],
        answer: "Human brain"
      }
    ]
  },
  {
    courseId: 12,
    questions: [
      {
        question: "What is a dataset?",
        options: ["CSS style", "List of users", "Collection of data", "Website layout"],
        answer: "Collection of data"
      },
      {
        question: "Which format is commonly used to store datasets?",
        options: ["CSV", "PNG", "EXE", "MP4"],
        answer: "CSV"
      },
      {
        question: "Which is used to visualize ML results?",
        options: ["Matplotlib", "TensorBoard", "Both", "None"],
        answer: "Both"
      }
    ]
  },
  {
    courseId: 13,
    questions: [
      {
        question: "SEO stands for?",
        options: ["Search Engine Optimization", "Server Execution Order", "Structured Email Output", "Social Engagement Overview"],
        answer: "Search Engine Optimization"
      },
      {
        question: "Which is a social media platform?",
        options: ["MySQL", "Google Analytics", "Instagram", "Redux"],
        answer: "Instagram"
      },
      {
        question: "What helps improve search ranking?",
        options: ["Image resolution", "Keyword usage", "Video size", "Button clicks"],
        answer: "Keyword usage"
      }
    ]
  },
  {
    courseId: 14,
    questions: [
      {
        question: "Hashtags are commonly used in?",
        options: ["Email", "Code", "Social Media", "Documents"],
        answer: "Social Media"
      },
      {
        question: "Which platform is best for visual marketing?",
        options: ["LinkedIn", "GitHub", "Instagram", "Stack Overflow"],
        answer: "Instagram"
      },
      {
        question: "A good strategy is to post content?",
        options: ["Randomly", "Once a year", "Consistently", "Only on holidays"],
        answer: "Consistently"
      }
    ]
  },
  {
    courseId: 15,
    questions: [
      {
        question: "Email marketing is useful for?",
        options: ["Networking", "Brand awareness", "Gaming", "Database design"],
        answer: "Brand awareness"
      },
      {
        question: "A good email subject line is?",
        options: ["Click this now", "Important", "Short & clear", "Long & confusing"],
        answer: "Short & clear"
      },
      {
        question: "What tool is used for email campaigns?",
        options: ["Mailchimp", "Photoshop", "VS Code", "React"],
        answer: "Mailchimp"
      }
    ]
  },
  {
    courseId: 16,
    questions: [
      {
        question: "Blog content should be?",
        options: ["Boring", "Engaging & helpful", "Unrelated", "Too long"],
        answer: "Engaging & helpful"
      },
      {
        question: "What improves web content readability?",
        options: ["Complex words", "Paragraph breaks", "No headings", "Single sentence articles"],
        answer: "Paragraph breaks"
      },
      {
        question: "A CTA means?",
        options: ["Call to Action", "Create Technical Article", "Connect to App", "Code Table Association"],
        answer: "Call to Action"
      }
    ]
  }
];

module.exports = quizzes;
