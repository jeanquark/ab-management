<template>
	<div class="flex flex-wrap">
		<div class="w-full sm:w-1/6 hidden md:block bg-gray-400">
			<img src="~/static/images/paper.jpg" />
		</div>
		<div class="w-full md:w-2/3 bg-white-200 text-black p-5">
			<!-- <h1 class="text-secondary text-bold text-2xl text-center my-3">PRIVATE OFFICE</h1> -->
			<h1 class="text-secondary text-bold text-2xl text-center uppercase my-3">{{ $t('pages.private_office.title') }}</h1>
			
			<!-- <ul class="ml-5">
				<li>Want to retire in Thailand?</li>
				<li>Want to start a business in Bangkok?</li>
				<li>Want to invest in South-East Asia?</li>
			</ul> -->
			<ul class="ml-5">
				<li>{{ $t('pages.private_office.list_item1') }}</li>
				<li>{{ $t('pages.private_office.list_item2') }}</li>
				<li>{{ $t('pages.private_office.list_item3') }}</li>
			</ul>

			<!-- <p class="my-3">AB Management provides you with assistance and local insider information when you move outside of your comfort zone. We tailor our service to your personal requirements.</p> -->
			<p class="my-3">{{ $t('pages.private_office.paragraph1') }}</p>

			<!-- <p class="my-3">Our unique value proposition is a vertical service, monitoring every step from first contact in Europe to acquisition in Asia with support and advice on operations, logistics, legal and fiscal matters every step of the way.</p> -->
			<p class="my-3">{{ $t('pages.private_office.paragraph2') }}</p>

			<!-- <p class="my-3">Our office in Geneva, Switzerland and our representative office in Bangkok, Thailand combine efforts to best serve your needs.</p> -->
			<p class="my-3">{{ $t('pages.private_office.paragraph3') }}</p>

			<!-- <p class="my-3">All you have to do is ask… AB Management is here to meet your business and investment needs.</p> -->
			<p class="my-3">{{ $t('pages.private_office.paragraph4') }}</p>

			<!-- <p class="my-3">Peter D</p> -->
			<p class="my-3">{{ $t('pages.private_office.paragraph5') }}</p>
		</div>
		<div class="w-full sm:w-1/6 hidden md:block bg-gray-400">
			<img src="~/static/images/paper.jpg" />
		</div>
	</div>
</template>

<script>
	export default {
		layout: 'layoutFront',
		data () {
			return {

			}
		}
	}
</script>

<style scoped>
	ul {
  		list-style: none; /* Remove default bullets */
	}
	ul li::before {
  		content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  		color: theme('colors.secondary'); /* Change the color */
  		font-weight: bold; /* If you want it to be bold */
  		display: inline-block; /* Needed to add space between the bullet and the text */
  		width: 1em; /* Also needed for space (tweak if needed) */
  		margin-left: -1em; /* Also needed for space (tweak if needed) */
	}
</style>