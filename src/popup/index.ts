import Vue from 'vue'
import root from './root.vue'
import * as ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Cryptoicon from 'vue-cryptoicon';
import {DrawerLayout} from 'vue-drawer-layout'
Vue.component(DrawerLayout.name, DrawerLayout)

import Unicon from 'vue-unicons'
import { uniAngleDoubleRight, uniAngleDoubleLeft } from 'vue-unicons/src/icons'

Unicon.add([uniAngleDoubleRight, uniAngleDoubleLeft])
Vue.use(Unicon)

// For all icons
// import icon from 'vue-cryptoicon/src/icons';

// Cryptoicon.add(icon);
// Vue.use(Cryptoicon);

// selective icons 
import { Btc, Eth, Xrp, Eos, Bnb, XXX } from 'vue-cryptoicon/src/icons';
Cryptoicon.add([Btc, Eth, Xrp, Eos, Bnb, XXX ]);
Vue.use(Cryptoicon, { size: '168', color: 'lightgrey', generic: false });

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({ // eslint-disable-line no-new
  el: '#root',
  render: h => h(root)
});
