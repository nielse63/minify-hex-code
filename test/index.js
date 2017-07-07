
import chai from 'chai';
import asserttype from 'chai-asserttype';
import chaiDeepMatch from 'chai-deep-match';
import MinifyHexCodeSpec from './specs/minify-hex-code.spec';

chai.use(asserttype);
chai.use(chaiDeepMatch);

global.expect = chai.expect;

MinifyHexCodeSpec();
