

const employees = [
  {
    id: 1,
    firstName: "Ali",
    email: "e@gmail.com",
    password: "123",
    taskNumber: 5,
    taskCounts: {
      active: 3,
      newTask: 2,
      accepted: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Create Login Page",
        taskDescription: "Design a responsive login page using HTML and CSS.",
        taskDate: "2026-10-30",
        taskCategory: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix Navbar",
        taskDescription: "Fix the navigation bar alignment and responsiveness.",
        taskDate: "2026-10-29",
        taskCategory: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Build Dashboard",
        taskDescription: "Create an admin dashboard layout.",
        taskDate: "2026-10-28",
        taskCategory: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Update Website Content",
        taskDescription: "Update the homepage text and images.",
        taskDate: "2026-10-27",
        taskCategory: "Content",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Test Contact Form",
        taskDescription: "Test all contact form fields and validation.",
        taskDate: "2026-10-30",
        taskCategory: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },

  {
    id: 2,
    firstName: "Ahmed",
    email: "ahmed@gmail.com",
    password: "123",
    taskNumber: 4,
    taskCounts: {
      active: 2,
      newTask: 1,
      accepted: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        taskTitle: "Design Landing Page",
        taskDescription: "Create a modern landing page design.",
        taskDate: "2026-10-30",
        taskCategory: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Create Footer",
        taskDescription: "Build a responsive website footer.",
        taskDate: "2026-10-29",
        taskCategory: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Fix CSS Bugs",
        taskDescription: "Resolve styling issues on mobile devices.",
        taskDate: "2026-10-28",
        taskCategory: "Bug Fix",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Optimize Images",
        taskDescription: "Compress website images for faster loading.",
        taskDate: "2026-10-27",
        taskCategory: "Optimization",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 3,
    firstName: "Sara",
    email: "sara@gmail.com",
    password: "123",
    taskNumber: 6,
    taskCounts: {
      active: 3,
      newTask: 2,
      accepted: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Create Product Cards",
        taskDescription: "Design reusable product cards for the website.",
        taskDate: "2026-10-30",
        taskCategory: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Add Search Functionality",
        taskDescription: "Implement product search functionality.",
        taskDate: "2026-10-29",
        taskCategory: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Update Product Details",
        taskDescription: "Update product names and descriptions.",
        taskDate: "2026-10-28",
        taskCategory: "Content",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Fix Button Styling",
        taskDescription: "Fix button colors and hover effects.",
        taskDate: "2026-10-27",
        taskCategory: "Bug Fix",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Test Website",
        taskDescription: "Check website functionality across browsers.",
        taskDate: "2026-10-30",
        taskCategory: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Create About Section",
        taskDescription: "Build an attractive about us section.",
        taskDate: "2026-10-26",
        taskCategory: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 4,
    firstName: "Usman",
    email: "usman@gmail.com",
    password: "123",
    taskNumber: 5,
    taskCounts: {
      active: 2,
      newTask: 1,
      accepted: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Build Registration Form",
        taskDescription: "Create a registration form with validation.",
        taskDate: "2026-10-30",
        taskCategory: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Design Profile Page",
        taskDescription: "Create a user profile page layout.",
        taskDate: "2026-10-29",
        taskCategory: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Fix Login Errors",
        taskDescription: "Resolve login authentication errors.",
        taskDate: "2026-10-28",
        taskCategory: "Bug Fix",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Update Database",
        taskDescription: "Organize and update user database records.",
        taskDate: "2026-10-27",
        taskCategory: "Database",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Test Registration",
        taskDescription: "Test registration form validation.",
        taskDate: "2026-10-26",
        taskCategory: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 5,
    firstName: "Ayesha",
    email: "ayesha@gmail.com",
    password: "123",
    taskNumber: 6,
    taskCounts: {
      active: 3,
      newTask: 2,
      accepted: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Create Website Banner",
        taskDescription: "Design a promotional banner for the homepage.",
        taskDate: "2026-10-30",
        taskCategory: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Write Blog Post",
        taskDescription: "Write a blog post about company services.",
        taskDate: "2026-10-29",
        taskCategory: "Content",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Update Homepage",
        taskDescription: "Update homepage sections and content.",
        taskDate: "2026-10-28",
        taskCategory: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Check Website Links",
        taskDescription: "Verify all internal and external website links.",
        taskDate: "2026-10-27",
        taskCategory: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Create FAQ Section",
        taskDescription: "Build a frequently asked questions section.",
        taskDate: "2026-10-30",
        taskCategory: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Optimize SEO",
        taskDescription: "Add meta descriptions and optimize page titles.",
        taskDate: "2026-10-26",
        taskCategory: "SEO",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    firstName: "Hamza",
    email: "admin@gmail.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));

  return { employees, admin };
};
// localStorage.clear()