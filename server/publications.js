/**
 * Created by mmagu_000 on 6/7/2015.
 */
Meteor.publish('posts', function() {
    return Posts.find();
});