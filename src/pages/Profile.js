import React from 'react'
import HeadFakebook from '../components/author/HeadFakebook'
import { Row, Col, Divider } from 'antd'
import PostList from '../components/post/PostList'

export default class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      postList: [],
    }
  }

  componentDidMount() {
    // Lab
  }

  render() {
    return (
      <Col>
        <Row type="flex" justify="center">
          <HeadFakebook
            imageSrc="https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-9/71561886_1609849782479256_2419419055669641216_n.jpg?_nc_cat=111&_nc_eui2=AeGGEac45Y7P61v-juKLihSuqQvzyZAUvy9dz3sSynbKiBRLT6lgXhjtX5jjtNAY9MSDoejoGIsDoajvZuQbEsl64swyCN-293Zo2K_d4tRtLw&_nc_oc=AQnKNnIYBPW5aLIzcAhWJ2OrZZN-2HCc5yDfjONO_xau-OVSNZ2MiGhybKrEeToeLgw&_nc_ht=scontent.fbkk22-3.fna&oh=ba6de0084eebf847928c72be1a7551dd&oe=5E4F2B50"
            name="Nuttachai Kulthammanit"
          />
        </Row>
        <Row type="flex" justify="center">
          <Col md={18} sm={20} xs={22}>
            <Divider />
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col md={12} sm={16} xs={24}>
            <PostList
              postList={this.state.postList}
              owner={this.state.owner}
            />
          </Col>
        </Row>
      </Col>
    )
  }
}