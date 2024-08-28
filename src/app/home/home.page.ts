import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private detail: NavController) {}

items=[
  {
    id:1,
    name:'Product A',
    price:200,
    detail:'this is a Product',
    imageURL: 'https://static.zerochan.net/Jujutsu.Kaisen.full.3265140.jpg',
  },
  {
    id:2,
    name:'Product B',
    price:300,
    detail:'this is a Product',
    imageURL: 'https://media.cnn.com/api/v1/images/stellar/prod/200127110655-kobe-bryant-4-profile-shot.jpg?q=w_1110,c_fill',
  },
  {
    id:3,
    name:'Product C',
    price:250,
    detail:'this is a Product',
    imageURL: 'https://m.media-amazon.com/images/S/pv-target-images/7121df74ef91bb61c8ac6982dd5c6e00869cde8ececd8c172320c7651ba74d9a.jpg',
  },
  {
    id:4,
    name:'Product D',
    price:350,
    detail:'this is a Product',
    imageURL: 'https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABT-ts35ADL7SiYs55RSw8Vo9w8iSREkyFQVTh_9JxpB1t5v55rhTW6uz0AXRGjTCRdlQXqUdTeV0vo7-Ec7nlilvK-jKwcVQbWZv.jpg?r=509',
  },
]

gotoDetail(i:any){
  this.detail.navigateForward('/detail',{state:{i}})
}

}
