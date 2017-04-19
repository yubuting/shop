/*import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './index.scss'
*/
import React, {Component } from 'react'
import { Link } from 'react-router'
import styles from './index.scss'

export default class Header extends Component {
  state = {
    autoCity:'郑州',
    searchData: {
      cityLink:'/',
      cityName:'郑州',
      searchLink:'/',
      messageLink:'/',
      messageBool:true
    }
  }
  //className={`ver-center ${style.center}`}  可以直接使用style. 来调用样式
  render (){
    const {autoCity , searchData } = this.state
// 相当于 const autoCity = this.state.autoCity const searchData = this.state.searchData
    return (
      <div className={styles.root}>

        <Link to={searchData.cityLink} className={styles.left}>
        <span className='font-28'>{autoCity}</span>
        <span>▼</span>
        </Link>

        <Link to={searchData.searchLink} className={`ver-center ${styles.center}`}>
        <i className={`i-4019 ${styles.search}`}/>
        <input type='text'/>
        </Link>
        <Link to={searchData.messageLink} className={styles.right}>
        {searchData.messageBool && <span className={styles.tip}/>}
        { /*利用了js做逻辑与判断的短路特性 相当于当messageBool 为真时显示后面的 span*/ }
          <i className='i-4020'/>
        </Link>
      </div>
    ) 
  }
}
/*export default class Header extends Component {
  state = {
    autoCity: '郑州',
    searchData: {
      cityLink: '/',
      cityName: '郑州',
      searchLink: '/',
      messageLink: '/',
      messageBool: true
    }
  }

  render () {
    const { autoCity, searchData } = this.state

    return (
      <div className={styles.root}>
        <Link to={searchData.cityLink} className={styles.left}>
          <span className="font-28">{autoCity}</span>
          <span>▼</span>
        </Link>
        <Link to={searchData.searchLink} className={`ver-center ${styles.center}`}>
          <i className={`i-4019 ${styles.search}`} />
          <span >嗖的一声</span>
        </Link>

        <Link to={searchData.messageLink} className={styles.right} >
          {searchData.messageBool && <span className={styles.tip}/>}
          <i className="i-4020"/>
        </Link>
      </div>
    )
  }
}
*/
