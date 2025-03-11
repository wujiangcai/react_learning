const blogs = [
    {
        id: 1,
        title: "Introduction to JavaScript",
        content: "JavaScript is a versatile programming language used for web development. It allows you to create dynamic and interactive web pages. This blog covers the basics of JavaScript, including variables, functions, and control structures.",
        image: "https://tse3-mm.cn.bing.net/th/id/OIP-C.d0MvRpdHeDIOFeNeW15tEwHaEK?rs=1&pid=ImgDetMain",
        author: "John Doe",
        date: "2023-10-01",
        tags: ["JavaScript", "Web Development"],
        likes: 120,
        isBookmarked: false
    },
    {
        id: 2,
        title: "Understanding React Components",
        content: "React is a popular JavaScript library for building user interfaces. In this blog, we explore the concept of components, which are the building blocks of a React application. Learn how to create and use functional and class components.",
        image: "https://tse2-mm.cn.bing.net/th/id/OIP-C.O_qRBx_A6KFbq0nWEDMJhwHaEK?rs=1&pid=ImgDetMain://example.com/https://tse2-mm.cn.bing.net/th/id/OIP-C.O_qRBx_A6KFbq0nWEDMJhwHaEK?rs=1&pid=ImgDetMain/react-components.jpg",
        author: "Jane Smith",
        date: "2023-09-25",
        tags: ["React", "Frontend"],
        likes: 95,
        isBookmarked: true
    },
    {
        id: 3,
        title: "CSS Grid Layout Explained",
        content: "CSS Grid is a powerful layout system that allows you to create complex web layouts with ease. This blog dives into the fundamentals of CSS Grid, including grid containers, grid items, and how to create responsive designs.",
        image: "https://file.bluesdream.com/wp-content/uploads/2019/04/css-grid-layout-guide-1000x288.png",
        author: "Alice Johnson",
        date: "2023-09-20",
        tags: ["CSS", "Web Design"],
        likes: 85,
        isBookmarked: false
    },
    {
        id: 4,
        title: "Getting Started with Node.js",
        content: "Node.js is a runtime environment that allows you to run JavaScript on the server side. This blog provides an introduction to Node.js, covering its core features, how to set up a basic server, and how to use npm packages.",
        image: "https://colorlib.com/wp/wp-content/uploads/sites/2/node.js-logo.png",
        author: "Bob Brown",
        date: "2023-09-15",
        tags: ["Node.js", "Backend"],
        likes: 110,
        isBookmarked: true
    },
    {
        id: 5,
        title: "Python for Data Science",
        content: "Python is one of the most popular programming languages for data science. This blog introduces you to Python libraries like NumPy, Pandas, and Matplotlib, which are essential for data analysis and visualization.",
        image: "https://tse3-mm.cn.bing.net/th/id/OIP-C.JF5LAyPzzwgiCe_AjKH7IgHaD4?rs=1&pid=ImgDetMain",
        author: "Charlie Davis",
        date: "2023-09-10",
        tags: ["Python", "Data Science"],
        likes: 150,
        isBookmarked: false
    },
    {
        id: 6,
        title: "Mastering Git and GitHub",
        content: "Git is a version control system that helps you track changes in your code. GitHub is a platform for hosting and collaborating on Git repositories. This blog covers the basics of Git commands and how to use GitHub for collaboration.",
        image: "https://yun.irenzhi.cn/irenzhi/13760.jpg",
        author: "Eva Green",
        date: "2023-09-05",
        tags: ["Git", "GitHub"],
        likes: 130,
        isBookmarked: true
    },
    {
        id: 7,
        title: "Building RESTful APIs with Express",
        content: "Express is a minimal and flexible Node.js web application framework. This blog walks you through the process of building a RESTful API using Express, including routing, middleware, and handling HTTP requests.",
        image: "https://yun.irenzhi.cn/irenzhi/13760.jpg",
        author: "Frank White",
        date: "2023-08-30",
        tags: ["Express", "API"],
        likes: 100,
        isBookmarked: false
    },
    {
        id: 8,
        title: "Introduction to Machine Learning",
        content: "Machine Learning is a subset of artificial intelligence that focuses on building systems that can learn from data. This blog provides an overview of key concepts like supervised learning, unsupervised learning, and neural networks.",
        image: "https://cdn.educba.com/academy/wp-content/uploads/2019/03/Introduction-To-Machine-Learning.jpg",
        author: "Grace Lee",
        date: "2023-08-25",
        tags: ["Machine Learning", "AI"],
        likes: 200,
        isBookmarked: true
    },
    {
        id: 9,
        title: "Advanced JavaScript Techniques",
        content: "Take your JavaScript skills to the next level with advanced techniques like closures, promises, async/await, and design patterns. This blog is perfect for developers looking to deepen their understanding of JavaScript.",
        image: "https://tse2-mm.cn.bing.net/th/id/OIP-C.5_Y5nHrP32w-0oYxJ1aDrQHaEK?rs=1&pid=ImgDetMain",
        author: "Henry Clark",
        date: "2023-08-20",
        tags: ["JavaScript", "Advanced"],
        likes: 90,
        isBookmarked: false
    },
    {
        id: 10,
        title: "Responsive Web Design Best Practices",
        content: "Learn how to create websites that look great on all devices. This blog covers responsive design principles, media queries, and tools like Flexbox and CSS Grid to build flexible layouts.",
        image: "https://example.com/images/responsive-design.jpg",
        author: "Ivy Adams",
        date: "2023-08-15",
        tags: ["Web Design", "Responsive"],
        likes: 140,
        isBookmarked: true
    },
    {
        id: 11,
        title: "Getting Started with Docker",
        content: "Docker is a platform for developing, shipping, and running applications in containers. This blog introduces Docker concepts, how to create Docker images, and how to manage containers.",
        image: "https://example.com/images/docker.jpg",
        author: "Jack Wilson",
        date: "2023-08-10",
        tags: ["Docker", "DevOps"],
        likes: 160,
        isBookmarked: false
    },
    {
        id: 12,
        title: "Introduction to GraphQL",
        content: "GraphQL is a query language for APIs that allows clients to request exactly the data they need. This blog covers the basics of GraphQL, including schemas, queries, and mutations.",
        image: "https://example.com/images/graphql.jpg",
        author: "Karen Hall",
        date: "2023-08-05",
        tags: ["GraphQL", "API"],
        likes: 95,
        isBookmarked: true
    },
    {
        id: 13,
        title: "Understanding Redux in React",
        content: "Redux is a state management library for JavaScript applications. This blog explains how to use Redux with React to manage complex state in large applications.",
        image: "https://example.com/images/redux-react.jpg",
        author: "Liam Brown",
        date: "2023-07-30",
        tags: ["Redux", "React"],
        likes: 110,
        isBookmarked: false
    },
    {
        id: 14,
        title: "Building Scalable Microservices",
        content: "Microservices architecture allows you to build scalable and maintainable applications. This blog explores the principles of microservices, how to design them, and tools for implementation.",
        image: "https://example.com/images/microservices.jpg",
        author: "Mia Davis",
        date: "2023-07-25",
        tags: ["Microservices", "Architecture"],
        likes: 180,
        isBookmarked: true
    },
    {
        id: 15,
        title: "Introduction to TypeScript",
        content: "TypeScript is a typed superset of JavaScript that adds static types to your code. This blog covers the basics of TypeScript, including types, interfaces, and how to use it with React.",
        image: "https://example.com/images/typescript.jpg",
        author: "Noah Green",
        date: "2023-07-20",
        tags: ["TypeScript", "JavaScript"],
        likes: 130,
        isBookmarked: false
    },
    {
        id: 16,
        title: "Best Practices for API Security",
        content: "API security is critical for protecting your data and services. This blog discusses best practices for securing APIs, including authentication, authorization, and encryption.",
        image: "https://example.com/images/api-security.jpg",
        author: "Olivia White",
        date: "2023-07-15",
        tags: ["API", "Security"],
        likes: 150,
        isBookmarked: true
    },
    {
        id: 17,
        title: "Getting Started with Kubernetes",
        content: "Kubernetes is an open-source platform for automating containerized applications. This blog introduces Kubernetes concepts, how to deploy applications, and manage clusters.",
        image: "https://example.com/images/kubernetes.jpg",
        author: "Paul Harris",
        date: "2023-07-10",
        tags: ["Kubernetes", "DevOps"],
        likes: 170,
        isBookmarked: false
    },
    {
        id: 18,
        title: "Introduction to Blockchain Technology",
        content: "Blockchain is a decentralized ledger technology that powers cryptocurrencies like Bitcoin. This blog explains the basics of blockchain, how it works, and its potential applications.",
        image: "https://example.com/images/blockchain.jpg",
        author: "Quinn Lee",
        date: "2023-07-05",
        tags: ["Blockchain", "Technology"],
        likes: 200,
        isBookmarked: true
    },
    {
        id: 19,
        title: "Building Real-Time Apps with WebSockets",
        content: "WebSockets enable real-time communication between clients and servers. This blog covers how to use WebSockets to build real-time applications like chat apps and live updates.",
        image: "https://example.com/images/websockets.jpg",
        author: "Ryan Clark",
        date: "2023-06-30",
        tags: ["WebSockets", "Real-Time"],
        likes: 120,
        isBookmarked: false
    },
    {
        id: 20,
        title: "Introduction to Cloud Computing",
        content: "Cloud computing allows you to access computing resources over the internet. This blog provides an overview of cloud services, including IaaS, PaaS, and SaaS, and how to get started with AWS.",
        image: "https://example.com/images/cloud-computing.jpg",
        author: "Sara Adams",
        date: "2023-06-25",
        tags: ["Cloud Computing", "AWS"],
        likes: 190,
        isBookmarked: true
    }
];

export default blogs;