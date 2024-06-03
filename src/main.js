// import module
import { createApp } from 'vue';
import App from '@/App.vue';
import plugins from '@/plugins';

import SensenUi from "../modules/sensen-ui";

const app = createApp(App);

app.use(plugins);
app.use(SensenUi);
app.mount('#app');
