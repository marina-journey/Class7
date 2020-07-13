describe('functions', () => {
  describe('sum', () => {
    it('should sum two values', () => {
      expect(sum(5,2)).to.equal(7);
    })
  })
  describe('length', () => {
    it('should calculate length of object', () => {
      expect(
        length({
          a: 2,
          b: 3,
        })
      ).to.equal(2);
    });
  });
  describe('copy', () => {
    it('should create new object', () => {
      const obj = {
        a: 2,
        b: 3,
      };
      expect(copy(obj)).not.equal(obj);
    });
    it('should create new object', () => {
      const obj = {
        a: 2,
        b: 3,
      };
      expect(copy(obj)).to.deep.equal(obj);
    });
  });
  describe('deepCopy', () => {
    it('should create new object', () => {
      const obj = {
        a: {
          a: 2,
        },
        b: 3,
      };
      const objectCopy = deepCopy(obj);

      expect(objectCopy.a).not.equal(obj.a);
    });
  });
});