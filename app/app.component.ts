import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {FavoriteComponent} from './favorite.component'
import {LikeComponent} from './like.component'
import {VoteComponent} from './vote.component'





@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular 2 App</h1>
        <courses></courses>
        <authors></authors>
        <favorite></favorite>
        <like [totalLikes]=tweet.totalLikes [isLiked]=tweet.isLiked></like>
        <vote [voteCount]=tweet.voteCount [myVote]=tweet.myVote 
        (vote)="onVote($event)"></vote>
        `,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent, LikeComponent, VoteComponent]

})
export class AppComponent { 
    tweet = {
        totalLikes : 10,
        isLiked : true,
        voteCount : 20,
        myVote : 0
    }
    onVote(event) {
        console.log(event);
    }
}