import React from 'react';
import logo from './logo.svg';
import style from './style.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

export default class PageContainer extends React.Component {

    render() {
        const {routes} = this.props;
        return (
            <Router>
                <div className={style['page-container']}>
                    <img className={style['react-Logo']} src={logo}
                         alt="React Logo"/>
                    <h1 className={style['page-title']}>
                        <Link
                            to='/'
                            title='back to home'
                            className={style['home-link']}>
                            React 组件测试
                        </Link>
                    </h1>
                    <div className={style['component-container']}>
                        {
                            routes.map(
                                (route, index) => (
                                    <Route
                                        key={index}
                                        exact
                                        path={route.path}
                                        render={
                                            props => (
                                                <route.component
                                                    {...props}
                                                    routes={route.routes}
                                                />
                                            )
                                        }
                                    />
                                )
                            )
                        }
                    </div>
                </div>
            </Router>
        )
    }
}