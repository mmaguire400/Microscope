/**
 * Created by mmagu_000 on 6/5/2015.
 */
var postsData = [
    {
        title: 'Introducing Telescope',
        url: 'http://sachagreif.com/introducing-telescope/'
    },
    {
        title: 'Meteor',
        url: 'http://meteor.com'
    },
    {
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com'
    }
];

Template.postsList.helpers({
    posts: function()
    {
        return Posts.find();
    }
});

