import React from 'react';
import {Link} from 'react-router-dom';
import routes from '../routes';
import style from './style.css'

export default class TestPage extends React.Component {
    render() {
        return (
            <ul className={style['pages-list']}>
                {
                    routes.map(
                        (route, index) => (
                            route.path !== '/'
                                ? <li
                                    className={style['page-item']}
                                    key={index}>
                                    <Link className={style['page-link']}
                                          to={route.path}>
                                        {route.name}
                                    </Link>
                                </li>
                                : null
                        )
                    )
                }
            </ul>
        )
    }
}