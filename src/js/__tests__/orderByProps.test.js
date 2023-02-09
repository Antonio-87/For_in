import orderByProps from '../orderByProps';

test.each([
    {
        data: {
            name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
        },
        expected: [
            { key: 'name', value: 'мечник' },
            { key: 'level', value: 2 },
            { key: 'attack', value: 80 },
            { key: 'defence', value: 40 },
            { key: 'health', value: 10 },
        ],
    },
])('order by props', ({ data, expected }) => {
    expect(orderByProps(data, ['name', 'level'])).toEqual(expected);
});

test.each([
    {
        data: {
            name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
        },
        expected: [
            { key: 'attack', value: 80 },
            { key: 'defence', value: 40 },
            { key: 'health', value: 10 },
            { key: 'level', value: 2 },
            { key: 'name', value: 'мечник' },
        ],
    },
])('order by props (options = [])', ({ data, expected }) => {
    expect(orderByProps(data, [])).toEqual(expected);
});
