var Cat = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/cat1.jpeg');
    this.imgAttribution = ko.observable('https://static.pexels.com/photos/127028/pexels-photo-127028.jpeg');
    this.nickNames = ko.observableArray(['Billy', 'Barry', 'Bruce']);

    var level = ko.computed(function() {
        if (this.clickCount() < 10) {
            return 'Baby';
        } else {
            return 'Not a Baby';
        }
    }, this);
};

var ViewModel = function() {

    this.currentCat = ko.observable( new Cat() );

    this.incrementCounter = function() {
        this.currentCat().clickCount(this.currentCat().clickCount() + 1);
    };

};

ko.applyBindings(new ViewModel());