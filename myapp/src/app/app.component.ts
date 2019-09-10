import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-7';
  FormGroup: FormGroup;
  TotalRow: number;
  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.FormGroup = this._fb.group({
      itemRows: this._fb.array([this.initItemRow()]),
    });
  }

  initItemRow() {
    return this._fb.group({
      Name: [''],
      RollNo: [''],
      Class: [''],
      MobNo: [''],
    });
  }

  addNewRow() {
    const control = this.FormGroup.controls.itemRows as FormArray;
    control.push(this.initItemRow());
  }

  deleteRow(index: number ) {
    const control = this.FormGroup.controls.itemRows as FormArray;
    if (control != null) {
      this.TotalRow = control.value.length;
    }
    if (this.TotalRow > 1) {
      control.removeAt(index);
    } else {
      alert('one record is mendatory..!');
      return false;
    }
  }
}
