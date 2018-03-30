import React from 'react';
import style from './style.css';

import TextareaTestPage from '../TextareaTestPage';

import Textarea from '../../components/ContenteditableDiv';


export default class FirstCase extends React.Component {


    constructor() {
        super();
    }

    render() {
        return (
            <div className={style['page-one']}>
                <h3>方案三: contenteditable 属性</h3>
                <div className={style['demo-ctn']}>
                    <TextareaTestPage textarea={Textarea}/>
                </div>
            </div>
        )
    }
}