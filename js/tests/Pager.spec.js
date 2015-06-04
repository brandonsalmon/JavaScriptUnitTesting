describe('Pager', function () {
    var pager;

    beforeEach(function () {
        pager = new Pager();
    });

    describe('previousPage', function () {
        it('should not go less than page one', function () {
            // Arrange
            pager.data([1, 2, 3, 4, 5, 6, 7, 8]);
            pager.page(1);

            // Act
            pager.previousPage();

            // Assert
            expect(pager.page()).toBe(1);
        });
    });    

    describe('nextPage', function () {
        it('should not go past the last page', function () {
            // Arrange
            pager.data([1, 2, 3, 4, 5, 6, 7, 8]);
            pager.page(1);

            // Act
            pager.nextPage();

            // Assert
            expect(pager.page()).toBe(1);
        });
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

    describe('pages', function () {
        it('should display two befor and two after the current page', function () {
            // Arrange
            pager.data([1, 2, 3, 4, 5, 6, 7, 8]);
            pager.pageSize(1);
            pager.page(4);

            // Act
            var result = pager.pages();

            // Assert
            expect(result).toEqual(jasmine.arrayContaining([2, 3, 4, 5, 6]));
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