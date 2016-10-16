import {Component, Input} from 'angular2/core'

@Component({
    selector: 'zippy',
    template: `
    <div>
        <div>
            <div (click)="onClick()">{{ title }}    
            <i class='glyphicon' [ngClass]="{
                'glyphicon-chevron-down': !isSelected,
                'glyphicon-chevron-up': isSelected
            }">
            </i>
            </div>
        </div>
        <div [hidden]="!isSelected">
            <ng-content></ng-content>
        </div>    
    </div>    
        `,
})
export class ZippyComponent {
    @Input() title;
    isSelected = false;
    onClick() {
        this.isSelected = !this.isSelected;
    }
}