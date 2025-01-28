window.addEventListener('load',()=>{
	todo.init();
});

const todo = {
	state: {
		app:null,
	},
	set() {
		this.state.app = Vue.createApp({
			data() {
				return {
					inputText: null,
					item: []
				}
			},
      methods: {
				add() {
					this.item.push({
						text: this.inputText,
						complete: false,
					});
					this.inputText = null;
				},
				remove() {

				},
				complete() {

				}
      },
    });
    this.state.app.mount('#app');
	},
	init() {
		this.set();
	}
}