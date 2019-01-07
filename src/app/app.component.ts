import { Component, OnInit } from '@angular/core';
declare var googleyolo: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
//   loadedFeature='recipe';

//   onNavigate(feature:string) {
// this.loadedFeature=feature;
//   }
ngOnInit() {
  const hintPromise = googleyolo.hint({
    supportedAuthMethods: [
       'https://accounts.google.com'
    ],
    supportedIdTokenProviders: [
    {
       uri: 'https://accounts.google.com',
       //clientId: '400646937789-ro45rolvpk12he8fmc2hl8stpkvcgu7u.apps.googleusercontent.com'
       clientId: '400646937789-humr06d93ibm9c35mc398gcti1s7lsrl.apps.googleusercontent.com'
    }
   ]
 });
}
}
