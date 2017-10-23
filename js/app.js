var Cat = function(data) {
    /* @param {Object} data - cat object w/ name, imgSrc, imgAttribution, and nickNames props */
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nickNames = ko.observableArray(data.nickNames);
    this.clickCount = ko.observable(data.clickCount);

    this.level = ko.computed(function() {
        if (this.clickCount() < 10) {
            return 'Baby';
        } else {
            return 'Not a Baby';
        }
    }, this);
};

var initialCats = [
    {
        name: 'Tabby',
        imgSrc: 'img/cat1.jpeg',
        imgAttribution: 'https://static.pexels.com/photos/127028/pexels-photo-127028.jpeg',
        nickNames: ['Billy', 'Barry', 'Bruce'],
        clickCount: 0
    },
    {
        name: 'Freddy',
        imgSrc: 'img/cat2.jpeg',
        imgAttribution: 'https://www.google.com',
        nickNames: ['Sonny', 'Tina', 'Russell'],
        clickCount: 0
    }
];

var ViewModel = function() {

    var self = this;

    this.catList = new ko.observableArray([]);

    initialCats.forEach(function(catItem) {
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

};

ko.applyBindings(new ViewModel());