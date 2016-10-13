System.register(['angular2/core', './courses.component', './authors.component', './favorite.component', './like.component', './vote.component', './tweet.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, authors_component_1, favorite_component_1, like_component_1, vote_component_1, tweet_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.tweet = {
                        totalLikes: 10,
                        isLiked: true,
                        voteCount: 20,
                        myVote: 0
                    };
                    this.tweets = [
                        {
                            totalLikes: 6,
                            isLiked: true,
                            heading: 'Heading1',
                            username: 'user1',
                            text: 'This is just a test'
                        },
                        {
                            totalLikes: 0,
                            isLiked: true,
                            heading: 'Heading2',
                            username: 'user2',
                            text: 'This is just a test'
                        },
                        {
                            totalLikes: 10,
                            isLiked: true,
                            heading: 'Heading3',
                            username: 'user3',
                            text: 'This is just a test'
                        }
                    ];
                }
                AppComponent.prototype.onVote = function (event) {
                    console.log(event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>My First Angular 2 App</h1>\n        <courses></courses>\n        <authors></authors>\n        <favorite></favorite>\n        <like [totalLikes]=tweet.totalLikes [isLiked]=tweet.isLiked></like>\n        <vote [voteCount]=tweet.voteCount [myVote]=tweet.myVote \n        (vote)=\"onVote($event)\"></vote>\n\n        <tweet [tweets]=tweets></tweet>\n        ",
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, favorite_component_1.FavoriteComponent, like_component_1.LikeComponent, vote_component_1.VoteComponent, tweet_component_1.TweetComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map