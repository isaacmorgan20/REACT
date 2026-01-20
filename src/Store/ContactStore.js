import { create } from "zustand";

const useContactStore = create((set) => ({
    users: [],

    addNewUser: (newUser) =>
        set((state) => ({
            users: [...state.users, { ...newUser, id: Date.now() }]
        })),

    handleDelete: (idDelete) =>
        set((state) => ({
            users: state.users.filter(
                (user) => user.id !== idDelete
            )
        })),

    updateUser: (id, updatedData) =>
        set((state) => ({
            // 🔁 SAME UPDATE LOGIC AS LOCAL STATE:
            // map loops through all students
            // if id matches → update
            // else → return student unchanged
            users: state.users.map((user) =>
                user.id === id
                    ? { ...user, ...updatedData }
                    : user
            ),
        })),
}))


export default useContactStore