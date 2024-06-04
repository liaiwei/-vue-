// import module
import { createApp } from 'vue';
import App from '@/App.vue';
import plugins from '@/plugins';

// import SensenUi from "../modules/sensen-ui";
import Transfer from "../modules/sensen-ui/Transfer";

const app = createApp(App);

app.use(plugins);
app.use(Transfer);
app.mount('#app');
