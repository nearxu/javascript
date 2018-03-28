import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Number } from '@/utils/number';
import Ball from '../ball/index';
import http from '@/utils/request';
import session from '@/services/session';
/*
	planContent
a)单式：01,02,03,04,05,06|07 ssq 35 12 00100
a)单式：01,02,03,04,05|07,08 dlt 33 16 00102
a)单式：1|2|3|4|5|6|7 qxc 9*7 00107
c)单式：1|2|3 p3 9*3 00104
a)单式：1|2|3|4|5 p5 9*5 00103
a)单式：01,02,03,04,05,06,07 qlc 30 00101
a)单式：1|2|3 f3d 9*3 00105
  getSrand => 开始 结束 个数
*/
class Betting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ballArr: []
    };
  }
  getBallArr(lotteryCode) {
    let ballArr = [];
    let planContent = '';
    switch (lotteryCode) {
      case 100:
        ballArr = [
          Number.attachZero(Number.getSrand(1, 35, 7)),
          Number.attachZero(Number.getSrand(1, 12, 1))
        ];
        plantContent = `${ballArr[0].toString()}|${ballArr[1]}`;
        break;
      case 101:
        ballArr = [Number.attachZero(Number.getSrand(1, 30, 7))];
        plantContent = ballArr.toString();
        break;
      case 102:
        ballArr = [
          Number.attachZero(Number.getSrand(1, 33, 5)),
          Number.attachZero(Number.getSrand(1, 16, 2))
        ];
        plantContent = `${ballArr[0].toString()}|${ballArr[1]}`;
        break;
      case 107:
        ballArr = [Number.getSrand(1, 9, 7)];
        plantContent = ballArr[0].toString().replace(/,/g, '|');
        break;
      case 105:
        ballArr = [Number.getSrand(1, 9, 3)];
        plantContent = ballArr[0].toString().replace(/,/g, '|');
        break;
      case 104:
        ballArr = [Number.getSrand(1, 9, 3)];
        plantContent = ballArr[0].toString().replace(/,/g, '|');
        break;
      case 103:
        ballArr = [Number.getSrand(1, 9, 5)];
        plantContent = ballArr[0].toString().replace(/,/g, '|');
        break;
      default:
        break;
    }
    return { ...ballArr, ...plantContent };
  }
  getExchange() {
    http
      .post('/activity/exchange', {
        cdkey: cdkey,
        planContentList: planContent,
        token: session.get('token')
      })
      .then(res => {
        console.log(res.data);
        // if (res.data.cdkeyType === 2) {
        //   // 积分 跳方案详情
        //   window.location.href = `sc.html#/orders/${res.data.orderCode}`;
        // } else if (res.data.cdkeyType === 1) {
        //   Message.alert({
        //     title: '温馨提示',
        //     btnTxt: ['确定', '我的红包'], // 可不传，默认是确定
        //     btnFn: [
        //       () => {
        //         this.pageGo();
        //       },
        //       () => {
        //         this.pageGo();
        //       }
        //     ],
        //     children: (
        //       <div className="message-alert">
        //         <div className="content">恭喜您兑换成功</div>
        //       </div>
        //     )
        //   });
        // }
      })
      .catch(err => {
        console.log(err);
        // Message.toast(err.message);
      });
  }
  render() {
    let { betNum, lotteryCode } = this.props;
    lotteryCode = 107;
    betNum = 1;
    let betArr = [];
    if (betNum > 1) {
      for (let i = 0; i < betNum; i++) {
        betArr[i] = this.getBallArr(lotteryCode);
      }
    } else if (betNum === 1) {
      betArr.push(this.getBallArr(lotteryCode));
    }
    console.log(betArr, 'a');
    return (
      <div className="bet-model">
        {betArr.map((m, index) => <Ball BallArr={ m } />)}
      </div>
    );
  }
}

export default Betting;
