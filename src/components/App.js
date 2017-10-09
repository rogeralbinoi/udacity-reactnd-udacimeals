import React, { Component } from 'react'
import { addRecipe, removeFromCalendar } from '../actions'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

function mapStateToProps(appState) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.keys(appState.calendar[day]).reduce((meals, meal) => {
        meals[meal] = appState.calendar[day][meal]
          ? appState.calendar[day][meal]
          : null

        return meals
      }, {})
    })),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)