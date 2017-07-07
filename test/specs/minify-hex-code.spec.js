
import minifyHexCode, { isString } from '../../src/minify-hex-code';

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
  ]
};

export default function MinifyHexCodeSpec() {
  describe('MinifyHexCode', () => {
    describe('sanity', () => {
      it('isString should be a function', () => {
        expect(isString).to.be.a.function;
      });

      it('minifyHexCode should be a function', () => {
        expect(minifyHexCode).to.be.a.function;
      });
    });

    describe('#isString', () => {
      context('happy path', () => {
        it('should pass', () => {
          expect(
            isString('howdy')
          ).to.be.true;
        });

        it('should pass', () => {
          expect(
            isString('')
          ).to.be.true;
        });
      });

      context('sad path', () => {
        [false, 123, {}, []].forEach(function(object) {
          it('should fail', () => {
            expect(
              isString(object)
            ).to.be.false;
          });
        })
      });
    });

    describe('#minifyHexCode', () => {
      context('happy path', () => {
        colors.long.forEach(function(color, i) {
          it('should shorten hex codes', function() {
            expect(
              minifyHexCode(color)
            ).to.equal(colors.short[i]);
          })
        })
      })

      context('bad path', () => {
        [false, 123, {}, []].forEach(function(object) {
          it('should throw error', () => {
            expect(
              minifyHexCode.bind(null, object)
            ).to.throw('Invalid hex code string provided');
          });
        })
      })
    });
  });
}
