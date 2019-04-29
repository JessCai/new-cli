//在ftl文件中使用到的变量与变量值以json格式配置在下方
module.exports = {
  staffName: 'admin',
  TpListPriorType: [{
    "value": "1",
    "label": "分钟",
    "remark": null,
    "domainCode": null
  }, {
    "value": "2",
    "label": "小时",
    "remark": null,
    "domainCode": null
  }, {
    "value": "3",
    "label": "天",
    "remark": null,
    "domainCode": null
  }, {
    "value": "7",
    "label": "周",
    "remark": null,
    "domainCode": null
  }, {
    "value": "4",
    "label": "月",
    "remark": null,
    "domainCode": null
  }],
  TpListFitMethod: [{
    "value": "LINE",
    "label": "分段线性拟合",
    "remark": null,
    "domainCode": null
  }, {
    "value": "POWER",
    "label": "幂函数拟合",
    "remark": null,
    "domainCode": null
  }, {
    "value": "EXPONENTIAL",
    "label": "指数函数",
    "remark": null,
    "domainCode": null
  }, {
    "value": "LOGARITHMIC",
    "label": "对数拟合",
    "remark": null,
    "domainCode": null
  }],
  TpListWarnSign: [{
    "value": "UPPER",
    "label": "大于",
    "remark": null,
    "domainCode": null
  }, {
    "value": "LOWER",
    "label": "小于",
    "remark": null,
    "domainCode": null
  }, {
    "value": "AMONG",
    "label": "区间",
    "remark": null,
    "domainCode": null
  }],
  TpListLimitType: [{
    "value": "UPPER",
    "label": "上限阀值",
    "remark": null,
    "domainCode": null
  }, {
    "value": "LOWER",
    "label": "下限阀值",
    "remark": null,
    "domainCode": null
  }, {
    "value": "AMONG",
    "label": "上下限阀值",
    "remark": null,
    "domainCode": null
  }],
  TpListMinorMethod: [{
      "value": "TREND_EXCEPTION",
      "label": "趋势不确定性预测",
      "remark": null,
      "domainCode": null
    },
    {
      "value": "EVT",
      "label": "极值分布检测",
      "remark": null,
      "domainCode": null
    },
    {
      "value": "3SIGMA",
      "label": "3-Sigma",
      "remark": null,
      "domainCode": null
    },
    {
      "value": "CUSTOM",
      "label": "自定义",
      "remark": null,
      "domainCode": null
    },
    {
      "value": "TREND_TOLETATE",
      "label": "移动均值与标准差",
      "remark": null,
      "domainCode": null
    },
    {
      "value": "CHASE_CHANNEL",
      "label": "薛斯通道",
      "remark": null,
      "domainCode": null
    },
  ],
  TpListCycleMethod: [{
    "value": "CYCLE_EXCEPTION",
    "label": "周期不确定性预测",
    "remark": null,
    "domainCode": null
  }, {
    "value": "CYCLE_TOLETATE",
    "label": "同期均值与标准差",
    "remark": null,
    "domainCode": null
  }],
  TpListStaticMethod: [{
    "value": "STATIC",
    "label": "静态阈值",
    "remark": null,
    "domainCode": null
  }],
  OmcPerfRuleCfg: [{
      "omcPerfRuleId": 2582,
      "omcPerfKpiId": 400000279,
      "errTimesPrior": null,
      "priorType": 1,
      "errTimesCfg": 1,
      "algorithm": 5,
      "state": "0SA",
      "staffId": 1,
      "stateDate": "2018-09-05 19:36:55",
      "ruleName": "CPU使用率超阀值告警666",
      "remark": null,
      "priorTypeCn": "极端异常检测",
      "effectiveTime": "[{\"date\":null,\"month\":{\"beginDay\":17,\"endDay\":19},\"time\":null,\"week\":null,\"filterDate\":null}]",
      "quartz": null,
      "cycleNums": 3,
      "cycleSmoothType": 4,
      "cycleSmoothCoefficient": 0.75,
      "cycleSdTimes": 1,
      "cycleTimes": 1,
      "cyclePriorType": 2,
      "cycleAlarmGenRule": 1,
      "priority": 2582,
      "xsMs": 3,
      "xsDs": 0.4,
      "xsMl": 7,
      "xsDl": 0.8,
      "xsMInterval": 15,
      "xsAlarmGenRule": 1,
      "trendSmoothType": 1,
      "trendSmoothCoefficient": 60,
      "trendOffsetType": 3,
      "trendUpOffsetNum": 3,
      "trendDownOffsetNum": 3,
      "trendAlarmGenRule": 0,
      "trendTime": 1,
      "trendTimeSelect": 2,
      "neId": null,
      "configNeId": null,
      "alarmKpiId": "541",
      "configNeName": null,
      "monitorMethod": "CUSTOM",
      "limitType": "UPPER",
      "standard": 0.75,
      "alarmFrequency": 2,
      "falseAlarmRate": 0,
      "fittingMethod": "LINE",
      "alarmWay": "TIME",
      "sign": "AMONG",
      "resourceLine": 3,
      "intervalNum": 4,
      "intervalUnit": 1,
      "omcPerfKpiVRuleLevel": [{
          "thresholdValue": 50,
          "limitType": "UPPER",
          "alarmLevel": "1"
        },
        {
          "thresholdValue": 90,
          "limitType": "UPPER",
          "alarmLevel": "3"
        },
        {
          "thresholdValue": 70,
          "limitType": "UPPER",
          "alarmLevel": "2"
        }
      ]
    },
    {
      "omcPerfRuleId": 2581,
      "omcPerfKpiId": 400000279,
      "errTimesPrior": null,
      "priorType": 1,
      "errTimesCfg": 3,
      "algorithm": 0,
      "state": "0SA",
      "staffId": 1,
      "stateDate": "2018-09-05 19:26:28",
      "ruleName": "CPU使用率超阀值告警TTT",
      "remark": null,
      "priorTypeCn": "静态阀值",
      "effectiveTime": "[{\"date\":null,\"month\":{\"beginDay\":26,\"endDay\":28},\"time\":null,\"week\":null,\"filterDate\":null}]",
      "quartz": null,
      "cycleNums": 3,
      "cycleSmoothType": 4,
      "cycleSmoothCoefficient": 0.75,
      "cycleSdTimes": 1,
      "cycleTimes": 1,
      "cyclePriorType": 2,
      "cycleAlarmGenRule": 1,
      "priority": 2581,
      "xsMs": 3,
      "xsDs": 0.4,
      "xsMl": 7,
      "xsDl": 0.8,
      "xsMInterval": 15,
      "xsAlarmGenRule": 1,
      "trendSmoothType": 1,
      "trendSmoothCoefficient": 60,
      "trendOffsetType": 3,
      "trendUpOffsetNum": 3,
      "trendDownOffsetNum": 3,
      "trendAlarmGenRule": 0,
      "trendTime": 1,
      "trendTimeSelect": 2,
      "neId": null,
      "configNeId": null,
      "alarmKpiId": "2010010300003",
      "configNeName": null,
      "monitorMethod": "CUSTOM",
      "limitType": "UPPER",
      "standard": 0.75,
      "alarmFrequency": 2,
      "falseAlarmRate": 0,
      "fittingMethod": "LINE",
      "alarmWay": "TIME",
      "sign": "AMONG",
      "resourceLine": 3,
      "intervalNum": 4,
      "intervalUnit": 1,
      "omcPerfKpiVRuleLevel": [{
          "thresholdValue": 50,
          "limitType": "UPPER",
          "alarmLevel": "1"
        },
        {
          "thresholdValue": 90,
          "limitType": "UPPER",
          "alarmLevel": "3"
        },
        {
          "thresholdValue": 70,
          "limitType": "UPPER",
          "alarmLevel": "2"
        }
      ]
    },
    {
      "omcPerfRuleId": 2564,
      "omcPerfKpiId": 400000279,
      "errTimesPrior": null,
      "priorType": 1,
      "errTimesCfg": 3,
      "algorithm": 6,
      "state": "0SA",
      "staffId": 1,
      "stateDate": "2018-09-05 18:02:15",
      "ruleName": "可用时长预警YYY",
      "remark": null,
      "priorTypeCn": "可用时长预警",
      "effectiveTime": "[{\"date\":null,\"month\":{\"beginDay\":26,\"endDay\":28},\"time\":null,\"week\":null,\"filterDate\":null}]",
      "quartz": null,
      "cycleNums": 3,
      "cycleSmoothType": 4,
      "cycleSmoothCoefficient": 0.75,
      "cycleSdTimes": 1,
      "cycleTimes": 1,
      "cyclePriorType": 2,
      "cycleAlarmGenRule": 1,
      "priority": 2564,
      "xsMs": 3,
      "xsDs": 0.4,
      "xsMl": 7,
      "xsDl": 0.8,
      "xsMInterval": 15,
      "xsAlarmGenRule": 1,
      "trendSmoothType": 1,
      "trendSmoothCoefficient": 60,
      "trendOffsetType": 3,
      "trendUpOffsetNum": 3,
      "trendDownOffsetNum": 3,
      "trendAlarmGenRule": 0,
      "trendTime": 1,
      "trendTimeSelect": 2,
      "neId": null,
      "configNeId": null,
      "alarmKpiId": "541",
      "configNeName": null,
      "monitorMethod": "ALARM_RATE",
      "limitType": "UPPER",
      "standard": 0.75,
      "alarmFrequency": 2,
      "falseAlarmRate": 0,
      "fittingMethod": "POWER",
      "alarmWay": "TIME",
      "sign": "AMONG",
      "resourceLine": 3,
      "intervalNum": 4,
      "intervalUnit": 1,
      "omcPerfKpiVRuleLevel": [{
          "thresholdValue": 50,
          "limitType": "UPPER",
          "alarmLevel": "1"
        },
        {
          "thresholdValue": 90,
          "limitType": "UPPER",
          "alarmLevel": "3"
        },
        {
          "thresholdValue": 70,
          "limitType": "UPPER",
          "alarmLevel": "2"
        }
      ]
    },
    {
      "omcPerfRuleId": 2563,
      "omcPerfKpiId": 400000279,
      "errTimesPrior": null,
      "priorType": 1,
      "errTimesCfg": 3,
      "algorithm": 6,
      "state": "0SA",
      "staffId": 1,
      "stateDate": "2018-09-05 17:49:31",
      "ruleName": "可用时长预警YYY",
      "remark": null,
      "priorTypeCn": "可用时长预警",
      "effectiveTime": "[{\"date\":null,\"month\":{\"beginDay\":26,\"endDay\":28},\"time\":null,\"week\":null,\"filterDate\":null}]",
      "quartz": null,
      "cycleNums": 3,
      "cycleSmoothType": 4,
      "cycleSmoothCoefficient": 0.75,
      "cycleSdTimes": 1,
      "cycleTimes": 1,
      "cyclePriorType": 2,
      "cycleAlarmGenRule": 1,
      "priority": 2563,
      "xsMs": 3,
      "xsDs": 0.4,
      "xsMl": 7,
      "xsDl": 0.8,
      "xsMInterval": 15,
      "xsAlarmGenRule": 1,
      "trendSmoothType": 1,
      "trendSmoothCoefficient": 60,
      "trendOffsetType": 3,
      "trendUpOffsetNum": 3,
      "trendDownOffsetNum": 3,
      "trendAlarmGenRule": 0,
      "trendTime": 1,
      "trendTimeSelect": 2,
      "neId": null,
      "configNeId": null,
      "alarmKpiId": "541",
      "configNeName": null,
      "monitorMethod": "3SIGMA",
      "limitType": "UPPER",
      "standard": 0.75,
      "alarmFrequency": 2,
      "falseAlarmRate": 0,
      "fittingMethod": "LINE",
      "alarmWay": "TIME",
      "sign": "AMONG",
      "resourceLine": 3,
      "intervalNum": 4,
      "intervalUnit": 1,
      "omcPerfKpiVRuleLevel": [{
          "thresholdValue": 50,
          "limitType": "UPPER",
          "alarmLevel": "1"
        },
        {
          "thresholdValue": 70,
          "limitType": "UPPER",
          "alarmLevel": "2"
        },
        {
          "thresholdValue": 90,
          "limitType": "UPPER",
          "alarmLevel": "3"
        }
      ]
    },
    {
      "omcPerfRuleId": 2562,
      "omcPerfKpiId": 400000279,
      "errTimesPrior": null,
      "priorType": 1,
      "errTimesCfg": 3,
      "algorithm": 5,
      "state": "0SA",
      "staffId": 1,
      "stateDate": "2018-09-05 17:44:00",
      "ruleName": "极端异常检测告警TTT",
      "remark": null,
      "priorTypeCn": "极端异常检测",
      "effectiveTime": "[{\"date\":null,\"month\":{\"beginDay\":26,\"endDay\":28},\"time\":null,\"week\":null,\"filterDate\":null}]",
      "quartz": null,
      "cycleNums": 3,
      "cycleSmoothType": 4,
      "cycleSmoothCoefficient": 0.75,
      "cycleSdTimes": 1,
      "cycleTimes": 1,
      "cyclePriorType": 2,
      "cycleAlarmGenRule": 1,
      "priority": 2562,
      "xsMs": 3,
      "xsDs": 0.4,
      "xsMl": 7,
      "xsDl": 0.8,
      "xsMInterval": 15,
      "xsAlarmGenRule": 1,
      "trendSmoothType": 1,
      "trendSmoothCoefficient": 60,
      "trendOffsetType": 3,
      "trendUpOffsetNum": 3,
      "trendDownOffsetNum": 3,
      "trendAlarmGenRule": 0,
      "trendTime": 1,
      "trendTimeSelect": 2,
      "neId": null,
      "configNeId": null,
      "alarmKpiId": "541",
      "configNeName": null,
      "monitorMethod": "3SIGMA",
      "limitType": "UPPER",
      "standard": 0.75,
      "alarmFrequency": 2,
      "falseAlarmRate": 0,
      "fittingMethod": "LINE",
      "alarmWay": "TIME",
      "sign": "AMONG",
      "resourceLine": 3,
      "intervalNum": 4,
      "intervalUnit": 1,
      "omcPerfKpiVRuleLevel": [{
          "thresholdValue": 50,
          "limitType": "UPPER",
          "alarmLevel": "1"
        },
        {
          "thresholdValue": 70,
          "limitType": "UPPER",
          "alarmLevel": "2"
        },
        {
          "thresholdValue": 90,
          "limitType": "UPPER",
          "alarmLevel": "3"
        }
      ]
    }
  ],
  HolidayDaysCfg: [],
  neId: 900000117382712,
  kpiMessage: {
    "kpiId": 400000279,
    "classId": null,
    "kpiDesc": "CPU使用率",
    "kpiName": "CPU使用率",
    "unit": "%"
  },
  configNeId: '',
  EsUrl: 'http://192.168.7.123:5000',
  HolidayDaysCfg: [{
      "SORT_ID": 1,
      "LIST_VALUE": "YDJ",
      "LIST_LABEL": "元旦节"
    },
    {
      "SORT_ID": 2,
      "LIST_VALUE": "CJ",
      "LIST_LABEL": "春节"
    },
    {
      "SORT_ID": 3,
      "LIST_VALUE": "YXJ",
      "LIST_LABEL": "元宵节"
    },
    {
      "SORT_ID": 4,
      "LIST_VALUE": "QMJ",
      "LIST_LABEL": "清明节"
    },
    {
      "SORT_ID": 5,
      "LIST_VALUE": "WYJ",
      "LIST_LABEL": "五一节"
    },
    {
      "SORT_ID": 6,
      "LIST_VALUE": "DWJ",
      "LIST_LABEL": "端午节"
    },
    {
      "SORT_ID": 7,
      "LIST_VALUE": "ZQJ",
      "LIST_LABEL": "中秋节"
    },
    {
      "SORT_ID": 8,
      "LIST_VALUE": "GQJ",
      "LIST_LABEL": "国庆节"
    }
  ],
  EvtLoopTime :180
}
