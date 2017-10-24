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

    self.catList = new ko.observableArray([]);

    initialCats.forEach(function(catItem) {
        self.catList.push(new Cat(catItem));
    });

    self.currentCat = ko.observable(self.catList()[0]);

    self.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    self.setCurrentCat = function(cat) {
        // notice that we set the current cat by passing it in (it's a
        // variable wrapped in an observable function)
        self.currentCat(cat);
    };

};

ko.applyBindings(new ViewModel());