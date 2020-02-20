import React, { Component } from "react"
import { AproposPreview } from "../../pages/apropos"
import { FooterLayoutPreview } from "../../components/footer"

class InformationPreview extends Component {
	constructor(props) {
		super(props)
		this.state = {
			image1: "",
			image2: ""
		}
	}
	subscribed = true

	fetchAsset = () => {
		const data = this.props.widgetsFor('informations')
		const pathImg1 = data.getIn(["data", "image1"])
		const pathImg2 = data.getIn(["data", "image2"])
		pathImg1 &&
			this.props.getAsset(pathImg1).then(res => {
				if (this.subscribed) {
					this.setState({ image1: res.toString() })
				}
			})
		pathImg2 &&
			this.props.getAsset(pathImg2).then(res => {
				if (this.subscribed) {
					this.setState({ image2: res.toString() })
				}
			})
	}

	componentDidMount() {
		this.fetchAsset()
	}

	componentWillUnmount() {
		this.subscribed = false
	}

	componentDidUpdate(prevProps) {
		const prevPath = prevProps.widgetsFor('informations').getIn(["data", "image1"])
		const path = this.props.widgetsFor('informations').getIn(["data", "image1"])
		if (prevPath !== path || prevProps.getAsset !== this.props.getAsset) {
			this.fetchAsset()
		}
	}


	render() {
		const data = this.props.widgetsFor('informations')
		return (
			<React.Fragment>
				<AproposPreview
					paragraph1={data.getIn(["data", "paragraph1"])}
					paragraph2={data.getIn(["data", "paragraph2"])}
					img1={this.state.image1}
					img2={this.state.image2}
				/>
				<FooterLayoutPreview
			        apropos={data.getIn(["data","aproposMini"])}
			        email={data.getIn(["data","email"])}
			        telephone={data.getIn(["data","telephone"])}
			        instagram={data.getIn(["data","instagram"])}
			        facebook={data.getIn(["data","facebook"])}
			        preview={true}
			    />
			</React.Fragment>
		)
	}
}

export default InformationPreview
