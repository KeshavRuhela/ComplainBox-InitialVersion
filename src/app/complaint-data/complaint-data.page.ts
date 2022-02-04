import { CameraResultType, CameraSource } from '@capacitor/camera';
import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';
// import {  } from '@angular/platform-browser';
// import { url } from 'inspector';
const {Camera} = Plugins;
let photoCaptured = false;
@Component({
  selector: 'app-complaint-data',
  templateUrl: './complaint-data.page.html',
  styleUrls: ['./complaint-data.page.scss'],
})
export class ComplaintDataPage implements OnInit {

  constructor( private sanitizer:DomSanitizer) { }

  ngOnInit() {
  }
  
  show(){
    if(document.getElementById('allRecord').style.display=="block"){
      document.getElementById('allRecord').style.display="none"
      console.log('If is executed');
    }
    else{
      document.getElementById('allRecord').style.display="block"
      console.log('Else is executed');
    }
  }
  
  photo : SafeResourceUrl;
  guestPicture: any;
  image: any;

  async takePicture(){
    try{
      const profilePicture = await Plugins.Camera.getPhoto({
        quality:100,
        allowEditing:false,
        // resultType:CameraResultType.Base64,
        resultType:CameraResultType.DataUrl,
        source:CameraSource.Camera,
        saveToGallery:true,
        photoCaptured : true,
      });
      // this.image = profilePicture;
      // this.guestPicture = profilePicture.base64String; 
      // this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(profilePicture && (profilePicture.Base64))
      this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(profilePicture && (profilePicture.dataUrl))
      // debugger;
      document.getElementById('image').style.display="block";
      document.getElementById('image2').style.display="block";
      document.getElementById('main').style.display="none";
      // if(photoCaptured==true){
      //   document.getElementById('image').style.display="block";
      // }
    }catch (error){
      console.error(error);
    }
  }
  photo2 : SafeResourceUrl;
  
  async takePicture2(){
    try{
      const profilePicture2 = await Plugins.Camera.getPhoto({
        quality:100,
        allowEditing:false,
        resultType:CameraResultType.DataUrl,
        source:CameraSource.Camera,
        saveToGallery:true,
        photoCaptured : true,
      });
      this.photo2 = this.sanitizer.bypassSecurityTrustResourceUrl(profilePicture2 && (profilePicture2.dataUrl))
      document.getElementById('image3').style.display="block";
      document.getElementById('image2').style.display="none";
      // if(photoCaptured==true){
      //   document.getElementById('image').style.display="block";
      // }
    }catch (error){
      console.error(error);
    }
  }
  
}
