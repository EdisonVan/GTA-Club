import React from 'react'
import { Form } from 'antd'
// import { toJS } from 'mobx'
// import { observer, inject } from 'mobx-react'
//, Select  import { defaultFormItemConfig } from '../../../utils/common'
/* @observer
@inject('store') */
class AddLogForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    // this.props.store.dataStore.fetchVisitTypeData()
  }
  render() {
    return (
      <>
        Use test
        {/* const { dataStore } = this.props.store console.log('requestQuantity',toJS(dataStore)) */}
      </>
    )
  }
}
export default Form.create()(AddLogForm)
