window.addEventListener('load',()=>{
	todo.init();
});

const todo = {
	state: {
		app:null,
	},
	set() {
		this.state.app = Vue.createApp({
      methods: {
				inputText(e) {
					
				},
        template(e) {
					const _template = document.querySelector('template');
					const _html = _template.content.cloneNode(true);
					console.log(_html.querySelector('li'))

					document.querySelector('[data-task]').insertAdjacentHTML('beforeend',_html);
        },
      },
    });
    this.state.app.mount('#app');
	},
	init() {
		this.set();
	}
}