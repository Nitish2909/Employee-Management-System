const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Design Login Page",
          "description": "Create responsive login UI",
          "date": "2026-04-10",
          "category": "Design",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Fix Navbar Bug",
          "description": "Resolve mobile navbar issue",
          "date": "2026-04-11",
          "category": "Bug Fix",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "API Integration",
          "description": "Connect login API",
          "date": "2026-04-12",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Create Dashboard UI",
          "description": "Build admin dashboard layout",
          "date": "2026-04-10",
          "category": "Design",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Setup Routing",
          "description": "Configure React Router",
          "date": "2026-04-11",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Optimize Images",
          "description": "Compress and optimize assets",
          "date": "2026-04-12",
          "category": "Optimization",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        },
        {
          "title": "Write Unit Tests",
          "description": "Add tests for components",
          "date": "2026-04-13",
          "category": "Testing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Database Setup",
          "description": "Initialize MongoDB",
          "date": "2026-04-09",
          "category": "Backend",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Create APIs",
          "description": "Build REST APIs",
          "date": "2026-04-10",
          "category": "Backend",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Fix Auth Bug",
          "description": "Resolve login issue",
          "date": "2026-04-11",
          "category": "Bug Fix",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Create Landing Page",
          "description": "Design homepage UI",
          "date": "2026-04-08",
          "category": "Design",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Add Animations",
          "description": "Implement animations",
          "date": "2026-04-09",
          "category": "UI/UX",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Cross-browser Testing",
          "description": "Test on all browsers",
          "date": "2026-04-10",
          "category": "Testing",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        },
        {
          "title": "SEO Optimization",
          "description": "Improve SEO ranking",
          "date": "2026-04-11",
          "category": "Marketing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Setup CI/CD",
          "description": "Configure deployment pipeline",
          "date": "2026-04-07",
          "category": "DevOps",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Server Monitoring",
          "description": "Setup monitoring tools",
          "date": "2026-04-08",
          "category": "DevOps",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Fix Deployment Bug",
          "description": "Resolve server crash",
          "date": "2026-04-09",
          "category": "Bug Fix",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    }
  ];

  const admin = [{
    "id": 100,
    "email": "admin@example.com",
    "password": "123"
  }]


  export const setLocalStorage = () =>{
    localStorage.setItem("employees", JSON.stringify(employees))
     localStorage.setItem("admin", JSON.stringify(admin))
  }

  export const getLocalStorage = () =>{
    localStorage.getItem()
  }

