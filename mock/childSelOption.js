import Mock from 'mockjs';
      export const loadPagelist = Mock.mock(RegExp('/report/childSelOption' + '.*'), (options) => {
        const mockData = {
          "options|2":[{
            label: '@county',
            value: '@id'
          }]
        }
        return Mock.mock(mockData);
      })