import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators,AbstractControl,FormControl} from '@angular/forms';

function skuValidator(control:FormControl){
  if(!control.value.match(/^123/)){
    return{invalidSku:true}
  }
}

@Component({
  selector: 'app-demo-form-sku-with-builder',
  templateUrl: './demo-form-sku-with-builder.component.html'
})
export class DemoFormSkuWithBuilderComponent implements OnInit {

  myForm:FormGroup;
  sku:AbstractControl;

  constructor(fb:FormBuilder) {
      this.myForm=fb.group({
        'sku':['ABC123',Validators.compose([Validators.required,skuValidator])]
      });

      this.sku=this.myForm.controls['sku'];

      this.sku.valueChanges.subscribe((value:string)=>{
        console.log('sku changed to:', value);
      });

      this.myForm.valueChanges.subscribe(form=>console.log('form changed to:', form));
   }

  ngOnInit() {
  }

  onSubmit(value:string):void{
    console.log('you submitted value: ', value);
  }

}
