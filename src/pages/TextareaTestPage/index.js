import React from 'react';
import style from './style.css';

export default class FirstCase extends React.Component {


    constructor() {
        super();
        this.bindRef = this.bindRef.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    state = {
        content: 'url:get?a=1&b=123&asdfassdf\n' +
        '中文: 我这辈子是不可能写 bug 的\n' +
        '邮箱: liyanhong@baidu.com;luqi@baidu.com\n' +
        'asdf\n'
    };

    bindRef(ref) {
        if (ref) {
            this.inputRef = ref;
        }
    }

    handleInputChange(value) {
        this.setState({content: value});
    }

    render() {
        return (
            <div className={style['test-component-ctn']}>
                <this.props.textarea
                    className={style['textarea']}
                    value={this.state.content}
                    placeholder="请输入一些东西啦"
                    inputRef={this.bindRef}
                    onChange={this.handleInputChange}
                />
            </div>
        )
    }
}