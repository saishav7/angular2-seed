import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {FavoriteComponent} from './favorite.component'
import {LikeComponent} from './like.component'
import {VoteComponent} from './vote.component'
import {TweetComponent} from './tweet.component'
import {ZippyComponent} from './zippy.component'






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

        <!-- <tweet [tweets]=tweets></tweet> -->
        <zippy title="this is the title">This is the body</zippy>
        <zippy title="testing zippy">Awesome! Zippy works...</zippy>
        `,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent, LikeComponent, VoteComponent, TweetComponent, ZippyComponent]

})
export class AppComponent { 
    tweet = {
        totalLikes : 10,
        isLiked : true,
        voteCount : 20,
        myVote : 0
    }

    tweets = [
        {
        totalLikes : 6,
        isLiked : true,
        heading : 'Heading1',
        username : 'user1',
        text : 'This is just a test'
    },
    {
        totalLikes : 0,
        isLiked : true,
        heading : 'Heading2',
        username : 'user2',
        text : 'This is just a test'
    },
    {
        totalLikes : 10,
        isLiked : true,
        heading : 'Heading3',
        username : 'user3',
        text : 'This is just a test'
    }
    ]
    onVote(event) {
        console.log(event);
    }
}