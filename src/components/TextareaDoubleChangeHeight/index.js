import React from 'react'
import style from './style.css';
import PropTypes from 'prop-types';
import {noop} from '../../utils/common-const';

export default class CompName extends React.Component {

    static propTypes = {
        className: PropTypes.string,
        value: PropTypes.string,
        placeholder: PropTypes.string,
        inputRef: PropTypes.func,
        onChange: PropTypes.func
    }

    static defaultProps = {
        className: 'textarea',
        value: '',
        placeholder: '请输入',
        onChange: noop
    }

    constructor() {
        super();
        this.bindRef = this.bindRef.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDelay = this.handleChangeDelay.bind(this);
        this.resize = this.resize.bind(this);
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

    // 重新计算 textarea 的高度
    resize() {
        if (this.inputRef) {
            console.log('resizing...')
            this.inputRef.style.height = 'auto';
            this.inputRef.style.height = this.inputRef.scrollHeight + 'px';
        }
    }

    // @optmize: 尝试让动画更平滑
    // 重新计算 textarea 的高度
    delayResize() {
        if (this.nextFrameTimeout) {
            clearTimeout(this.nextFrameTimeout)
        }
        this.nextFrameTimeout = setTimeout(() => this.resize());
    }

    componentDidMount() {
        this.resize();
    }

    componentWillReceiveProps() {
        console.log('receiving new props...')
    }

    render() {
        console.log('render...');
        const {className, value, placeholder} = this.props;
        return (
            <textarea
                ref={this.bindRef}
                className={style['textarea'] + ' ' + className}
                placeholder={placeholder}
                value={value}
                onChange={this.handleChange}
            />
        )
    }

    handleChange(e) {
        // this.delayResize();
        this.props.onChange(e.target.value);
        this.resize();
    }

    handleChangeDelay(e) {
        this.delayResize();
        this.props.onChange(e.target.value);
    }
}