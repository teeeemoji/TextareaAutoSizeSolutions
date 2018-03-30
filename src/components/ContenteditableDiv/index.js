import React from 'react'
import style from './style.css';
import PropTypes from 'prop-types';
import classname from 'classnames';

import {noop} from "../../utils/common-const";

export default class TextareaWithGhost extends React.Component {

    static propTypes = {
        className: PropTypes.string,
        value: PropTypes.string,
        placeholder: PropTypes.string,
        inputRef: PropTypes.func,
        onChange: PropTypes.func,
        style: PropTypes.object
    };

    static defaultProps = {
        className: 'textarea',
        value: '',
        placeholder: '请输入',
        onChange: noop,
        style: {}
    };


    constructor(props) {
        super(props);
        this.bindRef = this.bindRef.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlePaste = this.handlePaste.bind(this);
    }

    componentWillMount() {

    }

    componentDidMount() {
        this.initValue();
    }

    componentWillReceiveProps() {
        this.initValue();
    }

    // 绑定 ref
    bindRef(ref) {
        if (ref) {
            this.inputRef = ref;
            if (this.props.inputRef) {
                this.props.inputRef(ref);
            }
        }
    }

    initValue() {
        if (this.inputRef.innerText !== this.props.value) {
            this.inputRef.innerText = this.props.value;
        }
    }

    render() {
        console.log('rendering...');
        console.log(style);
        const {className, value, placeholder} = this.props;
        return (
            <div className={style['comp-div-contenteditable']}>
                <div
                    ref={this.bindRef}
                    className={classname(style['textarea'], className, {[style['empty']]: !value})}
                    onChange={this.handleChange}
                    onPaste={this.handlePaste}
                    placeholder={placeholder}
                    contentEditable
                    // dangerouslySetInnerHTML={{__html: this.props.value}}
                />
            </div>
        )
    }

    handleChange(e) {
        let value = e.target.innerText;
        this.props.onChange(value);
    }

    handlePaste(e) {
        e.preventDefault();
        // let text = e.clipboardData.getData("text");
        let text = e.clipboardData.getData('text/plain');
        document.execCommand('insertText', false, text);
    }
}