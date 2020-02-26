import React, { Component } from "react"

class PostPreview extends Component {
	constructor(props) {
		super(props)
		this.state = {
			src: "",
		}
	}
	subscribed = true

	fetchAsset = () => {
		const path = this.props.entry.getIn(["data", "coverture"])
		path &&
			this.props.getAsset(path).then(res => {
				if (this.subscribed) {
					this.setState({ src: res.toString() })
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
		const prevPath = prevProps.entry.getIn(["data", "coverture"])
		const path = this.props.entry.getIn(["data", "coverture"])
		if (prevPath !== path || prevProps.getAsset !== this.props.getAsset) {
			this.fetchAsset()
		}
	}

	render() {
		return (
			<React.Fragment>
				<div className="article_wrapper">
					<div className="article_head">
						<div
						    className="article_head--bg"
						    style={{ backgroundImage: `url(${this.state.src})` }}
						/>
						<h3>{this.props.entry.getIn(["data", "titre"])}</h3>
					</div>
					<div className="article_body">{this.props.widgetFor("body")}</div>
				</div>
			</React.Fragment>
		)
	}
}

export default PostPreview
