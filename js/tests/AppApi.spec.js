describe('AppApi', function () {
    var appApi;

    beforeEach(function () {
        appApi = new AppApi();
    });

    describe('getData', function () {
        it('calls correct endpoint', function () {
            spyOn($, "ajax").and.returnValue({ success: function () { } });

            // Act
            appApi.getData();

            // Assert
            expect($.ajax).toHaveBeenCalledWith(jasmine.objectContaining({ url: "/Api/Data" }));
        });

        it('calls success', function () {
            var successSpy = jasmine.createSpy('successSpy');
            spyOn($, "ajax").and.returnValue({ success: successSpy });

            // Act
            appApi.getData();

            // Assert
            expect(successSpy).toHaveBeenCalled();
        });
    });
});