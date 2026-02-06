import { create } from "zustand";
import { db } from "../Service/firebase";
import { addDoc, collection, doc, getDocs, deleteDoc, updateDoc } from "firebase/firestore";

const useContactStore = create((set) => ({
    users: [],

    // fetchUser: async () => {
    //     const snapShot = await getDocs(collection(db, "users"))
    //     const userData = snapShot.docs.map((docSnap) => ({
    //         id: docSnap.id,...docSnap.data()
    //     }))
    //     set({users: userData})
    // },

    // addNewUser: async (user) => {
    // const docRef = await addDoc(collection(db,"users"), user )
    // set({
    //     users: [...get().users, {id: docRef.id, ...user}]
    // })
    // },

    fetchUser: async () => {
        const snapShot = await getDocs(collection(db, "users"))
        const userData = snapShot.docs.map((docSnap) => ({
            id: docSnap.id, ...docSnap.data()
        }))
        set({ users: userData })
    },

    addNewUser: async (user) => {
        const docRef = await addDoc(collection(db, "users"), user)
        set((state) => ({
            users: [...state.users, { id: docRef.id, ...user }]
        }))
    },


    // addNewUser: (addUser) => 
    //  set((state) => ({
    //     users: [...state.users, {...addUser, id: Date.now()}]
    //  })),    


    // =======================
    //      METHOD 1
    // ========================
    deleteUser: async (id) => {
        const userRef = doc(db, "users", id)
        await deleteDoc(userRef)
        set((state) => ({
            users: state.users.filter(user => user.id !== id)
        }))
    },

    // =======================
    //      METHOD 2
    // ========================
    //   deleteUser: async(id) => {
    //     const userRef = doc(db, "users", id)
    //     await deleteDoc(userRef)
    //     set({
    //         users: get().users.filter(user => user.id !== id)
    //     }))
    //  },



    //  deleteUser: (id) =>
    //     set((state) => ({
    //         users: state.users.filter(
    //             (user) => user.id !== id
    //         )
    //     })),


    //  working for zustand
    // updateUser: (id, updatedData) => 
    //     set((state) => ({
    //         users: state.users.map(
    //             (user) => user.id === id
    //             ? {...user, ...updatedData}
    //             : user
    //         )
    //     })),

    // =======================
    //      METHOD 1
    // ========================

    updateUser: async (id, updatedData) => {
        const userRef = doc(db, "users", id)
        await updateDoc(userRef, updatedData)
        set((state) => ({
            users: state.users.map((user) => user.id === id ? { ...user, ...updatedData } : user)
        }))
    },


    // =======================
    //      METHOD 2
    // ========================

    //  updateUser: async(id, updatedData) => {
    //     const userRef = doc(db, "users", id)
    //     await updateDoc(userRef, updatedData)
    //     set({
    //         users: get().users.map((user) => 
    //         user.id === id ? {...user, ...updatedData}: user)
    //     }))
    // }

}))

export default useContactStore