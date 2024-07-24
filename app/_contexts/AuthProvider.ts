// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useContext, createContext, useState } from "react";
// import { Link, router } from "expo-router";

// const AuthContext = createContext();

// const AuthProvider = ({ children }: any) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(AsyncStorage.getItem("token") || "");
//   const loginAction = async (data: any) => {
//     try {
//       const response = await fetch("your-api-endpoint/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });
//       const res = await response.json();
//       if (res.data) {
//         setUser(res.data.user);
//         setToken(res.token);
//         localStorage.setItem("site", res.token);
//         router.navigate("/dashboard");
//         return;
//       }
//       throw new Error(res.message);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;

// export const useAuth = () => {
//   return useContext(AuthContext);
// };
