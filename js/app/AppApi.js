function AppApi() {
    var self = this;

    self.getData = function (success) {
        $.ajax({ url: "/Api/Data" }).success(success);
    };
};