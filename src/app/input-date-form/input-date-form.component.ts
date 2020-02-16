import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-date-form',
  templateUrl: './input-date-form.component.html',
  styleUrls: ['./input-date-form.component.css']
})
export class InputDateFormComponent implements OnInit {
 public showButton: boolean;


 public constructor(
   private _element: ElementRef
    ) { }

   public ngOnInit(): void {
      const childNodesLength: number = this._element.nativeElement.parentElement.childNodes.length;
      this.showButton = childNodesLength > 3;

    }
public removeInputComponentHandler(): void {
  // fixme after removing last element 'one more date' button not working
  const thisElement: any = this._element.nativeElement;
 thisElement.parentElement.removeChild(thisElement);

}

}
