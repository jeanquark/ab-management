<template>
    <!-- <div class="flex items-center justify-center h-screen"> -->
    <div class="flex items-center justify-center">
        <div class="container x-auto rounded-lg">
            <!-- <notifications group="foo" position="top right" /> -->
            <navbar />
            <nuxt />
            <bottom-nav />
        </div>
    </div>
</template>

<script>
    import Navbar from '~/components/Navbar'
    import BottomNav from '~/components/BottomNav'
	export default {
        head: {
            titleTemplate: '%s - i18n',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                { hid: 'description', name: 'description', content: 'AB Management' },
                { name: "robots", content: "noindex" },
            ]
        },
        // middleware: ['auth-check'],
        components: {
            Navbar,
            BottomNav
        },
		data () {
			return {

			}
		},
		computed: {
			availableLocales () {
    			return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
  			}
		}
	}
</script>

<style>
    .bm-menu {
        height: 100%; /* 100% Full-height */
        width: 0; /* 0 width - change this with JavaScript */
        position: fixed; /* Stay in place */
        z-index: 1000; /* Stay on top */
        top: 0;
        left: 0;
        background-color: yellow; /* Black*/
        overflow-x: hidden; /* Disable horizontal scroll */
        padding-top: 60px; /* Place content 60px from the top */
        transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }
    .bm-burger-bars {
        background-color: red;
    }
</style>
