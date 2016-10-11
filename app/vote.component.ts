import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'vote',
    template: `
    <div>
    <i 
        class="glyphicon glyphicon-menu-up"
        [class.highlighted]="myVote == 1"
        (click)="onClickUp()"
    >
    </i>
    <span> {{ voteCount }} </span>
    <i 
        class="glyphicon glyphicon-menu-down"
        [class.highlighted]="myVote == -1"
        (click)="onClickDown()"
    >
    </i>
    </div>
    `,
    styles: [`
    .glyphicon-menu-up, .glyphicon-menu-down { 
        color: #ccc;
        cursor: pointer; 
    }
    .highlighted {
        color: orange;
    }
    .voter {
        width:20px;
        text-align:center;
        color:#999;
    }    
    `]    
})
export class VoteComponent {
    @Input() myVote = 0;
    @Input() voteCount = 0;

    @Output() vote = new EventEmitter();
    onClickUp() {
        if (this.myVote == 1) {
           return;
        } else {
            this.myVote += 1;   
            this.voteCount += 1;
        }    
        this.vote.emit({myVote : this.myVote});
    }
    onClickDown() {
        if (this.myVote == -1) {
            return;
        } else {
            this.myVote -= 1;
            this.voteCount -= 1;
        }    
        this.vote.emit({myVote : this.myVote});
    }
}