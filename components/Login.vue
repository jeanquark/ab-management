<template>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="signUserIn()">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Username
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" v-model="form.email">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" v-model="form.password">
            </div>
            <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Sign In
                </button><br />
                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                </a>
            </div>
        </form>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					email: "john.doe@example.com",
					password: "secret"
				}
			};
		},
		methods: {
			async signUserIn() {
				try {
					console.log("signUserIn")
					const abc = await this.$store.dispatch(
						"firebase-auth/signUserIn",
						this.form
					)
					console.log('abc: ', abc)
				} catch (error) {
					console.log("error from client: ", error)
				}
			}
		}
	};
</script>

<style scoped>
</style>