function Pager() {
    var self = this;

    self.data = ko.observableArray();

    self.page = ko.observable(1);
    self.pageSize = ko.observable(25);

    self.total = ko.computed(function () {
        return self.data().length;
    });

    self.pageCount = ko.computed(function () {
        return Math.ceil(self.total() / self.pageSize());
    });

    self.pages = ko.computed(function () {
        var pages = [];

        for (var i = 1; i <= self.pageCount() ; i++) {
            pages.push(i);
        }

        return pages;
    });

    self.previousPage = function () {
        self.page(self.page() - 1);
    };
    self.nextPage = function () {
        self.page(self.page() + 1);
    };
    self.setPage = function (page) {
        self.page(page);
    };

    self.pageStartIndex = ko.computed(function () {
        return pageStartIndex = (self.page() - 1) * self.pageSize();
    });

    self.pageEndIndex = ko.computed(function () {
        return pageStartIndex = self.page() * self.pageSize();
    });

    self.pageData = ko.computed(function () {
        return self.data().slice(self.pageStartIndex(), self.pageEndIndex());
    });

    self.pageMessage = ko.computed(function () {
        return "Viewing items " + (self.pageStartIndex() + 1) + " - " + self.pageEndIndex() + " of " + self.total();
    });
}