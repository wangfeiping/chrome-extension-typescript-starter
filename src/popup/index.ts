import Vue from 'vue'
import root from './root.vue'
import * as ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Cryptoicon from 'vue-cryptoicon';
import {DrawerLayout} from 'vue-drawer-layout'
Vue.component(DrawerLayout.name, DrawerLayout)

import Unicon from 'vue-unicons'
import { uniAngleDoubleRight,
   uniAngleDoubleLeft,
    uniConstructor,
  uniCarWash } from 'vue-unicons/src/icons'

Unicon.add([uniAngleDoubleRight, uniAngleDoubleLeft, uniConstructor, uniCarWash])
Vue.use(Unicon)

// import Avatars from '@dicebear/avatars';
// import sprites from '@dicebear/avatars-bottts-sprites';

// let options = {
     
//   // Possible values: amber, blue, blueGrey, brown, cyan, deepOrange, deepPurple, agreenmber, grey, indigo, lightBlue, lightGreen, lime, orange, pink, purple, red, teal, yellow
//   colors: [], 

//   // Possible values: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
//   primaryColorLevel: 600,

//   // Possible values: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
//   secondaryColorLevel: 400,

//   // in percent
//   colorful: 100,
//   mouthChance: 100,
//   sidesChance: 100,
//   textureChance: 50,
//   topChange: 100,

// };
// let avatars = new Avatars(sprites());
// let svg = avatars.create('custom-seed');
// // console.log("svg: "+svg)
// Vue.component('avatar', {
//   template: '<img height="100vw" src="https://avatars.dicebear.com/v2/bottts/example.svg?options[colors][]=cyan" alt="Avatar" >'
//   // template: svg
// });
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
