export const apiData = [
    /* Backend */
    {
        module: "Authentication & Authorization",
        apis: [
            { endpoint: "Login API", path: "/api/v1/auth/login", method: "POST", developer: "Thant Htoo Aung" },
            { endpoint: "Get Current User API", path: "/api/v1/auth/me", method: "GET", developer: "Thant Htoo Aung" },
            {
                endpoint: "Update User Profile",
                path: "/api/v1/auth/updateMe",
                method: "PATCH",
                developer: "Yan Thainkha Htet",
            },
            { endpoint: "Refresh Token", path: "/api/v1/auth/refresh", method: "POST", developer: "Thant Htoo Aung" },
            { endpoint: "Check Valid Email", path: "/api/v1/auth/forgot-password", method: "POST", developer: "Pan Thu" },
            { endpoint: "Verify OTP", path: "/api/v1/auth/verify-otp", method: "POST", developer: "Pan Thu" },
            { endpoint: "Reset Password", path: "/api/v1/auth/reset-password", method: "POST", developer: "Pan Thu" },
            { endpoint: "Logout", path: "/api/v1/auth/logout", method: "POST", developer: "Thant Htoo Aung" },
        ],
    },
    {
        module: "User CRUD",
        apis: [
            {
                endpoint: "Create User",
                path: "/api/v1/users",
                method: "POST",
                developer: "Kyaw Thuya, Thant Htoo Aung, Yan Thainkha Htet",
            },
            { endpoint: "Get All Users", path: "/api/v1/users", method: "GET", developer: "Kyaw Thuya, Thant Htoo Aung" },
            { endpoint: "Get User By ID", path: "/api/v1/users/{id}", method: "GET", developer: "Kyaw Thuya" },
            { endpoint: "Update User", path: "/api/v1/users/{id}", method: "PUT", developer: "Yan Thainkha Htet" },
            {
                endpoint: "Check Username Exists",
                path: "/api/v1/users/username-exists",
                method: "GET",
                developer: "Thant Htoo Aung",
            },
            {
                endpoint: "Get name count by name",
                path: "/api/v1/users/name-exists?name={name}",
                method: "GET",
                developer: "Thant Htoo Aung",
            },
            {
                endpoint: "Delete User",
                path: "/api/v1/users/{id}",
                method: "DELETE",
                developer: "Kyaw Thuya, Thant Htoo Aung",
            },
            { endpoint: "Get Count By Name", path: "/api/v1/users/name-exists", method: "GET", developer: "Thant Htoo Aung" },
            {
                endpoint: "Change Password",
                path: "/api/v1/users/change-password",
                method: "POST",
                developer: "Thant Htoo Aung",
            },
            {
                endpoint: "Reset Password",
                path: "/api/v1/users/reset-password",
                method: "POST",
                developer: "Thant Htoo Aung",
            },
            {
                endpoint: "Change User Status",
                path: "/api/v1/users/change-status/{id}",
                method: "POST",
                developer: "Thant Htoo Aung",
            },
        ],
    },
    {
        module: "Allocation",
        apis: [
            {
                endpoint: "Allocate Tutor and Student",
                path: "/api/v1/allocations",
                method: "POST",
                developer: "Thant Htoo Aung",
            },
            {
                endpoint: "Deallocate Tutor and Student",
                path: "/api/v1/allocations/deallocate?studentId={studentId}&tutorId={tutorId}",
                method: "DELETE",
                developer: "Thant Htoo Aung",
            },
            {
                endpoint: "Transfer Students",
                path: "/api/v1/allocations/transfer",
                method: "POST",
                developer: "Thant Htoo Aung",
            },
            {
                endpoint: "Get Students by Tutor",
                path: "/api/v1/allocations/tutor/{tutorId}",
                method: "GET",
                developer: "Thant Htoo Aung",
            }
        ],
    },
    {
        module: "Course CRUD",
        apis: [
            { endpoint: "Create Course(s)", path: "/api/v1/courses", method: "POST", developer: "Kyaw Thuya" },
            { endpoint: "Get All Courses", path: "/api/v1/courses", method: "GET", developer: "Kyaw Thuya" },
            { endpoint: "Get Course By ID", path: "/api/v1/courses/{id}", method: "GET", developer: "Kyaw Thuya" },
            { endpoint: "Update Course", path: "/api/v1/courses/{id}", method: "PATCH", developer: "Kyaw Thuya" },
            { endpoint: "Delete Course", path: "/api/v1/courses/{id}", method: "DELETE", developer: "Kyaw Thuya" },
        ],
    },
    {
        module: "Specialization CRUD",
        apis: [
            {
                endpoint: "Create Specialization(s)",
                path: "/api/v1/specializations",
                method: "POST",
                developer: "Yan Thainkha Htet",
            },
            {
                endpoint: "Get All Specializations",
                path: "/api/v1/specializations",
                method: "GET",
                developer: "Yan Thainkha Htet",
            },
            {
                endpoint: "Get Specialization By ID",
                path: "/api/v1/specializations/{id}",
                method: "GET",
                developer: "Yan Thainkha Htet",
            },
            {
                endpoint: "Update Specialization",
                path: "/api/v1/specializations/{id}",
                method: "PATCH",
                developer: "Yan Thainkha Htet",
            },
            {
                endpoint: "Delete Specialization",
                path: "/api/v1/specializations/{id}",
                method: "DELETE",
                developer: "Yan Thainkha Htet",
            },
        ],
    },
    {
        module: "Department CRUD",
        apis: [
            { endpoint: "Create Department(s)", path: "/api/v1/departments", method: "POST", developer: "Thant Htoo Aung" },
            { endpoint: "Get All Departments", path: "/api/v1/departments", method: "GET", developer: "Thant Htoo Aung" },
            {
                endpoint: "Get Department By ID",
                path: "/api/v1/departments/{id}",
                method: "GET",
                developer: "Thant Htoo Aung",
            },
            { endpoint: "Update Department", path: "/api/v1/departments/{id}", method: "PATCH", developer: "Thant Htoo Aung" },
            {
                endpoint: "Delete Department",
                path: "/api/v1/departments/{id}",
                method: "DELETE",
                developer: "Thant Htoo Aung",
            },
        ],
    },
    {
        module: "Event CRUD",
        apis: [
            { endpoint: "Create Event", path: "/api/v1/events", method: "POST", developer: "Kyaw Thuya" },
            { endpoint: "Get All Events", path: "/api/v1/events", method: "GET", developer: "Kyaw Thuya" },
            { endpoint: "Get Event By ID", path: "/api/v1/events/{id}", method: "GET", developer: "Kyaw Thuya" },
            { endpoint: "Update Event", path: "/api/v1/events/{id}", method: "PATCH", developer: "Kyaw Thuya" },
            { endpoint: "Delete Event", path: "/api/v1/events/{id}", method: "DELETE", developer: "Kyaw Thuya" },
        ],
    },
    {
        module: "Messaging",
        apis: [
            { endpoint: "Create Chat Room", path: "/api/v1/chat/room", method: "POST", developer: "Thant Htoo Aung" },
            {
                endpoint: "Implementation Handler for WebSocket",
                path: "WebSocket",
                method: "-",
                developer: "Thant Htoo Aung",
            },
            {
                endpoint: "Get All Chatrooms by User ID",
                path: "/api/v1/chat/rooms?userId={userId}",
                method: "GET",
                developer: "Thant Htoo Aung",
            },
            {
                endpoint: "Get All Messages by Chat Room ID",
                path: "/api/v1/chat/rooms/{id}/messages",
                method: "GET",
                developer: "Thant Htoo Aung",
            },
            {
                endpoint: "Send Message",
                path: "ws://localhost:3000/ws-chat",
                method: "WebSocket",
                developer: "Thant Htoo Aung",
            },
        ],
    },
    {
        module: "Email Notification",
        apis: [
            {
                endpoint: "Send email notification in user creation method",
                path: "Create User Method",
                method: "-",
                developer: "Thant Htoo Aung",
            },
            { endpoint: "Send email for allocation", path: "Allocation Method", method: "-", developer: "Thant Htoo Aung" },
            {
                endpoint: "Send email notification for student inactivity for 28 days",
                path: "@Scheduler",
                method: "-",
                developer: "Yan Thainkha Htet",
            },
        ],
    },
    {
        module: "Activity Log",
        apis: [
            { endpoint: "Logic to Log user interaction", path: "-", method: "-", developer: "Thant Htoo Aung" },
            { endpoint: "Get All Activity Logs", path: "/api/v1/visit-logs", method: "GET", developer: "Thant Htoo Aung" },
        ],
    },
    {
        module: "Document Upload",
        apis: [
            { endpoint: "Upload Document", path: "/api/v1/media", method: "POST", developer: "Kyaw Thuya" },
            { endpoint: "Get All Documents", path: "/api/v1/media", method: "GET", developer: "Kyaw Thuya" },
            { endpoint: "Get Document By ID", path: "/api/v1/media/{id}", method: "GET", developer: "Kyaw Thuya" },
            { endpoint: "Update Document", path: "/api/v1/media/{id}", method: "PATCH", developer: "Kyaw Thuya" },
            { endpoint: "Delete Document", path: "/api/v1/media/{id}", method: "DELETE", developer: "Kyaw Thuya" },
        ],
    },
    {
        module: "Blog",
        apis: [
            { endpoint: "Create Blog", path: "/api/v1/blogs", method: "POST", developer: "Thant Htoo Aung" },
            { endpoint: "Get Feed or Get my Blogs", path: "/api/v1/blogs/mine", method: "GET", developer: "Thant Htoo Aung" },
            { endpoint: "Get Blog By ID", path: "/api/v1/blogs/{id}", method: "GET", developer: "Thant Htoo Aung" },
            { endpoint: "Update Blog", path: "/api/v1/blogs/{id}", method: "PATCH", developer: "Thant Htoo Aung" },
            { endpoint: "Delete Blog", path: "/api/v1/blogs/{id}", method: "DELETE", developer: "Thant Htoo Aung" },
        ],
    },
    {
        module: "React",
        apis: [
            {
                endpoint: "Give Reaction / Undo Reaction",
                path: "/api/v1/reacts",
                method: "POST",
                developer: "Thant Htoo Aung",
            },
        ],
    },
    {
        module: "Comment",
        apis: [
            { endpoint: "Create Comment", path: "/api/v1/comments", method: "POST", developer: "Thant Htoo Aung" },
            { endpoint: "Get Comment By ID", path: "/api/v1/comments/{id}", method: "GET", developer: "Thant Htoo Aung" },
            { endpoint: "Update Comment", path: "/api/v1/comments/{id}", method: "PATCH", developer: "Thant Htoo Aung" },
            { endpoint: "Delete Comment", path: "/api/v1/comments/{id}", method: "DELETE", developer: "Thant Htoo Aung" },
        ],
    },
    {
        module: "Dashboard",
        apis: [
            {
                endpoint: "Get Dashboard Data for Admin & Staff Roles",
                path: "/api/v1/admin/dashboard",
                method: "GET",
                developer: "Yan Thainkha Htet",
            },
            {
                endpoint: "Get Tutor by Student ID",
                path: "/api/v1/student/dashboard/{userId}",
                method: "GET",
                developer: "Yan Thainkha Htet, Thant Htoo Aung",
            },
            {
                endpoint: "Get Students by Tutor ID",
                path: "/api/v1/tutor/dashboard/{userId}",
                method: "GET",
                developer: "Yan Thainkha Htet, Thant Htoo Aung",
            },
            {
                endpoint: "Get Unassigned Students for displaying Admin & Staff Dashboard",
                path: "/api/v1/admin/dashboard/get-unassigned-students",
                method: "GET",
                developer: "Yan Thainkha Htet",
            },
        ],
    },
    {
        module: "Report",
        apis: [
            {
                endpoint: "Get User Count By Browser",
                path: "/api/v1/admin/report/browser-count",
                method: "GET",
                developer: "Yan Thainkha Htet",
            },
            {
                endpoint: "Get Top Visited Routes",
                path: "/api/v1/admin/report/top-routes",
                method: "GET",
                developer: "Yan Thainkha Htet",
            },
            {
                endpoint: "Get Top 20 Visited Users",
                path: "/api/v1/admin/report/top20-visited-users",
                method: "GET",
                developer: "Yan Thainkha Htet",
            },
            {
                endpoint: "Get Most Active Users",
                path: "/api/v1/admin/report/most-active-users",
                method: "GET",
                developer: "Kyaw Thuya",
            },
            {
                endpoint: "Get Inactive Users between 7 from 28 days",
                path: "/api/v1/admin/report/inactivity-users-betweendates",
                method: "GET",
                developer: "Kyaw Thuya",
            },
        ]
    },
    {
        module: "RabbitMQ Integration",
        apis: [
            { endpoint: "Integrate all Request with RabbitMQ", path: "RabbitMQ", method: "-", developer: "Thant Htoo Aung" },
            { endpoint: "Integrate all Mail with RabbitMQ", path: "RabbitMQ", method: "-", developer: "Thant Htoo Aung" },
        ],
    },
    /* Backend */
]