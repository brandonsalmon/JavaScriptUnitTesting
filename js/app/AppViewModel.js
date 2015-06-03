function AppViewModel() {
    var self = this;

    self.api = new AppApi();

    self.pager = ko.observable(new Pager());

    self.loadData = function () {
        self.api.getData(function (data) {
            self.pager().data(data);
        });
    };
}