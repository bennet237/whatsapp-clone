import { Injectable } from '@angular/core';
//import dependencies: Things system requires before it works


import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, CameraPhoto, CameraSource } from "@capacitor/core";
const {Camera, Filesystem, Storage} = Plugins;
/**Do more research on capacitor */

@Injectable({
  providedIn: 'root'
})
//code to store photos
export class PhotoService {

  public async addNewToGallery() {/**Do research on async */
    //To take a photo
    const capturedPhoto = await Camera.getPhoto({/**Do research on Camera.getPhoto */
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100

    }) ;
  }
    constructor() {}
}