var raphael = require('../index.js');

test('should path to curve', () => {
    var curve = raphael.path2curve( 'M 6,10 a 6 4 10 1 0 14,10' );
    expect( curve[0]).toEqual(["M", 6, 10]);
    expect( curve[1]).toEqual(["C", 1.0911363143436001, 13.179291761299359, 3.8564297605020004, 19.333015832948497, 10.977528204425585, 21.076703328100272]);
    expect( curve[2]).toEqual(["C", 14.282441595455813, 21.88595153578604, 17.72178844184384, 21.475514541738786, 19.999999999999996, 20]);
    expect( curve[3]).toEqual( undefined );
});
