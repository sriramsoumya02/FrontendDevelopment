import { getUser } from './api';

describe('When everything is OK', () => {
  test('should return a response', async () => {
    // In a real project, you would use Axios and mock the get method
    const result = await getUser();
    expect(result).toEqual({name:'soumya',id:'1'});
  });
});