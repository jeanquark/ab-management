<template>
    <div class="flex flex-wrap justify-center">
        <div class="w-full sm:w-1/2 bg-white justify-center p-4">
            <p class="text-black">
				text: {{ this.text }}<br /><br />
				message: {{ this.message }}<br /><br />
				loadedUser: {{ this.loadedUser }}<br /><br />
			</p>
            <div class="flex flex-wrap mb-2">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="message">
                        Your text
                    </label>
                    <textarea id="message" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows="5" v-model="text"></textarea>
                </div>
            </div>
            <div class="flex flex-wrap mb-2 justify-center">
                <button class="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded" @click="updatePost()">
                    Update
                </button>
            </div>
        </div>
		<div class="w-full justify-center p-4">
			<div class="flex flex-wrap justify-center my-3">
				<button class="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded" @click="showLogin = !showLogin">{{ showLogin ? 'Switch to register' : 'Switch to login' }}</button>
			</div>
			<div class="flex flex-wrap justify-center my-3">
				<login v-if="showLogin" />
				<register v-else/>
			</div>
		</div>
		<div class="w-full flex flex-wrap justify-center p-4">
			<button class="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded" @click="logout()">
				logout
			</button>
		</div>
    </div>
</template>

<script>
	import { firestore } from '~/plugins/firebase.js'
	import Register from '~/components/Register'
	import Login from '~/components/Login'
	export default {
		components: { Register, Login },
		layout: 'layoutFront',
		async mounted() {
			const post1 = await firestore
				.collection('posts')
				.doc('post1')
				.get()
			// console.log('post1: ', post1)
			if (post1.exists) {
				this.text = post1.data().content
			}
		},
		data() {
			return {
				text: '',
				message: '',
				snackbar: false,
				showLogin: true
			}
		},
		computed: {
			loadedUser() {
				return this.$store.getters['users/loadedUser']
			}
		},
		methods: {
			async updatePost() {
				try {
					await firestore
						.collection('posts')
						.doc('post1')
						.update({
							content: this.text
						})
					this.message = 'Successfull update!'
					this.snackbar = true
				} catch (error) {
					this.message = 'Sorry, an error occured.'
					this.snackbar = true
				} 
			},
			async logout () {
				await this.$store.dispatch('firebase-auth/signOut')
			}
		}
	}
</script>

<style scoped>
	
</style>