<template>
	<div class="flex flex-wrap justify-center h-screen">
		<div class="w-full sm:w-1/2 bg-white justify-center p-5">
			<h2 class="text-2xl text-center text-secondary my-3">{{ $t('pages.contact.title') }}</h2>
			<form class="" @submit="onSubmit">
			  	<div class="flex flex-wrap my-2">
				    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
				      	<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="firstname">
					    	{{ $t('pages.contact.firstname') }}
				      	</label>
				      	<input id="firstname" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="John" v-model="contact.firstname">
				    </div>
				    <div class="w-full md:w-1/2 px-3">
				      	<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="lastname">
					        {{ $t('pages.contact.lastname') }}
				      	</label>
				      	<input id="lastname" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Doe" v-model="contact.lastname">
				    </div>
			  	</div>
			  	<div class="flex flex-wrap mb-2">
			    	<div class="w-full px-3">
			      		<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="phone">
			        		{{ $t('pages.contact.phone') }}
			      		</label>
			      		<input id="phone" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="******************" v-model="contact.phone">
			    	</div>
			  	</div>
			  	<div class="flex flex-wrap mb-2">
			    	<div class="w-full px-3">
			      		<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
			        		{{ $t('pages.contact.email') }}
			      		</label>
			      		<input id="email" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" placeholder="john.doe@example.com" v-model="contact.email">
			    	</div>
			  	</div>
			  	<div class="flex flex-wrap mb-2">
			  		<div class="w-full px-3">
				  		<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="message">
			  				{{ $t('pages.contact.message') }}
			  			</label>
			  			<textarea id="message" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows="3" placeholder="Enter your message here." v-model="contact.message"></textarea>
					</div>
				</div>
				<div class="flex flex-wrap mb-2 justify-center">
					<button type="submit" class="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded" :class="{ 'opacity-50 cursor-not-allowed hover:bg-primary': isSending }">
  						{{ $t('pages.contact.send') }}
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import Noty from 'noty'
	export default {
		layout: 'layoutFront',
		mounted () {
		},
		data () {
			return {
				isSending: false,
				contact: {
					firstname: '',
					lastname: '',
					phone: '',
					email: '',
					message: ''
				}
			}
		},
		methods: {
			clearForm() {
				for (let field in this.contact) {
					this.contact[field] = ''
				}
			},
			onSubmit(event) {
				console.log('onSubmit: ', event)
				event.preventDefault()
				this.isSending = true
				const config = {
    				headers: { 'Accept': 'application/json' }
				}
				let formData = new FormData()
				// const abc = this.$refs.contactForm
				// console.log('abc: ', abc)
				// const formData2 = new FormData(abc)
				// console.log('formData2: ', formData2)
				formData.append('fistname', this.contact.firstname)
				formData.append('last name', this.contact.lastname)
				formData.append('phone number', this.contact.phone)
				formData.append('email', this.contact.email)
				formData.append('message', this.contact.message)
				console.log('formData: ', formData)

				axios.post('https://usebasin.com/f/90925b0ec218.json', formData).then((response) => {
					console.log('response: ', response)
					this.clearForm()
					this.isSending = false
					new Noty({
						type: 'success',
						// text: 'Your message has been sent successfully!',
						text: this.$i18n.t('pages.contact.success'),
						timeout: 5000,
						theme: 'metroui'
					}).show()
				}).catch(error => {
					this.isSending = false
					console.log('error: ', error)
					new Noty({
						type: 'error',
						// text: 'Sorry, an error occured and your message could not be sent.',
						text: this.$i18n.t('pages.contact.error'),
						timeout: 5000,
						theme: 'metroui'
					}).show()
				})
			}
		}
	}
</script>
