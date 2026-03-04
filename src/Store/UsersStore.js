import { create } from "zustand";

 const useUsersStore = create((set) => ({
    users: [],

addNewUser: (newUser) => 
    set((state) => ({
    users:[...state.users, {...newUser, id:Date.now()}] 
})),

    handleDelete: (idDelete) => 
        set((state) => ({
           users: state.users.filter(
            (user) => user.id !== idDelete
           ) 
        }))




 }))

 export default useUsersStore