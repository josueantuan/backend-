import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  abrir:boolean=false;
  constructor(public navCtrl: NavController,private camera: Camera) {

  }
  probar(){
    this.abrir=true;
    this.camaraT(this.abrir);
  }
  camaraT(abrirT:boolean){
    
    if(abrirT==true){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
     console.log("Error en camara",JSON.stringify(err));
    });
  }else console.log("No se abrio la camara");}

}
