import React from 'react';
import style from './style.css';

export default class ZeroCase extends React.Component {


    constructor() {
        super();
    }

    render() {
        return (
            <div className={style['page-one']}>
                <h3>对比视图, 只做了样式改动</h3>
                <h4>无处理</h4>
                <div className={style['demo-ctn']}>
                    <textarea />
                </div>
                <h4>cols: 80, rows: 5, 有背景图片, 没有 outline, 没有蓝色边框</h4>
                <div className={style['demo-ctn']}>
                    <textarea className={style['with-bc']} cols="80" rows="5"/>
                </div>
                <h4>有宽高, 不可以 resize</h4>
                <div className={style['demo-ctn']}>
                    <textarea className={style['with-size']} cols="80" rows="5"/>
                </div>
            </div>
        )
    }
}