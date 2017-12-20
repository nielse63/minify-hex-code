const { isString } = require('../../lib/utils');
const { objects } = require('../shared');

describe('utils', () => {
  describe('sanity', () => {
    it('isString should be a function', () => {
      expect(isString).to.be.a.function;
    });
  });

  context('happy path', () => {
    it('should pass', () => {
      expect(isString('howdy')).to.be.true;
    });

    it('should pass', () => {
      expect(isString('')).to.be.true;
    });
  });

  context('sad path', () => {
    objects.forEach(object => {
      it('should fail', () => {
        expect(isString(object)).to.be.false;
      });
    });
  });
});
