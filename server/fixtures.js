/**
 * Created by mmagu_000 on 6/7/2015.
 */

if (Posts.find().count() === 0)
{
    Posts.insert({
        title: 'Introducting Telescope',
        url: 'http://sachagreif.com/introducing-telescope/'
    });

    Posts.insert({
        title: 'Meteor',
        url: 'http://meteor.com'
    });

    Posts.insert({
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com'
    });
}