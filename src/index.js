import React from 'react'
import ReactDOM from 'react-dom';
import PageContainer from './PageContainer/PageContainer'
import routes from './routes';

ReactDOM.render(
    <PageContainer routes={routes} />,
    document.getElementById('root')
);

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
}
