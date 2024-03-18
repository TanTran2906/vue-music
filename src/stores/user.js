import { defineStore } from "pinia";
import { auth, usersCollection } from '@/includes/firebase'

export default defineStore("user", {
    state: () => ({
        userLoggedIn: false
    }),
    actions: {
        async register(values) {
            //Create user authentication = email + password
            await auth.createUserWithEmailAndPassword(values.email, values.password)

            //Create user
            await usersCollection.add({
                name: values.name,
                email: values.email,
                age: values.age,
                country: values.country
            })
            this.userLoggedIn = true
        }
    }

})