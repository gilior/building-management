import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MetaDataService} from "../../services/meta-data.service";
import {Resolution} from "../../common/interfaces";

@Component({
  selector: 'app-invoice-producer',
  templateUrl: './invoice-producer.component.html',
  styleUrls: ['./invoice-producer.component.scss']
})
export class InvoiceProducerComponent implements OnInit, AfterViewInit {
  invoiceForm: FormGroup;
  apartments: Array<{ isChecked: boolean }> = Array(this.metaDataService.metaData.numberOfApartments).fill({isChecked: false});
  @ViewChild('toDate') toDateInput: ElementRef;
  @ViewChild('fromDate') fromDateInput: ElementRef;

  constructor(private fb: FormBuilder, private metaDataService: MetaDataService) {
    this.createForm();

  }

  get resolution(): { [id: number]: string }{
    return Resolution;
  }

  get apartmentsControl(): FormArray {
    return this.invoiceForm.get('apartments') as FormArray;
  };

  get fromMonth(): AbstractControl {
    return this.invoiceForm.get('fromMonth')
  }

  get fromYear(): AbstractControl {
    return this.invoiceForm.get('')
  }

  get toMonth(): AbstractControl {
    return this.invoiceForm.get('')
  }

  get toYear(): AbstractControl {
    return this.invoiceForm.get('')
  }

  get fromDate(): AbstractControl {
    return this.invoiceForm.get('fromDate')
  }

  get toDate(): AbstractControl {
    return this.invoiceForm.get('toDate')
  }


  ngOnInit() {
    console.log(this.metaDataService.metaData.numberOfApartments)
  }

  setAddresses() {
    const addressFGs = this.apartments.map(i => this.fb.group(i));
    const arr = this.fb.array(addressFGs);
    this.invoiceForm.setControl('apartments', arr);
  }

  // onFromMonth() {
  //   let left = this.fromMonth.split[0];
  //   let right = this.fromMonth.split[1];
  //   if (!left) return;
  //   if (!right) this.fromMonth = '0' + this.fromMonth;
  // }

  onSend() {
    console.log(this.invoiceForm.value)
  }

  onCheckAll(checked: Boolean) {
    this.apartmentsControl.controls.forEach(i => i.get('isChecked').setValue(checked));
  }

  onYear(value: String) {

  }

  ngAfterViewInit(): void {
    var month = ("0" + (new Date().getMonth()+1)).slice(-2);
    this.toDateInput.nativeElement.value = `${new Date().getFullYear()}-${month}`
    this.fromDateInput.nativeElement.value = `${new Date().getFullYear()}-${month}`
  }

  private createForm() {
    this.invoiceForm = this.fb.group({
      amount: [0, Validators.required],
      checkAll: [false],
      fromDate: [`${new Date().getFullYear()}-${new Date().getMonth()}`],
      toDate: [`${new Date().getFullYear()}-${new Date().getMonth()}`],
      resolution:[1]

    })
    this.setAddresses();

  }


}