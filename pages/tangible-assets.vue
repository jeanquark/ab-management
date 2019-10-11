<template>
	<div class="flex flex-wrap">
		<div class="w-full sm:w-1/6 hidden md:block">
			<img src="~/static/images/facade.jpg" />
		</div>
		<div class="w-full sm:w-2/3 bg-white-200 text-black p-5">
			<!-- <h2 class="text-2xl text-center text-secondary my-3">TANGIBLE ASSETS</h2> -->
			<h2 class="text-2xl text-center text-secondary uppercase my-3">{{ $t('pages.tangible_assets.title') }}</h2>
			
			<!-- <h3 class="text-xl text-secondary">COMMERCIAL PROPERTY HUNTER SERVICE</h3> -->
			<h3 class="text-xl text-secondary uppercase">{{ $t('pages.tangible_assets.subtitle1') }}</h3>

			<!-- <p class="mt-3">
				AB Management’s approach to real estate is based on cultivating a true understanding of the strategy and business plan of our clients. Every project we undertake is approached from the perspective of the client’s business and tailor made to ensure success within the tight timeframes needed to ensure the competitiveness of our clients. Our goal is to provide the most efficient and effective search, helping clients to save time and to navigate a complex market. A success fee is applicable.
			</p> -->
			<p class="mt-3">
				{{ $t('pages.tangible_assets.paragraph1') }}
			</p>

			<!-- <h3 class="text-xl text-secondary mt-3">ART, AN ALTERNATIVE ASSET CLASS</h3> -->
			<h3 class="text-xl text-secondary uppercase mt-3">{{ $t('pages.tangible_assets.subtitle2') }}</h3>

			<!-- <p class="">
				To sell and to invest in art is an art in itself. In 2011, the size of the art market was estimated at USD 60 billion by the European Fine Art Foundation. Investing in art is a solid investment choice as it never goes bankrupt, so if you love it, buy it. And if you choose well, one day you will be able to sell it for a profit. This is where we come in. When you are ready to sell part or all of your art collection and wish to avoid auctions, we can introduce you to potential buyers, collectors and UHNWI. Various possibilities are also available to protect the anonymity of our clients.
			</p> -->
			<p class="mt-3">
				{{ $t('pages.tangible_assets.paragraph2') }}
			</p>
		</div>
		<div class="w-full sm:w-1/6 hidden md:block">
			<img src="~/static/images/facade.jpg" />
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

</style>