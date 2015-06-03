describe('Pager', function () {
    var pager;

    beforeEach(function () {
        pager = new Pager();
    });

    describe('total', function () {
        it('should display proper count', function () {
            // Arrange
            pager.data([1, 2, 3, 4, 5, 6, 7, 8]);

            // Act
            var result = pager.total();

            // Assert
            expect(result).toBe(8);
        });
    });

    describe('pageMessage', function () {
        it('should display proper message for page one', function () {
            // Arrange
            pager.data([1, 2, 3, 4, 5, 6, 7, 8]);

            // Act
            var result = pager.pageMessage();

            // Assert
            expect(result).toBe('Viewing items 1 - 8 of 8');
        });
    });
});