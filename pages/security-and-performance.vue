<template>
	<div class="flex flex-wrap h-screen">
		<div class="w-full sm:w-1/6 hidden md:block">
			<img src="~/static/images/stocks.jpg" />
		</div>
		<div class="w-full sm:w-2/3 bg-white-200 text-black p-5">
			<!-- <h2 class="text-2xl text-center text-secondary my-3">SECURITY & PERFORMANCE</h2> -->
			<h2 class="text-2xl text-center text-secondary uppercase my-3">{{ $t('pages.security_and_performance.title') }}</h2>

			<!-- <p class="my-3">AB Management offer individuals, family offices and institutions an opportunity to invest in specialised "tailor-made" real estate and private equity investments primarily from emerging markets in South East Asia.</p> -->
			<p class="my-3">{{ $t('pages.security_and_performance.paragraph1') }}</p>

			<!-- <p class="my-3">Our approach embraces a "value-based mindset" combined with an in
			depth analysis of the industry fundamentals and macro-economic trends. We believe in "emerging core" asset as a critical component of any well balanced investment portfolio.</p>-->
			<p class="my-3">{{ $t('pages.security_and_performance.paragraph2') }}</p>

			<!-- <p class="my-3">In evaluating private equity investments, we look for asset with stable and predictable cash flows, positive supply/demand fundamentals, a favorable demographic profile, and assets that have the potential to generate capital gains over an 2-3 year horizon.</p> -->
			<p class="my-3">{{ $t('pages.security_and_performance.paragraph3') }}</p>

			<!-- <h3 class="text-lg text-secondary mt-4 mb-2">OUR KEY INVESTMENT OBJECTIVES ARE:</h3> -->
			<h3 class="text-lg text-secondary mt-4 uppercase mb-2">{{ $t('pages.security_and_performance.subtitle') }}</h3>

			<!-- <ul class="ml-5">
				<li>Capital preservation</li>
				<li>Regular cash distribution</li>
				<li>Superior total return</li>
				<li>Protection against inflation</li>
				<li>Low correlation to economy and markets</li>
				<li>Sustainable development integration</li>
			</ul> -->
			<ul class="ml-5">
				<li>{{ $t('pages.security_and_performance.list_item1') }}</li>
				<li>{{ $t('pages.security_and_performance.list_item2') }}</li>
				<li>{{ $t('pages.security_and_performance.list_item3') }}</li>
				<li>{{ $t('pages.security_and_performance.list_item4') }}</li>
				<li>{{ $t('pages.security_and_performance.list_item5') }}</li>
				<li>{{ $t('pages.security_and_performance.list_item6') }}</li>
			</ul>
		</div>
		<div class="w-full sm:w-1/6 hidden md:block">
			<img src="~/static/images/stocks.jpg" />
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