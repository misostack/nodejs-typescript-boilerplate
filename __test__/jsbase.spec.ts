import { describe } from 'node:test';
import { JSBASE_VERSION, JSBase } from '../src';

describe('JSBase', () => {
  it('test init function', () => {
    const jsbaseInstance = new JSBase();
    expect(jsbaseInstance).toBeInstanceOf(JSBase);
  });

  describe('test version function', () => {
    it('should return a valid version', () => {
      expect(JSBase.version()).toEqual(JSBASE_VERSION);
    });
  });

  describe('test version function', () => {
    it('should return a valid version', () => {
      const jsbaseInstance = new JSBase();
      const userName = 'JSBase';
      expect(jsbaseInstance.helloWorld(userName)).toContain(userName);
    });
  });
});
