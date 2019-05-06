import Mock from 'mockjs'
import { filterCondition } from './reportForm';
import loadPagelist from './childSelOption';
Mock.mock('api/test', 'get', {

  'webPage|1-3': [{
    id: '@id',
    name: '@ctitle(5)',
    'htmlDuration|0.5-10': 1.2,
    'completeDuration|3.2-50': 20,
    'pvNumber|10-20': 10,
    'jsErrorNumber|0.00-1': 0.32
  }],
  'userExperience|2-5': [{
    id: '@id',
    name: '@ctitle(5)',
    'htmlDuration|0.5-10': 1.2,
    'completeDuration|3.2-50': 20,
    'pvNumber|10-20': 10,
    'jsErrorNumber|0.00-1': 0.32
  }],
  'ajax|4-7': [{
    id: '@id',
    name: '@ctitle(5)',
    'htmlDuration|0.5-10': 1.2,
    'completeDuration|3.2-50': 20,
    'pvNumber|10-20': 10,
    'jsErrorNumber|0.00-1': 0.32
  }]

});