import { UpperCasePipe } from '@angular/common';
import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'course',
  imports: [UpperCasePipe],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  @Input() course: any;

  // Lifecycle hooks
  // 1. constructor function runs first when component is created
  constructor() {
    console.log('Course constructor');
  }

  // 2. ngOnChanges runs when @Input() properties change
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Course ngOnChanges', changes);
  }

  // 3. ngOnInit run only once after ngOnChanges: used to initialize component properties
  ngOnInit(): void {
    console.log('Course ngOnInit');
  }

  // 4. ngDoCheck runs after ngOnInit: used to detect and act upon changes that Angular doesn't detect on its own
  ngDoCheck(): void {
    console.log('Course ngDoCheck');
  }

  // 5. ngOnDestroy runs when we navigate away from a component
  ngOnDestroy(): void {
    console.log('Course ngOnDestroy');
  }
}
