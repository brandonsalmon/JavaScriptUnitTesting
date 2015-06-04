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

        var minPage = Math.max(1, self.page() - 2);
        var maxPage = Math.min(self.pageCount(), self.page() + 2);

        for (var i = minPage; i <= maxPage ; i++) {
            pages.push(i);
        }

        return pages;
    });

    self.previousPage = function () {
        self.page(Math.max(self.page() - 1, 1));
    };
    self.nextPage = function () {
        self.page(Math.min(self.page() + 1, self.pageCount()));
    };
    self.setPage = function (page) {
        self.page(page);
    };

    self.pageStartIndex = ko.computed(function () {
        return (self.page() - 1) * self.pageSize();
    });

    self.pageEndIndex = ko.computed(function () {
        return Math.min(self.page() * self.pageSize(), self.total());
    });

    self.pageData = ko.computed(function () {
        return self.data().slice(self.pageStartIndex(), self.pageEndIndex());
    });

    self.pageMessage = ko.computed(function () {
        return "Viewing items " + (self.pageStartIndex() + 1) + " - " + self.pageEndIndex() + " of " + self.total();
    });
}