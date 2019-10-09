<template>
    <div class="flex flex-wrap justify-center">
        <div class="w-full sm:w-1/2 bg-white justify-center p-4">
            <p class="text-black">
				text: {{ this.text }}<br /><br />
				message: {{ this.message }}<br /><br />
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
    </div>
</template>

<script>
	import { firestore } from '~/plugins/firebase.js'
	export default {
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
				snackbar: false
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
			}
		}
	}
</script>

<style scoped>
	
</style>