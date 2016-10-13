import {Component, Input} from 'angular2/core'
import {LikeComponent} from './like.component'


@Component({
    selector: 'tweet',
    template: `
    <div class="media" *ngFor="#tweet of tweets">
        <div class="media-left">
            <a href="#">
            <img class="media-object" src="http://lorempixel.com/100/100/people/{{tweets.indexOf(tweet)+1}}">
            </a>
        </div>
        <div class="media-body">
            <h4 class="media-heading">{{ tweet.heading }} {{ tweet.username }}</h4>
            {{ tweet.text }}
            <like [totalLikes]=tweet.totalLikes [isLiked]=false></like>
        </div>
    </div>
    `,
    styles: [`
    `],
    directives: [LikeComponent]    
})
export class TweetComponent {
    @Input() tweets;
}