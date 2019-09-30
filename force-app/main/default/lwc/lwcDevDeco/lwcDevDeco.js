import { LightningElement, track, api } from 'lwc';
 
export default class LwcDevDeco extends LightningElement {

@track name;
@api age;
dob;

    handleChange(event){
        if (event.target.name == 'name'){
            console.log('name: ' + event.target.name);
            this.name = event.target.value;

        }
        if (event.target.name == 'age')
            this.age = event.target.value;
        
        if (event.target.name == 'dob')
            this.dob = event.target.value;
    }
}