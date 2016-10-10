import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {FavoriteComponent} from './favorite.component'
import {LikeComponent} from './like.component'




@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular 2 App</h1>
        <courses></courses>
        <authors></authors>
        <favorite></favorite>
        <like [totalLikes]=tweet.totalLikes [isLiked]=tweet.isLiked></like>
        `,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent, LikeComponent]

})
export class AppComponent { 
    tweet = {
        totalLikes : 10,
        isLiked : true
    }
}