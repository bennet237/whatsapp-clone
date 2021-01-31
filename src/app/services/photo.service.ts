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
  public photos: Photo[] = [];
  private PHOTO_STORAGE: string = "photos";


  public async addNewToGallery() {/**Do research on async */
    //To take a photo
    const capturedPhoto = await Camera.getPhoto({/**Do research on Camera.getPhoto */
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100

    }) ;
  
    //create a data structure. Do research
    this.photos.unshift({
      filepath: "soon..",
      webviewPath: capturedPhoto.webPath
    });

      //Adding each picture to a key in a storage
      Storage.set({/**Do research on storage.set */
        key: this.PHOTO_STORAGE,
        value: JSON.stringify(this.photos)/*converting the photo into a json file*/
      });
  }
/**async prevents your application to freeze. It awaits for an instruction to complete while looking at other instructions */
  public async loadSaved() {
    const photoList = await Storage.get({
      key: this.PHOTO_STORAGE/**getting photo from key */
    });
    this.photos = JSON.parse(photoList.value) || [];/**getting value of key or an empty array */
    for (let photo of this.photos) {
      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: FilesystemDirectory.Data
      });
      photo.webviewPath = 'data:image/jpeg;base64,${readFile.data}';//converting to base 64
console.log(photo.webviewPath);
    }
  }
  
    constructor() {}
}

//create data structure
export interface Photo{
  filepath: string;
  webviewPath: string; 
}