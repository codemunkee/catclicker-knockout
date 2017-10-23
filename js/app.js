var Cat = function(data) {
    /* @param {Object} data - cat object w/ name, imgSrc, imgAttribution, and nickNames props */
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nickNames = ko.observableArray(data.nickNames);
    this.clickCount = ko.observable(0);

    this.level = ko.computed(function() {
        if (this.clickCount() < 10) {
            return 'Baby';
        } else {
            return 'Not a Baby';
        }
    }, this);
};

var ViewModel = function() {

    var tabby = { name: 'Tabby',
                  imgSrc: 'img/cat1.jpeg',
                  imgAttribution: 'https://static.pexels.com/photos/127028/pexels-photo-127028.jpeg',
                  nickNames: ['Billy', 'Barry', 'Bruce']
    };

    this.currentCat = ko.observable( new Cat(tabby) );

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

};

ko.applyBindings(new ViewModel());