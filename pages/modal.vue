<template>
  <div class="text-grey-darkest">
  <div id="app">
    <div class="m-12 tracking-wide leading-loose">
      <button class="bg-grey-lighter flex-1 border-b-2 md:flex-none border-grey ml-2 hover:bg-grey-lightest text-grey-darkest font-bold py-4 px-6 rounded" @click="toggleModal">
                    Question
                </button>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
    <div v-if="modal" @click.self="toggleModal" class="animated fadeIn fixed z-50 pin overflow-auto bg-smoke-dark flex">
      <div class="animated fadeInUp fixed shadow-inner max-w-md md:relative pin-b pin-x align-top m-auto justify-end md:justify-center p-8 bg-white md:rounded w-full md:h-auto md:shadow flex flex-col">
        <h2 class="text-4xl text-center font-hairline md:leading-loose text-grey md:mt-8 mb-4">Question!</h2>
        <p class="text-xl leading-normal mb-8 text-center">
          Are you enjoying Tailwind CSS?
        </p>
        <div class="inline-flex justify-center">
          <button @click="toggleModal" class="bg-grey-lighter flex-1 border-b-2 md:flex-none border-green ml-2 hover:bg-green-lightest text-grey-darkest font-bold py-4 px-6 rounded">
                            Absolutely
                        </button>
          <button @click="toggleModal" class="bg-grey-lighter flex-1 md:flex-none border-b-2 border-red ml-2 hover:bg-red-lightest text-grey-darkest font-bold py-4 px-6 rounded">
                            Not so much
                        </button>
        </div>
        <span @click="toggleModal" class="absolute pin-t pin-r pt-4 px-4">
                        <svg class="h-12 w-12 text-grey hover:text-grey-darkest" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                    </span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    data () {
      return {
        modal: false
      }
    },
    methods: {
      toggleModal() {
        this.modal = !this.modal
      }
    }
  }
</script>

<style scoped>
  
</style>