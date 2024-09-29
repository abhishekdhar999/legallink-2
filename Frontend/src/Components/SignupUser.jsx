// import React, { useState } from 'react';
// import axios from 'axios';
// export default function SignupUser() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         phoneNumber: '',
//         photo: '', // Optional if you allow users to upload an avatar
//         role: '' // Default role
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:3001/users/register',formData, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });

//             console.log(response)

//             if (response.status === 200) {
//                 alert('User created successfully!');
//                 // Optionally redirect or reset the form
//             } else {
//                 alert("error"); // Display the error message from the server
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             alert('An error occurred. Please try again.');
//         }
//     };

//     return (
//         <>
//             <div>
//                 <h1 className='text-4xl'>USER SIGNUP</h1>
//             </div>

//             <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
//                 <div className="relative z-0 w-full mb-5 group">
//                     <input
//                         type="text"
//                         name="name"
//                         id="floating_name"
//                         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none"
//                         placeholder=" "
//                         required
//                         value={formData.name}
//                         onChange={handleChange}
//                     />
//                     <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600">Name</label>
//                 </div>
//                 <div className="relative z-0 w-full mb-5 group">
//                     <input
//                         type="email"
//                         name="email"
//                         id="floating_email"
//                         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none"
//                         placeholder=" "
//                         required
//                         value={formData.email}
//                         onChange={handleChange}
//                     />
//                     <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600">Email address</label>
//                 </div>
//                 <div className="relative z-0 w-full mb-5 group">
//                     <input
//                         type="password"
//                         name="password"
//                         id="floating_password"
//                         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none"
//                         placeholder=" "
//                         required
//                         value={formData.password}
//                         onChange={handleChange}
//                     />
//                     <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600">Password</label>
//                 </div>
//                 <div className="relative z-0 w-full mb-5 group">
//                     <input
//                         type="tel"
//                         name="phoneNumber"
//                         id="floating_phone"
//                         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none"
//                         placeholder=" "
//                         required
//                         value={formData.phoneNumber}
//                         onChange={handleChange}
//                     />
//                     <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600">Phone number</label>
//                 </div>
//                 {/* Optional Avatar Upload */}
//                 <div className="relative z-0 w-full mb-5 group">
//                     <input
//                         type="file"
//                         name="photo"
//                         id="floating_avatar"
//                         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none"
//                         placeholder=" "
//                         onChange={handleChange}
//                         required
//                     />
//                     <label htmlFor="floating_avatar" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600">Upload Avatar</label>
//                 </div>

//                 <div className="relative z-0 w-full mb-5 group">
//                     <input
//                         type="text"
//                         name="role"
//                         id="floating_name"
//                         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none"
//                         placeholder="either write teacher or student "
//                         required
//                         value={formData.role}
//                         onChange={handleChange}
//                     />
//                     <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600">Role</label>
//                 </div>
//                 <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
//             </form>
//         </>
//     );
// }


import React, { useState } from 'react';
import axios from 'axios';

export default function SignupUser() {
    // Set state for form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
        avatar: null, // For file upload
        role: '',
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.type === 'file' ? e.target.files[0] : e.target.value,
        });
    };
    
    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare form data for sending as multipart/form-data
        const data = {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          phoneNumber: formData.phoneNumber,
          role: formData.role,
          // avatar: formData.avatar, // if you want to send the avatar file, you'll need to handle this separately
      };
console.log("data",data)

        try {
            // Send POST request to backend API
            const response = await axios.post('http://localhost:3001/users/register', data, {
                headers: {
 'Content-Type': 'application/json',
                },
            });

            // Handle successful response
            console.log("response 1",response.data);
            if (response.status !== 200) {
              alert('Failed to create user');
            } else {
              alert('user created successfully');
              window.location.href = '/';  // Redirect to chats page
            }
            alert('User registered successfully!');
        } catch (error) {
            // Handle error response
            console.error('Error registering user:', error);
            alert('Error registering user.');
        }
    };

    return (
        <div className='container'>
            <h1 className='text-4xl'>USER SIGNUP</h1>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="name"
                        id="floating_name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        onChange={handleInputChange}
                    />
                    <label
                        htmlFor="floating_name"
                        className="peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Name
                    </label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="email"
                        name="email"
                        id="floating_email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        onChange={handleInputChange}
                    />
                    <label
                        htmlFor="floating_email"
                        className="peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Email address
                    </label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="password"
                        name="password"
                        id="floating_password"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        onChange={handleInputChange}
                    />
                    <label
                        htmlFor="floating_password"
                        className="peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Password
                    </label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="tel"
                        name="phoneNumber"
                        id="floating_phone"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
                        placeholder=" "
                        // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        required
                        onChange={handleInputChange}
                    />
                    <label
                        htmlFor="floating_phone"
                        className="peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Phone number (123-456-7890)
                    </label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="file"
                        name="avatar"
                        id="floating_avatar"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
                        required
                        onChange={(e) => setFormData({ ...formData, avatar: e.target.files[0] })}

                    />
                    <label
                        htmlFor="floating_avatar"
                        className="peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Avatar
                    </label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="role"
                        id="floating_role"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
                        placeholder=" "
                        required
                        onChange={handleInputChange}
                    />
                    <label
                        htmlFor="floating_role"
                        className="peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Role
                    </label>
                </div>

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
