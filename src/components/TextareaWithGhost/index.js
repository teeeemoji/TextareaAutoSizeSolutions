import React from 'react'
import style from './style.css';
import PropTypes from 'prop-types';

import {
    copyStyle,
    calculateGhostTextareaHeight,
    onNextFrame,
    clearNextFrameAction
} from "./copy-style";
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
        this.bindGhostRef = this.bindGhostRef.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.resize = this.resize.bind(this);
        this.state = {
            height: (props.style && props.style.height) || 0,
        };
    }

    componentWillMount() {

    }

    componentDidMount() {
        copyStyle(this.ghostRef, this.inputRef);
        this.resize();
    }

    componentWillReceiveProps() {
        // this.delayResize();
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

    // 绑定 ref
    bindGhostRef(ref) {
        if (ref) {
            this.ghostRef = ref;
        }
    }

    // 重新计算 textarea 的宽高
    resize() {
        console.log('resizing...')
        const height = calculateGhostTextareaHeight(this.ghostRef, this.inputRef);
        this.setState({height});
    }

    // 延迟重新计算 textarea 的宽高
    delayResize() {
        clearNextFrameAction(this.resizeTimeout);
        this.resizeTimeout = onNextFrame(() => this.resize());
    }

    render() {
        console.log('rendering...')
        const {className, value, placeholder} = this.props;
        const {height} = this.state;
        return (
            <div className={style['comp-textarea-with-ghost']}>
                <textarea
                    ref={this.bindRef}
                    className={style['textarea'] + ' ' + className}
                    placeholder={placeholder}
                    value={value}
                    onChange={this.handleChange}
                    style={{height}}
                />
                <textarea
                    className={style['textarea-ghost']}
                    ref={this.bindGhostRef}
                    onChange={noop}
                />
            </div>
        )
    }

    handleChange(e) {
        this.resize();
        let value = e.target.value;
        this.props.onChange(value);
    }
}