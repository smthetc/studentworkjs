// function randomInteger(min, max) {
//     var rand = min - 0.5 + Math.random() * (max - min + 1)
//     rand = Math.round(rand);
//     return rand;
//   }
//   ///////////////////////////////////////////////
//    var b = 1;
//    console.log("start");
//    var num = new Vue({
//         el: '#vivod',
//         data: {
//             message: 'число=',
//             number: b,
//             changing: ""
//         },
//         methods: {
//             randomize: function () {
//             this.number = randomInteger(1, 50)
//             }
//           }
//         })
//         ///////////////////////////////////////////////
// function badd() {
//     if(bad.seen == true){
//         bad.seen = false
//     }
//     else{
//         bad.seen = true
//     }
// }
// ///////////////////////////////////////////////
//         var bad = new Vue({
//             el: '#bad',
//             data: {
//               seen: false
//             }
//           })

// var bab = new Vue({
//     el: '#menu',
//     data: {
//         yey: 'bed'
//     },
//     methods: {
//         ye: function(jeba){
//             this.yey = jeba;
//             alert(jeba);
//         }
//     }
// })

// // var krik = new Vue({
// //     el: '#menu',
// //     data: {
// //       an: false

// //     }
// //   })

// //   function eee() {
// //     if(krik.an == true){
// //         krik.an = false
// //         console.log("1");
// //     } 
// //     else{
// //         krik.an = true
// //         console.log("2");
// //     }
// // }
// /////////////////////////////////////////////

// var mark = new Vue({
//     el: "#marko",
//     data: {
//         god: ""
//     }
//  })

// Vue.filter('currency', function (value) {
//     return '₽' + value.toFixed(2);
// });

// var demo = new Vue({
//     el: '#order',
//     data: {
//         services: [
//             {
//                 name: 'Помидоры',
//                 price: 300,
//                 active: false
//             }, {
//                 name: 'Яблоки',
//                 price: 400,
//                 active: false
//             }, {
//                 name: 'Огурцы',
//                 price: 250,
//                 active: false
//             }, {
//                 name: 'Баклажаны',
//                 price: 220,
//                 active: false
//             }, {
//                 name: 'Бананы',
//                 price: 220,
//                 active: false
//             }, {
//                 name: 'Гранаты',
//                 price: 220,
//                 active: false
//             }
//         ]
//     },
//     methods: {
//         toggleActive: function (s) {
//             s.active = !s.active;
//         },
//         total: function () {

//             var total = 0;

//             this.services.forEach(function (s) {
//                 if (s.active) {
//                     total += s.price;
//                 }
//             });
//             return total;
//         }

//     }
// });
var app = new Vue({
    el: '#gray',
    data: {
        newNumber: '',
        numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    },
    methods: {
        filter: function () {
            for (i = 0; i < this.numbers.length; i++) {
                if (this.numbers.indexOf(this.newNumber) == -1) {
                    this.numbers.push(this.newNumber);
                    break;
                }
                else {
                    break;
                }
            }
        }
    }
});