import React from 'react'
import style from './style.css';
import PropTypes from 'prop-types';
import classname from 'classnames';

export default class CompName extends React.Component {

    static propTypes = {

    }

    static defaultProps = {

    }

    render() {
        return (
            <div className={style['comp-xxx']}>
                这里是一个组件
            </div>
        )
    }
}