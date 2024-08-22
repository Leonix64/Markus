import { Injectable } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
  ) { }

  // Show Toast of success
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'success',
    });
    toast.present();
  }

  // Show Toast warning
  async presentToastWarning(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'warning',
    });
    toast.present();
  }

  // Show Toast error
  async presentToastError(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'danger',
    });
    toast.present();
  }

  // Show simple alert
  async presentAlert(header: string, message: string, buttons: any[] = ['OK']) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons,
    });
    await alert.present();
  }

  // Show confirm alert
  async presentConfirm(header: string, message: string, confirmHandler: () => void) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Confirmar',
          handler: () => {
            confirmHandler();
          },
        },
      ],
    });
    await alert.present();
  }
}
