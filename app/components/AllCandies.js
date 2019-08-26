import React from 'react'
import { connect } from 'react-redux'
import SingleCandy from './SingleCandy'

import { getAllCandiesThunk } from '../reducers'

export class DisconnectedAllCandies extends React.Component {

  componentDidMount() {
    this.props.getAllCandies()
  }

  render() {
    console.log('Reaching AllCandies!', this.props);
    return (
      <div>
        <h2 className="section-title">Candies</h2>
        <ul className="candy-container">
          {
            this.props.candies.map( candy => (
            <div className="single-candy" key={candy.id}>
              <SingleCandy candy={candy} />
            </div>))
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  candies: state.candies
})

const mapDispatchToProps = (dispatch) => ({
  getAllCandies: () => dispatch(getAllCandiesThunk())
})

export const AllCandies = connect(mapStateToProps, mapDispatchToProps)(DisconnectedAllCandies)

