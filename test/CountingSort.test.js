const CountingSort = require('../chapter-08/CountingSort')
let input = [2, 5, 3, 0, 2, 3, 1, 3]
test('计数排序', () => {
    expect(CountingSort(input)).toEqual([
        0, 1, 2, 2,
        3, 3, 3, 5
    ])
})

