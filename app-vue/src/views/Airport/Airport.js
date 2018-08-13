export default {
  name: 'airport',
  methods: {
   async showDialogAlert(){
     const actionSheetController = document.querySelector('ion-action-sheet-controller');
      await actionSheetController.componentOnReady();

      const actionSheet = await actionSheetController.create({
        buttons: [{
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      await actionSheet.present();
   },
    openActionSheet: function () {
      (async () => { console.log(await asyncFun()) })()
    }
  }
}
