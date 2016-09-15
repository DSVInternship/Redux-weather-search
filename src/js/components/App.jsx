import React from 'react';
import SearchBar from '../containers/SearchBar.jsx';
import WeatherList from '../containers/WeatherList.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
              <SearchBar/>
              <WeatherList/>
            </div>

        )
    }
}
