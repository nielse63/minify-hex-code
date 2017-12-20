const minifyHexCode = require('../../lib/minify-hex-code');
const { objects } = require('../shared');

const colors = {
  long: [
    '#000000',
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#FFFF00',
    '#00FFFF',
    '#FF00FF',
    '#FFFFFF',
    '#5fafbf',
    '#bfe072',
    '#8546f2',
    '#3fd3ac',
    '#84ede0',
  ],
  short: [
    '#000',
    '#f00',
    '#0f0',
    '#00f',
    '#ff0',
    '#0ff',
    '#f0f',
    '#fff',
    '#5fafbf',
    '#bfe072',
    '#8546f2',
    '#3fd3ac',
    '#84ede0',
  ],
};

describe('minifyHexCode', () => {
  describe('sanity', () => {
    it('minifyHexCode should be a function', () => {
      expect(minifyHexCode).to.be.a.function;
    });
  });

  context('happy path', () => {
    colors.long.forEach((color, i) => {
      it('should shorten hex codes', () => {
        expect(minifyHexCode(color)).to.equal(colors.short[i]);
      });
    });
  });

  context('bad path', () => {
    it('should handle no input', () => {
      expect(minifyHexCode.bind(null, undefined)).to.throw(
        'Invalid hex code string provided',
      );
    });

    objects.forEach(object => {
      it('should throw error', () => {
        expect(minifyHexCode.bind(null, object)).to.throw(
          'Invalid hex code string provided',
        );
      });
    });
  });
});
