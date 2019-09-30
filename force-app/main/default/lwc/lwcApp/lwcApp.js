import { LightningElement, track } from 'lwc';

export default class LwcApp extends LightningElement {

    name = 'Satya';
    description = 'Test';
    category = 'Mountain';
    material = 'Steel';
    price = '$2000';
    pictureUrl = 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';
    something = 'Test';

    @track
    ready = false;
    connectedCallback(){
            setTimeout(() => {
                this.ready = true;
            }, 3000);
    }
    disconnectedCallback(){
        console.log('Disconnected');
        
        
        setTimeout(() => {
            this.ready = false;
        }, 3000);
    }
}