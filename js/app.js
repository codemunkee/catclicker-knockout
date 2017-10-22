var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/cat1.jpeg');
    this.imgAttribution = ko.observable('https://static.pexels.com/photos/127028/pexels-photo-127028.jpeg');

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

};

ko.applyBindings(new ViewModel());