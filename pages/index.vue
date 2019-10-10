<template>
	<div class="flex flex-wrap">
		<div class="w-full sm:w-1/6 hidden md:block bg-gray-400">
			<img src="~/static/images/handshake.jpg" />
		</div>
		<div class="w-full md:w-2/3 bg-white-200 text-black p-5 h-screen">
      		<h1>New website ab-management 3</h1>
			<!-- <h1 class="text-secondary text-bold text-2xl text-center my-3">AB MANAGEMENT</h1> -->
			<h1 class="text-secondary text-bold text-2xl text-center uppercase my-3">{{ $t('pages.homepage.title') }}</h1>
			<!-- <p class="my-3" v-html="$t('pages.homepage.html')"></p>
			<p><nuxt-link to="/">Homepage</nuxt-link></p>
			<p><a href="https://google.ch" target="_blank">Google</a></p> -->

			<!-- <p>AB Management is an independently owned business-based in Geneva, Switzerland, which offers exclusive consulting services to a discerning international clientele. Customer satisfaction is our guiding principle in consistently exceeding client’s expectations.</p> -->
			<p class="my-3">{{ $t('pages.homepage.paragraph1') }}</p>

			<!-- <p>With uncertain stock market returns and interest rates at their lowest in decades, we provide a full range of services to our clients, including those wanting to diversify their portfolio in a safe investment strategy or those now considering alternative investment avenues.</p> -->
			<p class="my-3">{{ $t('pages.homepage.paragraph2') }}</p>

			<!-- <p>The added value of AB Management is that we put the interests of our clients first by avoiding conflicts of interest and providing a transparent fee, which is our only source of income.</p> -->
			<p class="my-3">{{ $t('pages.homepage.paragraph3') }}</p>

			<!-- <p>As an independent company, we are able to work for the benefit of our clients and their investment objectives.</p> -->
			<p class="my-3">{{ $t('pages.homepage.paragraph4') }}</p>
		</div>
		<div class="w-full sm:w-1/6 hidden md:block bg-gray-400">
			<!-- <img src="~/static/images/handshake.jpg" /> -->
			<!-- <p v-html="rawHTML"></p><br /><br /> -->
			<h1>Nuxt i18n</h1><br /><br />
			<p>
				$i18n.locale.i18n: {{ this.$i18n.locale }}<br />
				availablesLocales: {{ availableLocales }}<br />
				{{ $t('welcome') }}<br />
				<nuxt-link
					v-for="locale in availableLocales"
					:key="locale.code"
					:to="switchLocalePath(locale.code)">{{ locale.name }}
				</nuxt-link>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	layout: 'layoutFront',
	mounted () {
		this.$noty.success('Welcome to AB Management!')
		// this.$noty.warning('Welcome to AB Management 2!')
	},
  	data () {
	  	return {
	  		rawHTML: '<b>Hello</b>'
	  	}
  	},
  	computed: {
	  	availableLocales () {
    		return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
  		}
  	}
}
</script>

<style scoped>

</style>
	