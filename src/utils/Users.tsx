//Below is the logic to fetch all present users/friends/collaborators

// import { useEffect } from "react";


// Example data 
export type UserTypes = {
    name: string,
    email: string,
    id: string
}

export const usersData : UserTypes[] = [
    {
        id: "user101",
        email: "user101@example.com",
        name: "John Doe"
    },
    {
        id: "user102",
        email: "user102@example.com",
        name: "Jane Smith"
    },
    {
        id: "user103",
        email: "user103@example.com",
        name: "Michael Johnson"
    },
    {
        id: "user104",
        email: "user104@example.com",
        name: "Emily Davis"
    },
    {
        id: "user105",
        email: "user105@example.com",
        name: "Christopher Brown"
    },
    {
        id: "user106",
        email: "user106@example.com",
        name: "Olivia Wilson"
    },
    {
        id: "user107",
        email: "user107@example.com",
        name: "William Taylor"
    },
    {
        id: "user108",
        email: "user108@example.com",
        name: "Sophia Moore"
    },
    {
        id: "user109",
        email: "user109@example.com",
        name: "Ethan Anderson"
    },
    {
        id: "user110",
        email: "user110@example.com",
        name: "Isabella Thomas"
    }
];



// Custom hook to fetch all users

// export function useUsers() {
//     const [usersData, setUsersData] = useState([]);

//     useEffect(() => {
//         // Fetching data from server or API here
//         const fetchData = async () => {
//             try {
//                 const res = await fetch("/api/users");
//                 const data = await res.json();
//                 setUsersData(data);
//             } catch (error) {
//                 // Handle errors here
//                 console.error("Error fetching data:", error);
//             }
//         };

//         fetchData();
//     }, [])
    
//     return usersData
// }