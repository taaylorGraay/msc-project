import { 
  Component, 
  Input,
  Output,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'bwm-rental-card',
  templateUrl: './rental-card.component.html',
  styleUrls: ['./rental-card.component.scss']
})
export class RentalCardComponent {

  @Input('rental') rental: any;
  @Input('childData') childData: number | undefined;

  @Output() childDataChange = new EventEmitter<number>();


  changeData() {
    this.childData = 100;
    this.childDataChange.emit(this.childData);
  }
}
