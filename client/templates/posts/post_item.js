/**
 * Created by mmagu_000 on 6/5/2015.
 */
Template.postItem.helpers({
    domain: function () {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    }
});

