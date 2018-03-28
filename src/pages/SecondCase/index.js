import React from 'react';
import style from './style.css';

import TextareaTestPage from '../TextareaTestPage';

import Textarea from '../../components/TextareaWithGhost';


export default class SecondCase extends React.Component {


    constructor() {
        super();
    }

    render() {
        return (
            <div className={style['page-one']}>
                <h3>方案二: 使用隐藏 textarea 元素</h3>
                <div className={style['demo-ctn']}>
                    <TextareaTestPage textarea={Textarea}/>
                </div>
            </div>
        )
    }
}