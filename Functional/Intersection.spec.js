const sinon = require('sinon');
const expect = require('chai').expect;

const Intersection = require('./Intersection');

describe('Intersection Functional', () => {
  it('creates an Intersection which defaults to {N: \'RED\', S: \'RED\', W: \'GREEN\', E: \'GREEN\'}', () => {
    let intersection = Intersection();
    expect(intersection.next().value).to.eql({N: 'RED', S: 'RED', W: 'GREEN', E: 'GREEN'});
  });

  it('should cycle through colors', () => {
    let intersection = Intersection();
    expect(intersection.next().value).to.eql({N: 'RED', S: 'RED', W: 'GREEN', E: 'GREEN'});
    expect(intersection.next().value).to.eql({N: 'RED', S: 'RED', W: 'YELLOW', E: 'YELLOW'});
    expect(intersection.next().value).to.eql({N: 'GREEN', S: 'GREEN', W: 'RED', E: 'RED'});
    expect(intersection.next().value).to.eql({N: 'YELLOW', S: 'YELLOW', W: 'RED', E: 'RED'});
    expect(intersection.next().value).to.eql({N: 'RED', S: 'RED', W: 'GREEN', E: 'GREEN'});
  });
});
