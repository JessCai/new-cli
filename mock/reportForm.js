import Mock from 'mockjs';

const filterCondition=Mock.mock(RegExp('report/getFormTableData' + ".*"), 'post', (options) => {
  const mockData = {
    'data|5': [{
        'application': '@word()',
        'serveResponseTime': '@integer(50, 200)',
        'time': '@integer(10, 100)'
      }],
      'totalCount':1000
    };
return Mock.mock(mockData);
})
export default { filterCondition}


